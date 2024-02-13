import mongoose from "mongoose";

const orderLandScapeSchema = mongoose.Schema({
    design : {
        type: String,
        required : true
    },
    type : {
        type: String,
        required: true
    },
    scale :{
        type: String,
        required: true
    },
    name : {
        type: String,
        required: true
    },
    address : {
        type: String,
        required: true
    },
    number : {
        type: String,
        required: true
    },
    Date : {
        type: String,
        required: true
    },
    email :{
        type: String,
        required: true,
        unique: true
    }, 
    image:{
        public_id: { type:String },
        url: { type:String}
     },

},{
    timestamps: true,
    type: Date,
    default: Date.now
});

const orderLandScape = mongoose.model('Orderlandscape', orderLandScapeSchema )
export {orderLandScape};