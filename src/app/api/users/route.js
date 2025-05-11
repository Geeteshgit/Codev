import { NextResponse } from "next/server";
import connectToDB from "@/lib/dbConnect";
import { User } from "../../../models/user.model";
import { getUserFromToken } from "@/lib/auth";
import { Platform } from "@/models/platform.model";
import { Project } from "@/models/project.model";

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

export async function DELETE() {
    try {
        await connectToDB();
        
        const user = await getUserFromToken();
        if(!user) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });

        await Platform.deleteMany({ user: user._id });
        await Project.deleteMany({ user: user._id });
        await User.findByIdAndDelete(user._id);

        const res = NextResponse.json({ message: 'Account deleted permanently' }, { status: 200 });
        
        res.cookies.set('codev_token', '', {
            httpOnly: true,
            path: '/',
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            expires: new Date(0),
        });

        return res;

    } catch (err) {
        console.error(err.message);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }   
}