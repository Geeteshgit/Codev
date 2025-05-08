import { NextResponse } from "next/server";

export async function POST() {
    try {
        const res = NextResponse.json({ message: "User logged out successfully" }, { status: 200 });
      
        res.headers.append("Set-Cookie", `codev_token=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict; Secure`);
        
        return res;

    } catch (err) {
        console.error(err.message);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}