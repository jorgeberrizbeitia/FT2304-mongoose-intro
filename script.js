const mongoose = require("mongoose")


const User = require("./models/user.model.js")

// ! todos los archivos de JSON se exportan automaticamente
const allUsers = require("./data/users.json")

mongoose.connect('mongodb://127.0.0.1:27017/test')
.then(() => {
  console.log("conectados a la BD, yay!")

  // vamos a interactuar con la DB de la misma forma que lo hicimos con Mongo Compass

  //* CREATE
  //. create() para crear un documento en la colección
  // return User.create({
  //   name: "Jesús",
  //   likesPokemon: true,
  //   pizzaToppings: ["patata", "iphone", "manzana"]
  // })

  //. create() para crear multiples documentos en la colección a la vez
  // return User.insertMany(allUsers)

  //* READ
  // return User.find(  ) // busca TODOS los documentos de esta colección
  // return User.find( { likesPokemon: false } ) // busca TODOS los documentos de esta colección
  // return User.find( { candy: {$gte: 30} } ) // busca TODOS los documentos de esta colección
  // ! podemos hacer TODOS los queries complejos de el Filter de mongo compass

  // return User.find()
  // .select({ name: 1, candy: 1 }) // select es lo mismo que Project
  // .sort( { candy: 1 } )
  // .skip( 2 ) // saltate x cantidad de elementos del resultado
  // .limit( 3 ) // unicamente devuelve x cantidad de elementos

  // return User.findOne( { pizzaToppings: {$in: ["piña"]} } ) // busca el primer elemento que cumpla la condición

  return User.findById("6453b77485661f93de05fdfb")

})

.then((responseFromDB) => {
  // console.log("Varios usuarios agregados a la BD")
  console.log(responseFromDB)

  //* UPDATE
  // DOS argumentos
  // 1. Que estoy buscando
  // 2. Como lo quiero modificar 
  return User.findOneAndUpdate({ name: "Santiago" }, { likesPokemon: true })
})
.then(() => {
  console.log("usuario actualizado")
  
  //* DELETE
  // 1. El query de que usuario quiero borrar
  return User.findOneAndDelete( { name: "Maisha" } )

})
.then((elementoBorrado) => {
  console.log("usuario borrado", elementoBorrado)
})

.catch((error) => {
  console.log(error)
})