import mongoose, {Schema, model, Model} from 'mongoose';
import { User_type, Menu_type, userSchema, menuSchema } from './models'; // type+schema

class MongooseDatabase {
    public db: any;
    public SchemaUser: Schema<User_type>; 
    public SchemaMenu: Schema<Menu_type>;
    public User: any; public Menu: any;

    constructor(){
        this.db = mongoose;
        this.SchemaUser = userSchema;
        this.SchemaMenu = menuSchema;
        this.initializeMongoose();
    }
    public initializeMongoose = async() => {
        const uri_auth = 'mongodb+srv://jeet343:jeet343@tinman-pldvk.mongodb.net/auth?retryWrites=true&w=majority';
        const uri_food = 'mongodb+srv://jeet343:jeet343@tinman-pldvk.mongodb.net/food?retryWrites=true&w=majority';
        try {
            const auth = await this.db.connect(uri_auth, {useNewUrlParser:true, useUnifiedTopology: true});
            this.User = auth.model('user',this.SchemaUser);

            const food = await this.db.connect(uri_food, {useNewUrlParser:true, useUnifiedTopology: true});
            this.Menu = food.model('menu',this.SchemaMenu)

            this.db.connection.once('open',this.func_2)

        } catch (error) {
            console.log(error)
        }
    }
    private func_2() {
        //this.User = model('user',this.SchemaUser);
    }
}

const mongooseInstance = new MongooseDatabase();
export const db = mongooseInstance.db;
export const User = mongooseInstance.User;
export const Menu = mongooseInstance.Menu;