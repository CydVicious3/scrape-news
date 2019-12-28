const express = require('express')
const mongoose = require('mongoose')


const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


require('./routes')(app)

const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/newsdb'


  connect(MONGODB_URI)
  .then(() => app.listen(PORT))
  .catch(e => console.error(e))

  