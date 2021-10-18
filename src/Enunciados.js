
 


//Se necesita saber cuantos Ryzen 7 5800 tenemos en el almacen 
db.products.find({name:{$eq:"Ryzen"}, gen:{$eq:7}, description:{$eq:5800}},{"quantity":1, "_id":0})

//Se han  comprado 25 nuevos Ryzen 7 5800 y se debe actualizar la base de datos
db.products.update({"name":"Ryzen", "gen":7, "description":5800},{$inc:{"quantity":25}},{$set:{"desktop":true}})

//Se necesita una lista de los Ryzen con un precio inferior a 400€ y que esten en stock
db.products.find( { price: { $lt: 400 }, "stock":true },{_id:0} ).pretty()

//Se deben añadir nuevas tags para que la busqueda del producto sea más concidente.  
db.products.updateMany({"name":"Ryzen"},{$addToSet:{tags:{$each:["ryzen","ghz","topgama"] }}})

//Un usuario quiere una lista de procesadores descartando los de ultima generación
db.products.find({$nor:[{gen:9}]})

//Tras la pandemia la población tiene menos dinero para comprar, se deben bajar los precios un 25%
db.proyectos.updateMany({"name":"Ryzen"},{ $mul: { price: 0.85 } },{ multi: true })

//Se deben buscar todos los procesadores que no estan en stock para hacer un pedido
db.products.find({stock:{$eq:false}}).pretty()

//Se han comprado 10 procesadores para rellenar lo que no está en stock, se debe actualizar su cantidad y su stock
db.products.updateMany({stock:{$eq:false}},{$set:{"stock":true,"quantity":10}})

//Se necesita una lista de precios descendente de nuestros productos 
db.products.find().sort({"price":1})

//Se necesita saber qué articulos son reacondicionados 
db.products.find({"tags.type":"reconditioned"})

//Se ha de crear una lista presentable para imprimir con el producto y su precio de forma ascendente
db.products.find().sort({"price":-1}).forEach(product => print(product.name+" "+" " +product.gen+" "+" " +product.description+" "+": "+ product.price)) 
