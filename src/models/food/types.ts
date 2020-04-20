export type Food_type = {
    rice?: { type: 'fixed'; name:'Rice'; imgLink?: string; };
    dal?: { type: 'fixed'; name:'Dal'; imgLink?: string; };
    
    rui?: { type: 'fish'; name:'Rui'; imgLink?: string; };
    bhola: { type: 'fish'; name:'Bhola'; imgLink?: string; };
    
    brinjal: { type: 'sabji'; name:'Brinjal'; alternateName:'Begun'; imgLink?: string; };
    pumpkin: { type: 'sabji'; name:'Pumpkin'; alternateName:'Kumro'; imgLink?: string; };
    jackfruit: { type: 'sabji', name:'Jack Fruit'; alternateName:'Kathal', imgLink?: string; },
    cabbage: { type: 'sabji', name:'Cabbage'; alternateName:'Bandaa gobi', imgLink?: string; },
    cauliflower: { type: 'sabji', name:'Cauliflower'; alternateName:'Phool Gobi', imgLink?: string; },

}