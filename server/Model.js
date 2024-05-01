import mongoose from "mongoose";

export const AddressSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    }
});

const AddressBook = mongoose.model("AddressBook", AddressSchema);

export default AddressBook;
