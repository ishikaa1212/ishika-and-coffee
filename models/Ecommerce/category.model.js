import mongoose from "mongoose";

const CategorySchema =new mongoose.schema({
    name:{
        type: string,
        required: true
    }
},{timestamps:true})

export const Category = mongoose.model("Category", CategorySchema)