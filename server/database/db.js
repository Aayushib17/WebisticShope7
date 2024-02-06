import mongoose from "mongoose";



export const Connection = async(username,password) =>{
    // const URL = 'mongodb://koshtichicku1399:ShriRadhe:-)77@ac-rvzhp5x-shard-00-00.vnronao.mongodb.net:27017,ac-rvzhp5x-shard-00-01.vnronao.mongodb.net:27017,ac-rvzhp5x-shard-00-02.vnronao.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-ki2oz3-shard-0&authSource=admin&retryWrites=true&w=majority';
    const URL = `mongodb://${username}:${password}@ac-be9dq5h-shard-00-00.dvn4z0y.mongodb.net:27017,ac-be9dq5h-shard-00-01.dvn4z0y.mongodb.net:27017,ac-be9dq5h-shard-00-02.dvn4z0y.mongodb.net:27017/?ssl=true&replicaSet=atlas-l8q8hg-shard-0&authSource=admin&retryWrites=true&w=majority`;
    // const URL = 'mongodb+srv://koshtichicku1399:ShriRadhe:-)77@cluster0.vnronao.mongodb.net/?retryWrites=true&w=majority';
    try{
        await mongoose.connect(URL,{useUnifiedTopology: true, useNewUrlParser:true})
        console.log(`Database connected Successfully!`);
        
    }catch(error){
        console.log(`Error while connecting with your database`,error.message);
    }
}

export default Connection;