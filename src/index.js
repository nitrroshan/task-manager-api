const app = require("./app");

const port = process.env.PORT;

app.listen(port, () => {
  console.log("Server is up on", port);
});

// app.use((req,res,next)=>{
//    if(req.method=== 'GET'){
//        res.status(404).send('GET requests are disabled')
//    }else{
//        next()
//    }

// })

// app.use((req,res,next)=>{

//         res.status(503).send('Site Under maintainance.Please Try later.')
// })

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async() => {
//     const task =await Task.findById('610d1a9b2367e9604cef4f94')
//     await task.populate('owner').execPopulate()
//     console.log(task.owner)

//     const user = await User.findById('610d199f8e80295c14e0df18')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }
// main()

// const bcrypt = require('bcryptjs')

// const myFunction = async () => {
//     const password = 'Red12345!'
//     const hashedPassword = await bcrypt.hash(password, 8)
//     console.log(password,hashedPassword)
// }

// myFunction()

// const jwt= require('jsonwebtoken')

// const myFunction = () => {
//     const token = jwt.sign({_id: 'abc123'}, 'thisismyfirsttime',{expiresIn: '24 hours'})
//     console.log(token)
//     const data=jwt.verify(token, 'thisismyfirsttime')
//     console.log(data)

// }
// myFunction()

// const pet = {
//     name: 'mimi'
// }

// pet.toJSON = function() {
//     console.log(this)
//     return this
// }

// console.log(JSON.stringify(pet))
