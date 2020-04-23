import { Schema } from 'mongoose';
import { User_type } from './types'

export const userSchema = new Schema<User_type>({
    googleid: { type:String, required:true, default:'blank' },
    googleName: { type:String, required:true, default:'blank' },
    username: { type:String, required:true, default:'blank' },
    age: {type:Number, required:false},
    contactDetails: {
        addres: String,
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