import mongoose from "mongoose"

const OrderItemSchema = new mongoose.Schema({
    productId:{
        types:mongoose.Schema.Types.ObjectId,
        ref:"Product",
    },
    quantity:{
        types: Number,
        required: true
    }
}) /* this schema could have created separately 
 but we didn't becasue this object schema is not 
 used by anyone but the orderitems object only 
 present int this file only. it is used in its 
 array because user may have multiple orders of 
 multiple items at the same time */

const OrderSchema = new mongoose.Schema({
    orderPrice:{
        type: number,
        required: true,
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    orderItems:{
        type: [OrderItemSchema],

    },
    adress:{
        type: string,
        required: true,
    }, // adress can have separte schema too. 
    status:{
        type: string,
        enum: ["PENDING","CANCELLED","DELIVERED"],
        default: "PENDING",
    }

},{timestamps:true})

export new Order = mongoose.model('Order',OrderSchema)