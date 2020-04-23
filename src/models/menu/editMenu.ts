import { Request, Response, NextFunction } from 'express';
import { Menu, User } from './incoming';
import { Menu_type } from './types';

export const editMenu = async (req:Request, res:Response) => {
    // req has to contain data on 'what to edit'
    if( req.body.fixed && req.body.fish && req.body.sabji ){
        let newMenu: any = 'blank';
        try {
            // await Menu.create({
            //     // "date": date,
            //     "title":"main-menu",
            //     "fixed": req.body.fixed,
            //     "fish": req.body.fish,
            //     "sabji": req.body.sabji,
            // })
            await User.create({age:20})
            // newMenu = await Menu.findOneAndUpdate ({
            //         "title":"main-menu"
            //     },
            //     {
            //         // "date": date,
            //         "fixed": req.body.fixed,
            //         "fish": req.body.fish,
            //         "sabji": req.body.sabji,
            //     },
            //     { new: true, upsert: true, rawResult: true }
            // )
            // res.send(newMenu);
            res.send({done:'done'})
        } catch (error) {
            //
        }
    }
}

let c = 
{
    "fixed": {
        "rice": true
    },
    "fish": {
        "rui": true
    },
    "sabji": {
        "cabbage": true
    },
}