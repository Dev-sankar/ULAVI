import mongoose from "mongoose";


const greenhouseSchema = mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    design: {
        type: String,
        required: true
    },
    parts: {
        type: String,
        required: true
    },
    sizes: {
        type: String,
        required: true
    },
    style: {
        type: String,
        required: true
    },
    structure: {
        type: String,
        required: true
    },
    shape: {
        type: String,
        required: true
    },
    floor: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    roof: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    Date: {
        type: String,
        required :true
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


const Green = mongoose.model('greenhouseorder', greenhouseSchema);

export {Green};
                 