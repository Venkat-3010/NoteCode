const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const snippetRoutes = require('./routes/snippets.js');
const cors = require('cors');

const app = express();

const mongo_url = 'mongodb+srv://user:user3010@cluster0.3ghgala.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const PORT = process.env.PORT || 4000;

app.use(cors({origin: 'https://fantastic-meme-g6gq54q674p2v7x-5173.app.github.dev/'}));
app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send('database up and running');
})

mongoose.connect(mongo_url)
.then(() => {
    console.log(`mongoDB connected @ ${PORT}`);
})
.catch((err) => {
    console.log('error', err);
})

app.use('/api/snippets', snippetRoutes);

app.listen(PORT, ()=> {
    console.log(`Server is up and running in ${PORT}`);
})