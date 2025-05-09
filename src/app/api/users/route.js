import { NextResponse } from "next/server";
import connectToDB from "@/lib/dbConnect";
import { User } from "../../../models/user.model";

export async function GET() {
    try {
        await connectToDB();
        const users = await User.find().select('-password');
        return NextResponse.json(users, { status: 200 });
    } catch (err) {
        console.error(err.message);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
