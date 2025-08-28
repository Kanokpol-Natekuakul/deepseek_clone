import connectDB from "@/config/db";
import Chat from "@/models/Chat";
import { getAuth } from "@clerk/nextjs/dist/types/server";
import { NextRequest } from "next/server";


export async function GET(req) {
    try {
        const { userId } = getAuth(req)
        if (!userId) {
            return NextRequest.json({ success: false, message: "User not authenticated" })
        }

        await connectDB()
        const data=await Chat.find({userId })

        return NextRequest.json({success:true,data})

    } catch (error) {
        return NextRequest.json({success:false,error:error.message})
    }
}