import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
    // username: String,
    // email: String,
    // isActive: Boolean 
    // Not so professsional approach. 

    username:{
        type: string,
        unique: true,
        isRequired: [true,"username must be unique"], //custom message.
        lowercase: true
    },//professional approach this is.
    email:{
        type: string,
        unique: true,
        lowercase: true,
        required: true,
    },
    password:{
        type: string,
        required: true,
    }
},{timestamps: true}
)
export const User = mongoose.model("user", userSchema)