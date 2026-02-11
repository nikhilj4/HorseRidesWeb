
import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { amount } = body; // Amount in INR, e.g., 1500 for ₹1500

        const key_id = process.env.RAZORPAY_KEY_ID;
        const key_secret = process.env.RAZORPAY_KEY_SECRET;

        if (!key_id || !key_secret) {
            console.error("Missing Razorpay Credentials");
            return NextResponse.json({ success: false, error: "Server Configuration Error" }, { status: 500 });
        }

        const razorpay = new Razorpay({
            key_id: key_id,
            key_secret: key_secret,
        });

        const options = {
            amount: 100, // Hardcoded to ₹1 for testing
            currency: "INR",
            receipt: `receipt_${Date.now()}`,
        };

        const order = await razorpay.orders.create(options);

        return NextResponse.json({
            success: true,
            orderId: order.id,
            key: key_id, // Send key to frontend needed for checkout
            amount: order.amount,
            currency: order.currency
        });

    } catch (error: any) {
        console.error("Razorpay Error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
