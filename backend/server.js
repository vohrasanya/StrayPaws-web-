import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import petRouter from "./routes/petRoute.js"


//app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

//db connection
connectDB();


//api endpoints
app.use("/api/pet",petRouter)
app.use("/images",express.static('uploads'))

app.get("/",(req,res)=>{
    res.send("API Working")
})
app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})
app.use("/images",express.static('uploads'))


//mongodb+srv://straypaws:straypaws789@cluster0.quop1h3.mongodb.net/?
