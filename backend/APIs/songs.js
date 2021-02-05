// TODOs API
// Una API para CONTECTAR la App (Cliente) con Firestore (la base de datos del lado del Servidor)

// Importing "Firestore"
const { db } = require('../util/admin');

/// API Methods
// GET (Read the firestore db) 👁
// Task: Traer todos los documentos de la colección "todos" alojada en firestore
exports.getAllTodos = (request, response) => {

    // Solicita los 'todos' a la base de datos (Firestore)
    // 1. Request with filters
	db
		.collection('todos')
		// Busca la colección de "todos" de un usuario en particular
		.where('username', '==', request.user.username) 
		.orderBy('createdAt', 'desc')
      .get()

    // 2. Handling Response
		.then((data) => {

			console.log(data);

			// En este array voy a almacenar todos los documentos
			// de la colección con sus correspondientes datos
			let todos = [];

			// Extrae los siguiente datos de cada documento de la colección
			data.forEach( doc  => {
				todos.push({
                     todoId: doc.id,
                     title: doc.data().title,
							body: doc.data().body,
							createdAt: doc.data().createdAt,
				});
			});
			return response.json(todos);

        })
        
    // 3. Handling Errors
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};

// POST (Write the firestore db) 🖋
// Task: Crear un nuevo documento que representa un nuevo "todo" en firestore
exports.postOneTodo = (request, response) => {

	/// Validation ✅ 
	// Comprueba que el body de la solicitud no esté vacío
	if (request.body.body.trim() === '') {
		return response.status(400).json({ body: 'Must not be empty' });
    }

	// Comprueba que el title de la solicitud no esté vacío
   if (request.body.title.trim() === '') {
        return response.status(400).json({ title: 'Must not be empty' });
    }
	 
	// Crea un nuevo objeto (un nuevo "todo" item con sus correspondiente datos)
   const newTodoItem = {
		title: request.body.title,
		body: request.body.body,
		username: request.user.username,
		createdAt: new Date().toISOString()
	}
	
	// Va la colección "todos" de la db y le agrega un nuevo "todo" item
	db
		// 1. Request 🚀
		.collection('todos')
		.add(newTodoItem) // add = POST

		// 2. Handle Succesfull Response 👍
		.then((doc)=>{
			const responseTodoItem = newTodoItem;
			responseTodoItem.id = doc.id;
			return response.json(responseTodoItem);
		})

		// 3. Handle Errors 👎
		.catch((err) => {
			response.status(500).json({ error: 'Something went wrong' });
			console.error(err);
		});
};

// GET (Read the firestore db) 👁
// Task: Obtener un solo un "todo" específico
exports.getOneTodo = (request, response) => {
	
	const document = db.doc(`/todos/${request.params.todoId}`);
	
	document
		 .get()

		 .then((doc) => {

			  // Todo Not Found Condition
			  if (!doc.exists) {
				return response.status(404).json({ error: 'Todo not found' })
			  }

			  responseTodoItem.id = doc.id;
			  return response.json(responseTodoItem);
		 })

		 .then(() => {
			//   return response.json(doc.data());
		 })

		 .catch((err) => {
			  console.error(err);
			  return response.status(500).json({ error: err.code });
		 });
};

// DELETE (Delete the firestore db) 🧽
// Task: Borrar un  documento específico (un "todo") alojado en firestore
exports.deleteTodo = (request, response) => {
	
	const document = db.doc(`/todos/${request.params.todoId}`);
	
	document
		 .get()

		 .then((doc) => {

			  // Todo Not Found Condition
			  if (!doc.exists) {
				return response.status(404).json({ error: 'Todo not found' })
			  }

			  // User Unauthorized Condition
			  if(doc.data().username !== request.user.username){
				return response.status(403).json({error:"UnAuthorized"})
			  }

			  // Finally, Delete Todo (From Database)
			  return document.delete(); // <- Delete here
		 })

		 .then(() => {
			  response.json({ message: 'Delete successfull' });
		 })

		 .catch((err) => {
			  console.error(err);
			  return response.status(500).json({ error: err.code });
		 });
};

// PUT (Update the firestore db)  🧽 + 🖋
// Task: Editar/Actualizar un  documento específico (un "todo") alojado en firestore
exports.editTodo = ( request, response ) => { 

	// Los campos "todoId" y "createdAt" no son editables
	if(request.body.todoId || request.body.createdAt){
		 response.status(403).json({message: 'Not allowed to edit'});
	}

	let document = db.collection('todos').doc(`${request.params.todoId}`);

	document.update(request.body)
	.then(()=> {
		 response.json({message: 'Updated successfully'});
	})

	.catch((err) => {
		 console.error(err);
		 return response.status(500).json({ 
					error: err.code 
		 });
	});
};


