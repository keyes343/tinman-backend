import express, { Router, Request, Response, NextFunction } from 'express';
import mongoose, {Schema, model, Model, Document} from 'mongoose';
import app from './index';
// import { passport } from './passport'; // "./" is needed as passport is being called from a ts file, not the npm module.
import { checkAuth } from './extraMiddlewares';
import { addUser, getMenu, editMenu, User_type } from './models/';

import { MongooseDatabase } from './mongoose';

class ExpressRouter{
    router: Router;
    addUser: any; getMenu: any; editMenu: any;
    UserRouter: Router;
    MongooseInstance: MongooseDatabase;
    db: any;
    User: Model<Document, User_type>;


    constructor(){
        this.router = express.Router();
        this.MongooseInstance = new MongooseDatabase(); // initializing Main-Mongoose class
        this.db = this.MongooseInstance.db;
        this.User = this.MongooseInstance.User;
        this.UserRouter = this.MongooseInstance.UserRouter // extracting the 'router' object from class
        // console.log('zzz = ', this.User)
        this.addUser = addUser; // temprorary only. shud be called in another file
        this.getMenu = getMenu; // temprorary only. shud be called in another file
        this.editMenu = editMenu; // temprorary only. shud be called in another file

        // this.UserRouter_class = new UserRouter(this.User); // class instance for UserRouter extension + passing
        // the User-Model into the router extension otherwise the User-Model will show undefined
        
        this.router.use('/users', this.UserRouter) // assigning path for router extension
        this.routes(); // invoking the Main Route
    }

    public routes =()=> {

        this.router.post('/name',(req:Request, res:Response)=>{
            res.send({
                name:'John343',
            })
        });
        this.router.post('/ppost',async(req:Request, res:Response)=>{
            console.log('aaa =', this.User )
            try {
                const a = await this.User.findOne({name:'affa'})
                res.send(a)
                
            } catch (error) {
                
            }
        });
        // this.router.get('/auth/google',passport.authenticate('google',{
        //     failureRedirect: '/',
        //     scope: ['profile']
        // }));
        // this.router.get('/auth/google/redirect',passport.authenticate('google'),(req:Request,res:Response)=>{
        //     res.redirect('/')
        // })
        // this.router.get('/',checkAuth, (req:Request,res:Response) => {
        //     res.send({
        //         user: req.user
        //     })
        // })
        this.router.get('/logout', (req:Request,res:Response) => {
            req.logout();
            res.redirect('/');
        })
        this.router.post('/addUser', async(req:Request, res:Response) => {
            // let a:any;
            // try {
            //     a = await this.addUser ( req, res );
            // } catch (error) {
                
            // }
            // const b = { test2:'test done'}
            // res.status(200).send({text:'addUser route'});
            
            let triggered: string = 'not touched'
            let return_user:any = {
                googleName: 'not_initialized',
                age: 0
            };
            let errorr:any = 'no error yet';
            try {
                triggered = '1st step';
                
                await this.User.create({
                    googleName:'jeeeeet',
                    age: 20,
                }, (err:any,doc:any)=>{
                    if(err){
                        errorr = err;
                        triggered = 'err happened';
                    }else {
                        return_user.username = 'success';
                        return_user.age = 100;
                        triggered = 'success triggered';
                    }
                });
                // const user = await add_user.save();
            } catch (error) {
                errorr = error
            };
            res.status(200).send({
                return_user,
                errorr,
                triggered
            });
        })
        this.router.get('/getMenu', (req:Request, res:Response) => {
            this.getMenu ( req, res )
        })
        this.router.post('/editMenu', (req:Request, res:Response) => {
            this.editMenu ( req, res )
        })
    }
}
const InitializeExpressRouter = new ExpressRouter(); // initializing the main class inside this file
export const router = InitializeExpressRouter.router; // this will be used by the main express app for routing
export const User = InitializeExpressRouter.User;
export const UserRouter = InitializeExpressRouter.UserRouter;
