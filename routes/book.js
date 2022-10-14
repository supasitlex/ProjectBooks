const express = require('express');
const { model, Schema } = require('mongoose');
const router = express.Router();

const bookSchema = new Schema({
    topic: String,
    text: String,
    price: Number,
    date: Date
},{
    collaction : 'book',
    versionKey : false
});

const Book = model('book',bookSchema)

//create
router.post('/',async (req,res)=>{
    const {topic,text,price} = req.body
    console.log(topic,text,price);
    const result = await Book.create({
        topic : topic,
        text : text,
        price : price,
        date : Date.now()
    })
    res.status(201).json({
        resultCode : 20100,
        resultDescription : 'Create Success',
        resultData : result
    })
});

//findall
router.get('/',async (req,res)=>{
    // try{
    //     const findall = await Book.find({});
    //     res.status(200).json({
    //         resultCode : 20000,
    //         resultData : findall
    //     });
    // }catch(err){
    //     res.json({error: err.message || err.toString() });
    // }
    const findall = await Book.find({})
    res.status(200).json({
        resultCode :20000,
        resultData: findall
    });
});

module.exports = router;