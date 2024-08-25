const express = require('express')
const app = express()
const port = 5000
const router = require("./router/auth-router")

app.use(express.json()); // Middle Ware  

app.use("/api/auth",router);

app.get('/', (req, res) => {           
  res.send('MERN THAPA TECHNICAL')
})

app.get('/profile', (req, res) => {
    res.send('My PROFILE')
  })
   
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 
