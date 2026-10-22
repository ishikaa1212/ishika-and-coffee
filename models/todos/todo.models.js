import mongoose from 'mongoose'

const subTodoSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    complete:{
        type:boolean,
        default:False,
    },
    createdBy:{
        type:mongoose.Schema.types.ObjectId, //special fix type // this means that the prgerammer is going gto give some reference.
        ref:"User" //always give the model's name (here from the user.model.js)
    },
    {
        subTodos:[
            {
                type: mongoose.Schema.types.ObjestId,
                ref: "subTodo",
            }
        ] // for storing array //easy practice // array of subtodos.
    }
},{timestamps: true})

export const Todo =mongoose.model("todo",'subTodoSchema')