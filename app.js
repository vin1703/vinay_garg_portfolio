const express = require('express');

const mongoose = require('mongoose');

const app = express();

const cors = require('cors');

const bodyParser = require('body-parser');

require('dotenv').config();

const contactRoutes = require('./routes/contact-routes');

const workRoutes = require('./routes/work-routes');

app.use(cors());

app.use(bodyParser.json());

app.use('/api/contact',contactRoutes);

app.use('/api/work',workRoutes);

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.gaqfzi1.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`).then(()=>{
    app.listen( process.env.PORT || 5000,()=>{
        console.log("listening to 5000");
    });
}).catch(err=>{
    console.log(err);
})