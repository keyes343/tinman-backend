import mongoose, {Schema, model, Model, Document} from 'mongoose';
import { User_type, Menu_type, userSchema, menuSchema, UserRouter } from './models'; // type+schema

export class MongooseDatabase {
    db: any;
    SchemaUser: Schema<User_type>; 
    SchemaMenu: Schema<Menu_type>;
    User: Model<Document, User_type>; public Menu: any;
    UserRouter_class: UserRouter;
    UserRouter: any;

    constructor(){
        this.db = mongoose;
        this.SchemaUser = userSchema;
        this.SchemaMenu = menuSchema;

        this.User = model('user',this.SchemaUser); // define a model
        this.UserRouter_class = new UserRouter(this.User); // invoking the class by passing in a model
        this.UserRouter = this.UserRouter_class.router; // extracting property from class
        this.initializeMongoose();
    }
    public initializeMongoose = async() => {
        const uri_auth = 'mongodb+srv://jeet343:jeet343@tinman-pldvk.mongodb.net/auth?retryWrites=true&w=majority';
        const uri_auth2 = 'mongodb+srv://jeet343:jeet343@tinman-pldvk.mongodb.net/test?retryWrites=true&w=majority'
        try {
            await this.db.connect(uri_auth, {useNewUrlParser:true, useUnifiedTopology: true});
            // this.User = new auth.Model('user',this.SchemaUser);
            // this.Menu = new auth.Model('menu',this.SchemaMenu);
            
            // await this.db.connection.once('open',this.func_2);
            const a = await this.db.connection.once('open',()=>console.log('connected'))
            // console.log(a);
            console.log('beep beep');

        } catch (error) {
            console.log(error)
        }
    }
    private func_2 =()=> {
        //this.User = model('user',this.SchemaUser);
        console.log('connected')
    }
}

// export const mongooseInstance = new MongooseDatabase();
// export const db = mongooseInstance.db;
// export const User = mongooseInstance.User;
// export const Menu = mongooseInstance.Menu;