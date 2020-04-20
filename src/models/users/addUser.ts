import { Request, Response, NextFunction } from 'express';
import { db, User } from '../incoming';
import { UserObj } from './types'

const addUser = async (req:Request, res:Response, next:NextFunction) => {
    const body = req.body;
    const new_user:UserObj = {
        googleName: body.name,
        googleID: body.googleID,
        age: body.age,
    };
    let return_user:UserObj = {
        googleName: 'not_initialized',
        age: 0
    };

    const add_user = new User(new_user);
    
    try {
        const user = await add_user.save();
        return_user.username = user.name;
        return_user.age = user.age;

    } catch (error) {
        console.log(error);
    } 
    res.status(200).send(return_user);
    
}

export default addUser;