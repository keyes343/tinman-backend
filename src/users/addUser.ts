import { Request, Response, NextFunction } from 'express';
import { db, UserObj } from '../mongoose';

const addUser = async (req:Request, res:Response, next:NextFunction) => {
    const body = req.body;
    const new_user:UserObj = {
        name: body.name,
        age: body.age,
    }
    const add_user = new db.User(new_user);
    
    try {
        await add_user.save((err:any) => {
            if (err) return res.status(500).send(err);
        });
    } catch (error) {
        console.log(error);
    } finally {
        const obj = {
            user_info: add_user,
            done: 'yes'
        }
        return res.status(200).send(obj);
    }
    
}

export default addUser;