export type Menu_type = {
    date?: Date;
    fixed?: {
        rice?: boolean,
        dal?:boolean,
    };
    fish?: {
        rui?: boolean,
        katla?: boolean,
    }
    sabji?: {
        brinjal?: boolean,
        pumpkin?: boolean,
        jackfruit?: boolean,
        cabbage?: boolean,
        cauliflower?: boolean,
    };
    extra?: {};
}

