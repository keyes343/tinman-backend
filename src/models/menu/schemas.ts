import { Schema } from 'mongoose';

export const menuSchema = new Schema ({
    date: Date,
    fixed: {},
    fish: {},
    sabji: {},
    extra: {}
})