import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import AddressBook from './Model.js';


const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://localhost:27017/Mern").then(
    ()=>{
        console.log("DB is connected...!")
    }
)


app.get("/getaddress", async(req, res)=>{
    try {
        const user = await AddressBook.find();
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({error : error.message})
    }
})

app.post('/create', async(req, res)=>{
    const {name, email, phone, address} = req.body
    try {
        const emailexist = await AddressBook.findOne({email});
        if(emailexist){
            return res.status(201).json({
                error : "Email Already Exists"
            })
        }
        if(!name || !email || !phone || !address){
            return res.status(203).json({
                error : "Input Fields are required"
            })
        }
        const user = await AddressBook.create({name, email, phone, address});
        return res.status(200).json({user})
        
    } catch (error) {
        return res.status(500).json({error : error.message})
    }
})

app.delete("/deleteaddress/:id", async(req, res)=>{
    const {id} = req.params;
    try {
        const user = await AddressBook.findByIdAndDelete({_id : id});
        return res.status(200).json({error : "Address Deleted"})
    } catch (error) {
        return res.status(500).json({error : error.message})
    }
})

app.listen(5000, (req, res)=>{
    console.log("Iam Running on port 5000")
})