const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000;

// middleware
app.use(cors());

const users=[
  {id:1,name:'sakib',email:'sakib@gmail.com'},
  {id:2,name:'Tamim',email:'tamim@gmail.com'},
  {id:3,name:'Rakib',email:'rakib@gmail.com'},
  {id:4,name:'Musfiq',email:'musi@gmail.com'}
]

app.get('/', (req, res) => {
  res.send('User management server is running')
})

app.get('/users',(req,res)=>{
  res.send(users)
})

app.post('/users',(req,res)=>{
  console.log("Api Successfully hiting");
  console.log(req.body);
})
// app.post('/users',(req,res)=>{
//   console.log(req.body);
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})