const ISP = require('./../model/ispModel');
const multer = require('multer');

exports.addIspProvider = async (req,res,next)=>{  

    // get data from req
    const ispData = req.body;
    // add to db
    try{
        const result = await ISP.create(ispData);
    //send response to user 
    res.status(200).json({
        status :'success',
        message :'ISP added',
        "provider":result
    })
    }
    catch(err){
        return res.json({
            status:'failed',
            "message":err.message
        })
    }
   

};

exports.getAllProvider = async (req,res,next)=>{
    let sortBy = '-createdAt';
    if(req.query.sort){
        sortBy = req.query.sort.split(',').join(' ');
        console.log(sortBy);
    }
    try{

        const results = await ISP.find().sort(sortBy);
        res.status(200).json({
            status:'success',
            totalIsp:results.length,
            data:results
        })
    }
    catch(err){
         res.status(501).json({
            status:'fail',
            message:err.message
        })
    }
}

exports.getIsp = async(req,res,next)=>{
    const id = req.params.id;
    try{
        const isp = await ISP.findById(id);
        
        res.status(200).json({
            status:'success',
            data:isp
        })
    }
    catch(err){
        res.status(404).json({
            status:'fail',
            message:'Cannot Find the document with that id'
        })
    }
}