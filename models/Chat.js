import moongoose from "moongoose";

const ChatSchema = new moongoose.Schema(
    {
        
        name:{type:String,require:true},
        message:[
            {
                role:{type:string,require:true},
                content:{type:string,require:true},
                timestamps:{type:string,require:true},
            }
        ],
        userId:{type:string,require:true},
    },
    {timestamps:true}
)

const Chat = moongoose.models.Chat || moongoose.model("Chat",ChatSchema)

export default Chat;