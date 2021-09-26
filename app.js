const express = require('express');
const port = process.env.Port || 3000;
const app = express();
const mongoose = require("mongoose");
const StudentInfo = require("./register");


app.use('/static', express.static('static'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.status(200).render('index.html');
});



app.post('/register', async (req, res) => {
    try {
        const studentregister = new StudentInfo({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            mesaage:req.body.mesaage
        })
        const result = await studentregister.save();
        res.status(200).sendFile(__dirname +'/public/index.html');
    } catch (err) {
        res.status(400).send(err);
    }



})


app.listen(port,()=>{
    console.log(`The application is started sucessfully on port ${port}`);
});