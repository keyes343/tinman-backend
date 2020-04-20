import express, { Router, Request, Response, NextFunction } from 'express';
import app from './index';
import { passport } from './passport'; // "./" is needed as passport is being called from a ts file, not the npm module.
import { checkAuth } from './extraMiddlewares';
import { addUser } from './models';
// import { db, User, UserObj } from './mongoose'

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
        this.router.post('/addUser', (req:Request, res:Response) => {
            this.addUser ( req, res )
        })
    }
}
export default new ExpressRouter().router;