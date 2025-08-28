import connectDB from "@/config/db";
import Chat from "@/models/Chat";
import { getAuth } from "@clerk/nextjs/dist/types/server";
import { NextRequest } from "next/server";

export async function POST(req) {
    try {
        const { userId } = getAuth(req)
        const {chatId}=await req.json()
        if (!userId) {
            return NextRequest.json({ success: false, message: "User not authenticated" })
        }
        await connectDB()
        await Chat.deleteOne({_id:chatId,userId})
       
         return NextRequest.json({success:true,message:"Chat Delete"})
    } catch (error) {
        return NextRequest.json({success:false,error:error.message})
    }
}