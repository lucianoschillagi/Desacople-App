// users.js
const { admin, db } = require('../util/admin');
const config = require('../util/config');
const firebase = require('firebase');

// Cuando inicializo firebase le paso los datos de configuración del proyecto "todoApp"
firebase.initializeApp(config);

// Importa las dos funciones que sirven para validar tanto el "login" como el "signUp"
const { validateLoginData, validateSignUpData } = require('../util/validators');

/////////////////////////////
/// Authentication Methods
/////////////////////////////

// Un método para loguear un usuario (es decir, determinar si el usuario ya está
// registrado o no en la app, para esto el usuario debe entregar sus credenciales,
// su email y su password)
exports.loginUser = (request, response) => {
   
   const user = {
      email: request.body.email,
      password: request.body.password
    }

   // Valida los datos ingresados por el usuario
   const { valid, errors } = validateLoginData(user);
	if (!valid) return response.status(400).json(errors);

   // Firebase Authentication entra en juego aquí
   firebase
   
      .auth()
      .signInWithEmailAndPassword(user.email, user.password) // 👈 SIGN IN USER !!!!!!

      .then( data  => {
         // Si los datos son válidos, devuelve el "token" del usuario
         return data.user.getIdToken();
      })

      .then( token  => {
         // Devuelve el "token" en un json
         return response.json({ token });
      })

      // Si las credenciales son inválidas devuelve un json con el error
      .catch((error) => {
         console.error(error);
         return response.status(403).json({ general: 'wrong credentials, please try again'});
      })
};

// Un método para registrar un usuario
exports.signUpUser = (request, response) => {

   const newUser = {
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      email: request.body.email,
      phoneNumber: request.body.phoneNumber,
      country: request.body.country,
      password: request.body.password,
      confirmPassword: request.body.confirmPassword,
      username: request.body.username
   };

   const { valid, errors } = validateSignUpData(newUser);

   if (!valid) return response.status(400).json(errors);

   let token, userId;

   db
      .doc(`/users/${newUser.username}`)
      .get()
      // ...
      .then((doc) => {
         if (doc.exists) {
            return response.status(400).json({ username: 'this username is already taken' });
         } else {
            return firebase
                     .auth()
                     .createUserWithEmailAndPassword( // 👈 CREATE A USER !!!!!!
                        newUser.email, 
                        newUser.password
                  );
         }
      })

      .then( data => {
         userId = data.user.uid;
         return data.user.getIdToken(); // 👈 CREATE USER ID TOKEN !!!!!!
      })

      .then((idtoken) => { // 👈 OBTAINS USER ID TOKEN !!!!!!

         token = idtoken;

         const userCredentials = {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            username: newUser.username,
            phoneNumber: newUser.phoneNumber,
            country: newUser.country,
            email: newUser.email,
            createdAt: new Date().toISOString(),
            userId
         };

         return db
                  .doc(`/users/${newUser.username}`)
                  .set(userCredentials);
      })

      .then(()=>{
         ///////////////////////////////////////////////////////////////////////////////
         return response.status(201).json({ token }); // 👈 RETURNS USER ID TOKEN !!!!!!
         ///////////////////////////////////////////////////////////////////////////////
      })

      .catch((err) => {
         console.error(err);
         if (err.code === 'auth/email-already-in-use') {
            return response.status(400).json({ email: 'Email already in use' });
         } else {
            return response.status(500).json({ general: 'Something went wrong, please try again' });
      }
   });
}

/////////////////////////////
/// Profile Picture Methods
/////////////////////////////

// Delete Image on the Bucket (Firebase - Storage)
deleteImage = (imageName) => {
   const bucket = admin.storage().bucket();
   const path = `${imageName}`
   return bucket.file(path).delete()
   .then(() => {
       return
   })
   .catch((error) => {
       return
   })
}

// Upload profile picture
exports.uploadProfilePhoto = (request, response) => {
  const BusBoy = require('busboy');
  const path = require('path');
  const os = require('os');
  const fs = require('fs');
  const busboy = new BusBoy({ headers: request.headers });

  let imageFileName;
  let imageToBeUploaded = {};

  busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {

     if (mimetype !== 'image/png' && mimetype !== 'image/jpeg') {
        return response.status(400).json({ error: 'Wrong file type submited' });
     }

     const imageExtension = filename.split('.')[filename.split('.').length - 1];
       imageFileName = `${request.user.username}.${imageExtension}`;

     const filePath = path.join(os.tmpdir(), imageFileName);
     imageToBeUploaded = { filePath, mimetype };
     file.pipe(fs.createWriteStream(filePath));

   });

   deleteImage(imageFileName);

   busboy.on('finish', () => {
     admin
        .storage()
        .bucket()
        .upload(imageToBeUploaded.filePath, {
           resumable: false,
           metadata: {
              metadata: {
                 contentType: imageToBeUploaded.mimetype
              }
           }
        })
        .then(() => {
           const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media`;
           return db.doc(`/users/${request.user.username}`).update({
              imageUrl
           });
        })
        .then(() => {
           return response.json({ message: 'Image uploaded successfully' });
        })
        .catch((error) => {
           console.error(error);
           return response.status(500).json({ error: error.code });
        });
  });
  
  busboy.end(request.rawBody);
  
};

//////////////////////////////////
/// User Details Profile Methods
//////////////////////////////////

// Get User Details 👁
exports.getUserDetail = (request, response) => {

   // Los datos de un usuario en particular.
   let userData = {};

   // Busca a un usuario específico en la base de datos
   // 1. Get the Request
   db
     .doc(`/users/${request.user.username}`)
     .get()
     // ...
     .then((doc) => {
        if (doc.exists) {
               userData.userCredentials = doc.data();
               return response.json(userData);
        }	
     })

     // 2. Handling errors
     .catch((error) => {
        console.error(error);
        return response.status(500).json({ error: error.code });
     });
}

// Update User Details 🧽 + 🖋
exports.updateUserDetails = (request, response) => {

   // Busca en la base de datos un usuario específico
   let document = db.collection('users').doc(`${request.user.username}`);
   // Actualizar el documento que contiene los datos de ese usuario
   document.update(request.body)
   .then(()=> {
       response.json({message: 'Updated successfully'});
   })

   // Handling errors
   .catch((error) => {
       console.error(error);
       return response.status(500).json({ 
           message: "Cannot Update the value"
       });
   });
}