export const maxDuraton=60
import { getAuth } from "@clerk/nextjs/dist/types/server";
import { NextResponse } from "next/server";
import OpenAI from "openai";


const openai = new OpenAI({
    baseURL: 'https://api.deepseek.com',
    apiKey: process.env.DEEPSEEK_API_KEY
})

export async function POST(req) {
    try {
        const { userId } = getAuth(req)

        const { chatId, prompt } = await req.json()
        if (!userId) {
            return NextResponse.json({ success: false, message: "User not authenticated" })
        }
        const data = await Chat.findOne({ userId, _id: chatId })
        const userPrompt = {
            role: "user",
            content: prompt,
            timestamp: Date.now()
        }
        data.message.push(userPrompt)

        const completion = await opanai.Chat.completion.create({
            message: [{ role: "user", content: prompt }],
            model: "deepseek-chat",
            store: true,
        })
        const message = completion.choies[0].message;
        message.timestamp = Date.now()
        data.message.push(message)
        data.save()
        return NextResponse.json({ success: true, data: message })
    } catch (error) {
        return NextRequest.json({ success: false, error: error.message })

    }
}