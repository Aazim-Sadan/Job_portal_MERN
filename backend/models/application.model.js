import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },
    applicent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },
    status:{
        type: String,
        enum:['pending', 'accepted', 'rejected'],
        default:'pending'
    }
}, {timestamps:true})

export const Appliction = mongoose.model("Appliction", applicationSchema);