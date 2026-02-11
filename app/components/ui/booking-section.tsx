'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AppointmentDatePicker } from "@/components/ui/appointment-calendar";
import { PaymentModal } from "@/components/ui/payment-modal";

const prices: Record<string, number> = {
    "Guided Horse Ride": 1500,
    "Sunset Ride": 2000,
    "Jeep Safari": 2500,
    "Night Camping": 3000,
    "Beginner Lesson": 1200,
    "regular": 1500
};

export function BookingSection() {
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [time, setTime] = useState<string>('');
    const [people, setPeople] = useState<number>(1);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [packageType, setPackageType] = useState<string>('Guided Horse Ride');
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

    const pricePerPerson = prices[packageType] || 1500;
    const totalAmount = pricePerPerson * people;

    const handleSubmit = () => {
        if (!name || !email) {
            alert('Please enter your name and email');
            return;
        }
        setIsPaymentModalOpen(true);
    };

    const handlePaymentSuccess = () => {
        const formattedDate = date ? date.toLocaleDateString() : 'N/A';

        const newBooking = {
            id: Date.now(),
            name: name,
            email: email,
            package: packageType,
            date: date ? date.toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
            time: time,
            guests: people,
            status: "Confirmed",
            amount: totalAmount
        };

        // Save to localStorage for Admin Dashboard simulation
        const existingBookings = JSON.parse(localStorage.getItem('admin_bookings') || '[]');
        localStorage.setItem('admin_bookings', JSON.stringify([newBooking, ...existingBookings]));

        console.log(`Booking Confirmed: ${packageType} on ${formattedDate} at ${time} for ${people} people. Email: ${email}`);

        // Add to Google Calendar
        if (date && time) {
            const startTimePart = time.split(':');
            const startDateTime = new Date(date);
            // Ensure date object is fresh or properly cloned if needed, but here it's fine state
            startDateTime.setHours(parseInt(startTimePart[0]), parseInt(startTimePart[1]));

            const endDateTime = new Date(startDateTime);
            endDateTime.setHours(startDateTime.getHours() + 2); // Assume 2 hours duration by default

            // Format for Google Calendar: YYYYMMDDTHHmmssZ
            const formatGCalDate = (d: Date) => d.toISOString().replace(/-|:|\.\d\d\d/g, "");

            // Call API to create Google Calendar Event
            fetch('/api/calendar', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    email,
                    packageType,
                    guests: people,
                    amount: totalAmount,
                    date: date ? date.toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
                    time
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.success) {
                        alert('Booking Confirmed! A calendar invite has been sent to your email.');
                    } else {
                        console.error('Calendar Error:', data.error);
                        alert('Booking saved locally. Note: Calendar sync requires server configuration.');
                    }
                })
                .catch(err => console.error('Booking API Error:', err));
        }
    };

    return (
        <section id="booking" className="py-24 bg-secondary/30 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold font-heading text-foreground sm:text-4xl">Book Your Adventure</h2>
                    <p className="mt-4 text-lg text-muted-foreground font-primary">
                        Ready to ride? Select your preferred date and time from the calendar below.
                    </p>
                </div>

                <div className="bg-card rounded-3xl p-8 shadow-xl border border-border max-w-5xl mx-auto flex flex-col items-center">
                    <AppointmentDatePicker
                        onDateChange={(d) => setDate(d)}
                        onTimeChange={(t) => setTime(t)}
                    />

                    <div className="w-full max-w-4xl mt-10 grid grid-cols-1 sm:grid-cols-12 gap-6 items-end">

                        <div className="sm:col-span-12 md:col-span-3">
                            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground font-primary mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Full name"
                                className="block w-full rounded-xl border-0 py-3 px-4 text-foreground ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary text-sm leading-6 bg-background h-12 shadow-sm font-medium"
                            />
                        </div>

                        <div className="sm:col-span-12 md:col-span-3">
                            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground font-primary mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@example.com"
                                className="block w-full rounded-xl border-0 py-3 px-4 text-foreground ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary text-sm leading-6 bg-background h-12 shadow-sm font-medium"
                            />
                        </div>

                        <div className="sm:col-span-12 md:col-span-3">
                            <label htmlFor="package" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground font-primary mb-2">
                                Select Package
                            </label>
                            <select
                                id="package"
                                name="package"
                                value={packageType}
                                onChange={(e) => setPackageType(e.target.value)}
                                className="block w-full rounded-xl border-0 py-3 px-4 text-foreground ring-1 ring-inset ring-border focus:ring-2 focus:ring-inset focus:ring-primary text-sm bg-background h-12 shadow-sm font-medium"
                            >
                                <option value="Guided Horse Ride">Guided Horse Ride (₹1500)</option>
                                <option value="Sunset Ride">Sunset Beach Ride (₹2000)</option>
                                <option value="Jeep Safari">Jeep Safari Adventure (₹2500)</option>
                                <option value="Night Camping">Night Camping Experience (₹3000)</option>
                                <option value="Beginner Lesson">Beginner Riding Lesson (₹1200)</option>
                            </select>
                        </div>

                        <div className="sm:col-span-6 md:col-span-1">
                            <label htmlFor="people" className="block text-xs font-bold uppercase tracking-wider text-muted-foreground font-primary mb-2">
                                Guests
                            </label>
                            <input
                                type="number"
                                name="people"
                                id="people"
                                min="1"
                                max="10"
                                value={people}
                                onChange={(e) => setPeople(parseInt(e.target.value))}
                                className="block w-full rounded-xl border-0 py-3 px-4 text-foreground ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary text-sm leading-6 bg-background h-12 shadow-sm font-medium"
                            />
                        </div>

                        <div className="sm:col-span-6 md:col-span-2">
                            <Button
                                onClick={handleSubmit}
                                size="lg"
                                className="w-full rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 font-bold text-base h-12 shadow-md hover:shadow-lg transition-all"
                                disabled={!date || !time}
                            >
                                Book
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {isPaymentModalOpen && (
                <PaymentModal
                    isOpen={isPaymentModalOpen}
                    onClose={() => setIsPaymentModalOpen(false)}
                    totalAmount={totalAmount}
                    onSuccess={handlePaymentSuccess}
                />
            )}
        </section>
    );

}
