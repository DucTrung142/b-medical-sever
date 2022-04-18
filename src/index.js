require('dotenv').config();

const db = require('./config/db');
const express = require('express');
const cors = require('cors');

//router
const provider = require('./router/provider');

//conect DB
db.connect();

//bodyParser Middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//end point
app.get('/', (req, res) => {
  res.json('Api is working');
});

//use router
app.use('/user', provider);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Sever run at http://localhost:${PORT}`));
