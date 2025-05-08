import { NextResponse } from "next/server";
import connectToDB from "@/lib/dbConnect";
import { User } from "../../../models/user.model";

export async function GET() {
    try {
        await connectToDB();
        const users = await User.find().select('-password').populate('projects platforms');
        return NextResponse.json(users);
    } catch (err) {
        console.error(err.message);
    }
}

export async function POST() {
    
}