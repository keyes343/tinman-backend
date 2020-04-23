import { Schema } from 'mongoose';

export const menuSchema = new Schema ({
    date: Date,
    fixed: {
        rice:{
            displayName : { type:String, default:'Rice'},
            alternateName: { type:String, default:'Bhat'},
            active: Boolean,
        },
        dal:{
            displayName : { type:String, default:'Dal'},
            alternateName: { type:String, default:'Dal'},
            active:Boolean,
        }
    },
    fish: {
        rui:{ displayName : { type:String, default:'Rui'}, active: Boolean },
        katla:{ displayName: { type:String, default:'Katla'}, active: Boolean }
    },
    sabji: {
        brinjal: { 
            displayName: { type:String, default:'Brinjal' }, 
            alternateName: { type:String, default:'Begun'},
            active: Boolean, 
            },
        pumpkin: { 
            displayName: { type:String, default:'Pumpkin'},
            alternateName: { type:String, default:'Kumro'},
            active: Boolean, 
        },
        jackfruit: { 
            displayName: { type:String, default:'Jack Fruit'},
            alternateName: { type:String, default:'Kathal'},
            active: Boolean, 
        },
        cabbage: { 
            displayName: { type:String, default:'Cabbage'},
            alternateName: { type:String, default:'Bandaa Gobi'},
            active: Boolean, 
        },
        cauliflower: { 
            displayName: { type:String, default:'Cauliflower'},
            alternateName: { type:String, default:'Phool Gobi'},
            active: Boolean, 
        },
    },
    extra: {}
})