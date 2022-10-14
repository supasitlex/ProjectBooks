const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const helmet = require('helmet');

const app = express()
const port = 3000
const book = require('./routes/book');

app.use(morgan('tiny'));
app.use(express.json());
app.use(helmet());

app.use('/api/books',book);

mongoose.connect('mongodb://localhost:27017',{dbName:'Booktest'})
.then(()=>console.log('Connect to MongoDB Success'))
.catch((err)=>console.log('Error',err))

app.listen(port,()=>{console.log(`Port: ${port}`)})
