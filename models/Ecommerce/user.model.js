import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: {
        type: string,
        required: true,
        unique: true,
        lowercase: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
        Password:{
            type: string,
            required: true,
            unique: true
        },
            

},{timestamps:true})

export const user = mongoose.model("User",userSchema)