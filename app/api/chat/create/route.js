import connectDB from "@/config/db";
import Chat from "@/models/Chat";
import { getAuth } from "@clerk/nextjs/dist/types/server";
import { NextRequest } from "next/server";


export async function POST(req) {
    try{
        const {userId}= getAuth(req)
        if(!userId){
            return NextRequest.json({success:false,message:"User not authenticated"})
        }
        const chatData={
            userId,
            message:[],
            name:"New Chat",
        }
        await connectDB()
        await Chat.create(chatData)
        return NextRequest.json({success:true,message:"Chat created"})
    }catch(error){
        return NextRequest.json({success:false,
            error:error.message
        })
    }
}