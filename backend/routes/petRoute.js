import express from "express"
import { addPet ,listPet, removePet } from "../controllers/petControllers.js"
import multer from "multer"

const petRouter = express.Router();


//image storage engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})

petRouter.post("/add",upload.single("image"),addPet)
petRouter.get("/list",listPet)
petRouter.post("/remove",removePet);




export default petRouter;
