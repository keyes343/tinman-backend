import mongoose, {Schema, model, Model} from 'mongoose';

export type UserObj = {
    name: string;
    age: number;
    googleid?: string;
}

class MongooseDatabase {
    public db: any;
    public SchemaUser: Schema<UserObj>;
    public User: any;

    constructor(){
        this.db = mongoose;
        this.SchemaUser = new Schema<UserObj> ({
            name:{ type:String, required:true },
            age: { type:Number, required:false },
            googleid: { type:Number, required:false }
        });
        
        this.initializeMongoose();
        this.func_2();
    }
    public initializeMongoose = async() => {
        const uri = 'mongodb+srv://jeet343:jeet343@tinman-pldvk.mongodb.net/auth?retryWrites=true&w=majority';
        
        try {
            await this.db.connect(uri, {useNewUrlParser:true, useUnifiedTopology: true});
            await this.db.connection.once('open',this.func_2)
        } catch (error) {
            console.log(error)
        }
    }
    private func_2() {
        this.User = model('user',this.SchemaUser);
    }
}

const mongooseInstance = new MongooseDatabase();
export const db = mongooseInstance.db;
export const User = mongooseInstance.User;