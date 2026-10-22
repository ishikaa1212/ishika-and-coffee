import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    description:{
        type: string,
        required: true,
    },
    name:{
            type: string,
            required: true,
        },
    productImage:{
        type: string,
        required: true,
    },
    price:{
        type: number,
        default:0,
    },
    stock:{
        type: number,
        stock:0,
    },
    category:{
        type: mongoose.schema.types,ObjectId,
        ref: "category",
        required: true,
    },
    ownedBy:{
        type: mongoose.schema.types.ObjectId,
        ref: "User"
        required: true
    }
    
},{timestamps: true})

export const Product = mongoose.model("Product", ProductSchema)