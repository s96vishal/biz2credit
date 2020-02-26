const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors= require('cors');

const ispRouter = require('./routes/ispRoutes');

const app = express();
let apiHit =0;
// Debugging Purpose DEVELOPMENT environment
if(process.env.ENV === 'development'){
    app.use(morgan('dev'));
}
app.use(cors());
app.enable('trust proxy');
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));


// Route Handling
app.use((req,res,next)=>{
    apiHit++;
    console.log(apiHit);
    res.append('apiHit',apiHit);
    next();
})
app.use('/isp',ispRouter);




module.exports = app;
