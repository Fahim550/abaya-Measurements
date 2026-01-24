import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
try {
const body = await req.json();

const { name, phone, } = body;
// console.log("messss",measurements);

// Basic validation
if (!name || !phone) {
return NextResponse.json(
{ message: "Name and phone are required" },
{ status: 400 },
);
}

// Auth with Google
const auth = new google.auth.GoogleAuth({
credentials: {
client_email: process.env.GOOGLE_CLIENT_EMAIL,
private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
},
scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

// Append row
await sheets.spreadsheets.values.append({
spreadsheetId: process.env.GOOGLE_SHEET_ID!,
range: "Sheet1!A1",
valueInputOption: "USER_ENTERED",
requestBody: {
values: [
[
name,
phone,
body.neckWidth,
body.shoulderWidth,
body.arms,
body.sleevesWidth,
body.bust,
body.waist,
body.hip,
body.itemLength,
body.sleevesFromShoulder,
new Date().toLocaleString(),
],
],
},
});

return NextResponse.json(
{ message: "Booking saved successfully" },
{ status: 200 },
);
} catch (error) {
console.error(error);
return NextResponse.json(
{ message: "Failed to save booking" },
{ status: 500 },
);
}
}
