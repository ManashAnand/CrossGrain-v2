const fs = require('fs');

const bcrypt = require('bcryptjs');
const FarmerModel = require('../models/FarmerModel');
// const SmallFarmerModel = require('../model/SmallFModal');

var salt = bcrypt.genSaltSync(10);
const registerRoute = async (req,res) => {
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
            console.log("working")
          const {name,email,password,category,latitude,longitude} = req.body;
        //   console.log(latitude+" "+longitude)
          var hashPassword = bcrypt.hashSync(password, salt);
            // console.log(latitude+" "+longitude)
          
          
          
          const postDoc = await FarmerModel.create({
            name,
            email,
            password: hashPassword,
            category,
            cover: newPath,
            latitude,
            longitude
          });
    
    
          res.json(postDoc);
        
    } catch (error) {
        res.send(error);
        console.log(error);
        // console.log("working")
    }
    
}

const loginRoute = async (req,res) => {
    try {
        const {name,password} = req.body;
        const userDoc = await FarmerModel.findOne({name});
        const pass = userDoc.password;


        if(bcrypt.compareSync(password, pass))
        {
            res.send(userDoc);
        }else{
            console.log("error coming from line 58");
            res.send("here");
        }
    } catch (error) {
        // console.log(error);
        console.log("Error coming from authcontroller.js")
        res.send(error);
    }
}


module.exports = {registerRoute,loginRoute}