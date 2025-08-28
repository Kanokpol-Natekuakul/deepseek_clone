import moongoose from "moongoose";

let cached=global.moongoose || {conn:null,promise:null}

export default async function connectDB() {
    if(cached.conn) return cached.conn;
    if(!cached.promise){
        cached.promise=moongoose.connect(process.env.MONGODB_URL).then((moongoose)=>moongoose);
    }
    try{
        cached.conn=await cached.promise;
    }catch(error){
        console.error("Error connecting to MongDB:",error)
    }
    return cached.conn
}