import express, { Router, Request, Response, NextFunction } from 'express';
import mongoose, {Schema, model, Model, Document} from 'mongoose';


export class UserRouter {
    public router:Router;
    User: Model<mongoose.Document, {}>;
    
    constructor(User:Model<Document, {}>){
        this.router = express.Router();
        this.editUser();
        this.addUser();
        this.User = User;
    }

    public consoling =()=> {
        console.log('User Users>router.js =  ', this.User);
    }
    public editUser = () => {
        this.router.post('/editUser', async(req:Request, res:Response)=>{
            try {
                await this.User.create({
                    googleName: 'weeeee',
                    age:200
                }, (err:any,doc:any)=>{
                    if(err){
                        res.send({erroris:err});
                        return;
                    }else {
                        res.send({
                            userdoc:doc,
                            status:'success weeeee'
                        });
                        return;
                    }
                });
                // const user = await add_user.save();
            } catch (error) {
                res.send({error})
            }
        })
    }
    public addUser = () => {
        this.router.post('/addUser', async(req:Request, res:Response)=>{
            try {
                await this.User.create({
                    googleName: 'weeeee',
                    age:200
                }, (err:any,doc:any)=>{
                    if(err){
                        res.send({erroris:err, status:'failed, see error'});
                        return;
                    }else {
                        res.send({
                            userdoc:doc,
                            status:'success weeeee'
                        });
                        return;
                    }
                });
                // const user = await add_user.save();
            } catch (error) {
                console.log('error = '+ error)
                res.send({error,status:'catch error'});
            }
        })
    }
}