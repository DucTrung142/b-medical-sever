require('dotenv').config();

const db = require('./config/db');

const express = require('express');
const cors = require('cors');

//router
const providerRouter = require('./router/provider');
const productRouter = require('./router/product');
const uploadRoute = require('./router/upload');
const { path } = require('express/lib/application');


//conect DB
db.connect();

//bodyParser Middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use((req,res,next)=>{
  res.setHeader('Acces-Control-Allow-Origin','*');
  res.setHeader('Acces-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
  res.setHeader('Acces-Contorl-Allow-Methods','Content-Type','Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next(); 
})


var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));



//end point
app.get('/', (req, res) => {
  res.json('Api is working');
});

//use router
app.use('/user', providerRouter);
app.use('/upload', uploadRoute);
app.use('/product', productRouter);



const PORT = process.env.PORT || 8000;


app.listen(PORT, () => console.log(`Sever run at http://localhost:${PORT}`));
