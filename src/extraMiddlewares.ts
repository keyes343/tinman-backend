import express from 'express';

export const checkAuth = (req:express.Request, res:express.Response, next:express.NextFunction) => {
    if(!req.user){
        // user is not logged in
        res.redirect('/auth/login')
    }else {
        // user is logged in
        next();
    }
}