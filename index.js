const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const cors = require('cors');

const message = require('./routes/message')
const app = express();
dotenv.config();
app.use(express.json());

app.use(cors({ origin: true }));

mongoose.connect(process.env.MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('Mongb started') })
    .catch(err => { console.log(err) });

app.use('/api', message);

app.listen(8080, function () {
    console.log('Server started and listening on port 8080!');
})
