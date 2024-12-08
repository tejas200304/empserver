//import
const jsonserver = require("json-server")

//create server
const media = jsonserver.create()

//create a middle ware to convert json format
const middleware = jsonserver.defaults()

//import db.json file
const router = jsonserver.router('db.json')

//set port for the server
const PORT = 3000 || process.env.PORT

//server use middleware
media.use(middleware)
media.use(router)

//listen
media.listen(PORT, () => {
    console.log(`server running successfully at port number ${PORT}`)
})
