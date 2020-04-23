import { Request, Response, NextFunction } from 'express';
import { db, User, Menu } from './incoming';
import { Menu_type } from './types';

export const getMenu = async (req:Request, res:Response) => {
    const body = req.body;
    res.send(body);
    // const menu = Menu.findOne(

    // )
}