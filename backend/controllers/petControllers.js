
import petModel from "../models/petModel.js";
import fs from 'fs'




// add pet item
const addPet = async (req,res) => {
    let image_filename = `${req.file.filename}`;

    const pet = new petModel ({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try{
        await pet.save();
        res.json({success:true,message:"Pet Added"})
    } catch(error){
        console.log(error)
        res.json({success:false,message:"Error"})

    }
}
//all pet list
const listPet = async(req,res)=>{
    try{
        const pets = await petModel.find({});
        res.json({success:true,data:pets})
    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}
//remove pet item

const removePet = async(req,res)=>{
    try {
        const pet = await petModel.findById(req.body.id);
        fs.unlink(`uploads/${pet.image}`,()=>{})

        await petModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Pet Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }
}

export {addPet,listPet, removePet}
