"use client";
import React, { useState } from 'react';
import { X, CreditCard, ShieldCheck, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    totalAmount: number;
    email?: string;
    contact?: string;
    onSuccess: () => void;
}

export function PaymentModal({ isOpen, onClose, totalAmount, email = "customer@example.com", contact = "+91 98765 43210", onSuccess }: PaymentModalProps) {
    const [step, setStep] = useState<'details' | 'processing' | 'success'>('details');

    if (!isOpen) return null;

    const handlePay = async () => {
        setStep('processing');

        // 1. Load Razorpay Script
        const loadScript = (src: string) => {
            return new Promise((resolve) => {
                const script = document.createElement('script');
                script.src = src;
                script.onload = () => resolve(true);
                script.onerror = () => resolve(false);
                document.body.appendChild(script);
            });
        };

        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?');
            setStep('details');
            return;
        }

        // 2. Create Order on Server
        try {
            const result = await fetch('/api/razorpay', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ amount: totalAmount }),
            });

            const data = await result.json();

            if (!data.success) {
                alert(data.error || 'Server error. Please try again.');
                setStep('details');
                return;
            }

            const options = {
                key: data.key,
                amount: data.amount,
                currency: data.currency,
                name: "Nova Logic Stables",
                description: "Horse Ride Booking",
                order_id: data.orderId,
                handler: function (response: any) {
                    // Payment Success
                    console.log("Payment ID: ", response.razorpay_payment_id);
                    setStep('success');
                    setTimeout(() => {
                        onSuccess();
                        onClose();
                        setStep('details');
                    }, 2000);
                },
                prefill: {
                    email: email,
                    contact: contact,
                    // name: "User", // Ideally pass name prop
                },
                theme: {
                    color: "#3395FF",
                },
                modal: {
                    ondismiss: function () {
                        setStep('details');
                    }
                }
            };

            const paymentObject = new (window as any).Razorpay(options);
            paymentObject.open();

        } catch (error) {
            console.error("Payment Error:", error);
            alert('Payment failed to initiate. Please check your connection.');
            setStep('details');
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200" onClick={(e) => e.stopPropagation()}>
                {/* Header */}
                <div className="bg-[#1C2C4E] text-white p-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="bg-[#3395FF] p-1.5 rounded text-white font-bold text-xs uppercase tracking-wider">Razorpay</div>
                        <div className="text-sm font-medium opacity-90">Trusted Business</div>
                    </div>
                    <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6">
                    {step === 'details' && (
                        <>
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <p className="text-sm text-gray-500">Total Amount</p>
                                    <h2 className="text-3xl font-bold text-gray-900">₹{totalAmount.toLocaleString()}</h2>
                                </div>
                                <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5">
                                    <ShieldCheck className="w-3.5 h-3.5" />
                                    Secure
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                                    <p className="text-xs text-gray-500 mb-1">Contact Info</p>
                                    <p className="text-sm font-medium text-gray-800">{contact}</p>
                                    <p className="text-sm text-gray-600">{email}</p>
                                </div>

                                <div className="space-y-3">
                                    <button className="w-full flex items-center justify-between p-4 border border-blue-500 bg-blue-50/50 rounded-xl transition-all shadow-sm ring-1 ring-blue-500/20">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
                                                <CreditCard className="w-5 h-5 text-gray-700" />
                                            </div>
                                            <div className="text-left">
                                                <p className="font-semibold text-gray-900 text-sm">Card</p>
                                                <p className="text-xs text-gray-500">Visa, MasterCard, RuPay</p>
                                            </div>
                                        </div>
                                        <div className="h-4 w-4 rounded-full border-[5px] border-blue-600 bg-white"></div>
                                    </button>
                                    <button className="w-full flex items-center justify-between p-4 border border-gray-200 hover:bg-gray-50 rounded-xl transition-all opacity-60 cursor-not-allowed">
                                        <div className="flex items-center gap-3">
                                            <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm text-center font-bold text-xs text-blue-800 w-9 h-9 flex items-center justify-center">UPI</div>
                                            <div className="text-left">
                                                <p className="font-semibold text-gray-900 text-sm">UPI</p>
                                                <p className="text-xs text-gray-500">Google Pay, PhonePe, Paytm</p>
                                            </div>
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <Button
                                onClick={handlePay}
                                className="w-full h-12 bg-[#3395FF] hover:bg-[#2b85e6] text-white font-bold rounded-xl shadow-lg shadow-blue-500/20 transition-all active:scale-[0.98]"
                            >
                                Pay ₹{totalAmount.toLocaleString()}
                            </Button>

                            <div className="mt-4 flex justify-center items-center gap-1.5 text-xs text-gray-400">
                                <Lock className="w-3 h-3" />
                                Secured by Razorpay
                            </div>
                        </>
                    )}

                    {step === 'processing' && (
                        <div className="flex flex-col items-center justify-center py-12">
                            <div className="w-16 h-16 border-4 border-blue-100 border-t-blue-500 rounded-full animate-spin mb-6"></div>
                            <h3 className="text-lg font-semibold text-gray-900">Processing Payment...</h3>
                            <p className="text-sm text-gray-500 mt-2">Please do not close this window</p>
                        </div>
                    )}

                    {step === 'success' && (
                        <div className="flex flex-col items-center justify-center py-8 animate-in zoom-in duration-300">
                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900">Payment Successful!</h3>
                            <p className="text-sm text-gray-500 mt-2 text-center max-w-[200px]">Your booking has been confirmed. You will receive an email shortly.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
