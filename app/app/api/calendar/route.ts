
import { google } from 'googleapis';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, packageType, date, time, guests, amount } = body;

        // Verify credentials exist
        const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
        const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
        const GOOGLE_REFRESH_TOKEN = process.env.GOOGLE_REFRESH_TOKEN;

        if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_REFRESH_TOKEN) {
            console.error("Missing Google API Credentials");
            return NextResponse.json({ success: false, error: 'Server configuration error' }, { status: 500 });
        }

        const oauth2Client = new google.auth.OAuth2(
            GOOGLE_CLIENT_ID,
            GOOGLE_CLIENT_SECRET,
            process.env.GOOGLE_REDIRECT_URI || 'http://localhost:3000'
        );

        oauth2Client.setCredentials({ refresh_token: GOOGLE_REFRESH_TOKEN });

        const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

        // Calculate Start/End Time
        const startTimePart = time.split(':');
        const startDateTime = new Date(date);
        startDateTime.setHours(parseInt(startTimePart[0]), parseInt(startTimePart[1]));

        const endDateTime = new Date(startDateTime);
        endDateTime.setHours(startDateTime.getHours() + 2); // 2 hours duration

        const event = {
            summary: `Horse Ride: ${packageType}`,
            location: 'Horse Riding Center, Nova Logic Stables',
            description: `Customer: ${name}\nEmail: ${email}\nGuests: ${guests}\nPackage: ${packageType}\nAmount: ₹${amount}\n\nAutomated Booking from Website.`,
            start: {
                dateTime: startDateTime.toISOString(),
                timeZone: 'Asia/Kolkata', // Adjust as needed
            },
            end: {
                dateTime: endDateTime.toISOString(),
                timeZone: 'Asia/Kolkata',
            },
            attendees: [
                { email: email }, // The Guest
                // { email: 'nikhiljram4@gmail.com' } // The Admin (Owner of calendar, implicit, but can add)
            ],
            reminders: {
                useDefault: false,
                overrides: [
                    { method: 'email', minutes: 24 * 60 },
                    { method: 'popup', minutes: 30 },
                ],
            },
            sendUpdates: 'all', // Send invites to attendees
        };

        const response = await calendar.events.insert({
            calendarId: 'primary', // 'primary' uses the calendar associated with the Refresh Token (nikhiljram4@gmail.com)
            requestBody: event,
        });

        return NextResponse.json({ success: true, eventLink: response.data.htmlLink });

    } catch (error: any) {
        console.error("Calendar API Error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
