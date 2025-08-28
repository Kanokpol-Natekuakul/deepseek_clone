import connectDB from "@/config/db";
import Chat from "@/models/Chat";
import { getAuth } from "@clerk/nextjs/dist/types/server";
import { NextRequest } from "next/server";

export async function POST(req) {
    try {
        const { userId } = getAuth(req)
        if (!userId) {
            return NextRequest.json({ success: false, message: "User not authenticated" })
        }

        const {chatId,name}=await req.json()
        await connectDB()
        await Chat.findOneAndUpdate({_id:chatId,userId},{name})
         return NextRequest.json({success:true,message:"Chat Rename"})
    } catch (error) {
        return NextRequest.json({success:false,error:error.message})
    }
}