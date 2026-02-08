import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { Button } from "./button";

export function ContactSection() {
    return (
        <section id="contact" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-bold font-heading sm:text-4xl">Get in Touch</h2>
                        <p className="mt-4 text-lg font-primary opacity-90">
                            Have questions or need a custom booking? Reach out to us directly or visit our stable.
                        </p>

                        <div className="mt-8 space-y-6 font-primary text-lg">
                            <div className="flex items-center gap-4">
                                <div className="bg-white/20 p-3 rounded-full">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="font-semibold">Call Us</p>
                                    <p>+91 98765 432XX</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-white/20 p-3 rounded-full">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="font-semibold">Email</p>
                                    <p>bookings@bangalorehorserides.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="bg-white/20 p-3 rounded-full">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <p className="font-semibold">Visit Us</p>
                                    <p>45, Green Valley Road, Nandi Hills, Bangalore</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <Button variant="secondary" size="lg" className="mr-4">
                                Message on WhatsApp
                            </Button>
                        </div>
                    </div>

                    <div className="h-full min-h-[400px] bg-background rounded-3xl overflow-hidden shadow-2xl">
                        {/* Placeholder for Google Map - In real app, use Google Maps Embed API */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15525.84589279766!2d77.67490284724933!3d13.370162596541012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb1e5d70656094f%3A0xe54546522502695c!2sNandi%20Hills!5e0!3m2!1sen!2sin!4v1707465000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
