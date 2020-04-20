import { Schema } from 'mongoose';

export const userSchema = new Schema ({
    googleid: { type:String, required:true },
    googleName: { type:String, required:true },
    username: { type:String, required:true },
    age: Number,
    contactDetails: {
        address: String,
        phone: String,
        neighbour: {
            name: String,
            phone: Number
        }
    },
    foodPref: {
        hates: {},
        loves: {}
    },
    paymentHist: {},
    lastLogin: {}
});