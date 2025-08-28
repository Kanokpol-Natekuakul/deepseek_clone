import moongoose from "moongoose";

const UserSchema = new moongoose.Schema(
    {
        _id:{type:String,require:true},
        name:{type:String,require:true},
        email:{type:String,require:true},
        image:{type:String,require:true},
    },
    {timestamps:true}
)

const User = moongoose.models.User || moongoose.model("User",UserSchema)

export default User;