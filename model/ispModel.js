const mongoose = require('mongoose');

const ispSchema = new mongoose.Schema({
    name :{
        type : String,
        required : [true,'A ISP Provider must have a name'],
        unique : true
    },
    lowest_price :{
        type :Number,
        required :[true,'A ISP Provider must specify price']
    },
    rating :{
        type:Number,
        default :2
    },
    max_speed :{
        type :Number,
        required :[true,'A ISP must have speed specified']
    },
    description:{
        type:String,
        required:true
    },
    contact_number :{
        type :Number,
        required :[true,'A ISP provider must a contact number'],
        unique:true,
        maxlength:10
    },
    email :{
        type:String,
        required :true,
        unique:true
    },
    image :{
        type :String,
        default :'default.jpg'
    },
    url:{
        type :String,
    }
});
const ISP = mongoose.model('isp',ispSchema);
module.exports = ISP;