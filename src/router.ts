import express, { Router, Request, Response, NextFunction } from 'express';
import app from './index';
import { passport } from './passport'; // "./" is needed as passport is being called from a ts file, not the npm module.
import { checkAuth } from './extraMiddlewares';
import addUser from './users/addUser';
import { db, User, UserObj } from './mongoose'

class ExpressRouter{
    // private pokeService: PokeService;
    public router: Router;
    public addUser: any;

    constructor(){
        this.router = express.Router();
        this.routes();
        this.addUser = addUser;
    }

    public routes () {
        this.router.get('/name',(req:Request, res:Response)=>{
            res.send({
                name:'John343'
            })
        });
        this.router.get('/auth/google',passport.authenticate('google',{
            failureRedirect: '/',
            scope: ['profile']
        }));
        this.router.get('/auth/google/redirect',passport.authenticate('google'),(req:Request,res:Response)=>{
            res.redirect('/')
        })
        this.router.get('/',checkAuth, (req:Request,res:Response) => {
            res.send({
                user: req.user
            })
        })
        this.router.get('/logout', (req:Request,res:Response) => {
            req.logout();
            res.redirect('/');
        })
        this.router.post('/addUser', async (req:Request, res:Response) => {
            const body = req.body;
            const new_user:UserObj = {
                name: body.name,
                age: body.age,
            }
            const add_user = User(new_user);
            
            try {
                await add_user.save((err:any) => {
                    if (err) return res.status(500).send(err);
                });
            } catch (error) {
                console.log(error);
            } finally {
                //
            }
            const obj = {
                user_info: add_user,
                done: 'yes'
            }
            res.status(200).send(obj);
        })
    }
}
export default new ExpressRouter().router;