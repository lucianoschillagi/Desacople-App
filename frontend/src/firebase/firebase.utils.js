// Importa Firebase (core)
import firebase from "firebase";

// Almacena la configuración de mi proyecto en Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBZwC1TYQNmolka4dwqjxAK4yBZa2Cl4KA",
  databaseURL: "https://desacople.firebaseio.com", // 👈
  projectId: "desacople-app",
};

// Inicia mi App en Firebase configurándola con la base de datos !!
firebase.initializeApp(firebaseConfig);

// Exporta la config de mi app en Firebase ya configurada con Firestore
export default firebase;