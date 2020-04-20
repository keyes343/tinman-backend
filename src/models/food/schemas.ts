import { Schema } from 'mongoose';

export const foodSchema = new Schema ({
    rice: { type: 'fixed', name:'Rice', imgLink: String, },
    dal: { type: 'fixed', name:'Dal', imgLink: String, },
    
    rui: { type: 'fish', name:'Rui', imgLink: String, },
    bhola: { type: 'fish', name:'Bhola', imgLink: String, },
    
    brinjal: { type: 'sabji', name:'Brinjal', alternateName:'Begun', imgLink: String, },
    pumpkin: { type: 'sabji', name:'Pumpkin', alternateName:'Kumro', imgLink: String, },
    jackfruit: { type: 'sabji', name:'Jack Fruit', alternateName:'Kathal', imgLink: String, },
    cabbage: { type: 'sabji', name:'Cabbage', alternateName:'Bandaa Gobi', imgLink: String, },
    cauliflower: { type: 'sabji', name:'Cauliflower', alternateName:'Phool Gobi', imgLink: String, },
})