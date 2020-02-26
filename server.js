const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Handling Uncaught exception at the top
process.on('uncaughtException',(err)=>{
    console.log(err.name,err.message);
    process.exit(1);
})

dotenv.config({path:'./config.env'});
const app = require('./app');

// mongoose connection configuration
const DB_URL = process.env.DB_URL.replace('<password>',process.env.DB_PASSWORD);
console.log(DB_URL);
mongoose.connect(DB_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})
.then(()=>{
    console.log('Connection to Database Successful');
})
.catch(err=>console.log(err.message));

// Server configuration 
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT,()=>{
    console.log(`'Listening at port ${PORT}'`);
})

// Handling unhanled Promise Rejection
process.on('unhandledRejection',(err)=>{
console.log(err.name,err.message);
server.close(()=>{
    process.exit(1);
})
})