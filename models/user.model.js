const mongoose = require("mongoose")

// Crear el Schema
const userSchema = new mongoose.Schema({
  name: {
    // hacer un obj es dar valicaciones extra a esta propiedad
    type: String,
    required: true, // el campo es obligatorio
    unique: true
  },
  candy: {
    type: Number,
    min: 0,
    max: 100,
    default: 0, // si por cualquier razón, no se da el valor. entonces el valor es 0.
  },
  likesPokemon: Boolean,
  pizzaToppings: [ {
    type: String,
    enum: ["tomate", "jamon", "piña", "peperoni", "anchoas"] // los unicos posibles valores de esta propiedad
  } ]
})
//* El schema es lo que da formato a nuestros documentos. DEBEN tener la estructura del schema.

// Crear el Model
const User = mongoose.model("User", userSchema)
//* La herramienta que nos permite ir a la colección y hacer busquedas y modificaciones de los documentos.


// exportar el Model => para uso en cualquier archivo de js
module.exports = User;