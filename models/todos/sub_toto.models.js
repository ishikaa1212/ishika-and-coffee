import mongoose from 'mongoose';

const subTodoSchema = new mongoose.Schema(
    {
        content:{
            type:string,
            required: true,
        },{
            complete:{
                type: Boolean,
                Default: False,
            }
        },{
            createdBy:{
                type: mongoose.Schema.types.ObjectId,
                ref: "user",
                required: true,
            }
        }
    },{timestamps:True})

export const subTodo = mongoose.model("subTodo",subTodoSchema)