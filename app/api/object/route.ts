import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const objects = await axios.get(`https://api.harvardartmuseums.org/object?apikey=a341dfc9-4f28-4915-b330-16d8611d702d`).then(res => res.data);
    console.log(objects)
    return NextResponse.json(objects);
}