const fs = require('fs');

const ListingModel = require('../models/ListingModal');

const listRoute = async (req,res) => {
    try {
        const { originalname,path } = req.file;
        // console.log(originalname)
        if(originalname==undefined)
        {
            res.send({error:"provide photo"});
        }
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        const newPath = path+'.'+ext;
        fs.renameSync(path,newPath);
        const {name,email,type,rate,descp} = req.body;
        //   console.log(latitude+" "+longitude)
        // console.log(latitude+" "+longitude)
        
        
        
        const postDoc = await ListingModel.create({
            name,
            email,
            type,
            cover: newPath,
            rate,
            descp
        });
        console.log(postDoc)
        
        console.log("working till here")        
    
          res.json(postDoc);
        
    } catch (error) {
        res.send(error);
        console.log(error);
        // console.log("working")
    }
    
}

const getAllEqp = async (req,res) => {
    try {
        const eqpdata = await ListingModel.find().populate('name').sort({createdAt:-1});
        res.json(eqpdata);
    } catch (error) {
        console.log(error);
    }
}


module.exports = {listRoute,getAllEqp};