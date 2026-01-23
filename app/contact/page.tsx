"use client";

import { Mail, Phone, MapPin, Send, Facebook, Linkedin, Instagram } from "lucide-react";

export default function ContactPage() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Thank you for your message. We will get back to you shortly!");
    };

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="bg-slate-50 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                        Contact Us
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
                        Have a question or need recruitment assistance? We're here to help.
                        Reach out to our team today.
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Contact Information */}
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight text-primary mb-8">
                            Get in Touch
                        </h2>
                        <div className="space-y-8">


                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-lg font-medium text-primary">Phone</h3>
                                    <p className="mt-2 text-muted">
                                        Mon-Fri from 9am to 6pm
                                    </p>
                                    <a href="tel:+918069640746" className="mt-1 block text-lg font-semibold text-secondary hover:text-blue-700">
                                        +91 8069640746
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-lg font-medium text-primary">Email</h3>
                                    <p className="mt-2 text-muted">
                                        For all general inquiries
                                    </p>
                                    <a href="mailto:support@kaaryahire.com" className="mt-1 block text-lg font-semibold text-secondary hover:text-blue-700">
                                        support@kaaryahire.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="ml-6">
                                    <h3 className="text-lg font-medium text-primary">Office</h3>
                                    <p className="mt-2 text-muted">
                                        Come say hello at our HQ
                                    </p>
                                    <p className="mt-1 text-base text-gray-900">
                                        123 Business Park, Sector 62,<br />
                                        Noida, Uttar Pradesh, 201301<br />
                                        India
                                    </p>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-gray-100">
                                <h3 className="text-lg font-medium text-primary mb-4">Follow Us</h3>
                                <div className="flex space-x-6">
                                    <a href="https://www.facebook.com/profile.php?id=61586833107162" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors">
                                        <span className="sr-only">Facebook</span>
                                        <Facebook className="h-6 w-6" />
                                    </a>
                                    <a href="https://www.linkedin.com/company/kaaryahire/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors">
                                        <span className="sr-only">LinkedIn</span>
                                        <Linkedin className="h-6 w-6" />
                                    </a>
                                    <a href="https://www.instagram.com/kaaryahire" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors">
                                        <span className="sr-only">Instagram</span>
                                        <Instagram className="h-6 w-6" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-gray-100">
                            <h3 className="text-lg font-semibold text-primary mb-2">Looking for a job?</h3>
                            <p className="text-muted mb-4">
                                Send your resume directly to our HR team for consideration in upcoming roles.
                            </p>
                            <a href="mailto:careers@kaaryahire.com" className="text-secondary font-medium hover:underline">
                                careers@kaaryahire.com &rarr;
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-10">
                        <h2 className="text-2xl font-bold tracking-tight text-primary mb-6">
                            Send us a Message
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Full Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="name"
                                        required
                                        className="block w-full rounded-md border-0 py-2.5 px-3.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6 transition-shadow"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            autoComplete="email"
                                            required
                                            className="block w-full rounded-md border-0 py-2.5 px-3.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6 transition-shadow"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                                        Phone Number
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            autoComplete="tel"
                                            className="block w-full rounded-md border-0 py-2.5 px-3.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6 transition-shadow"
                                            placeholder="+91 12345 67890"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                                    Message
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        name="message"
                                        id="message"
                                        rows={4}
                                        required
                                        className="block w-full rounded-md border-0 py-2.5 px-3.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6 transition-shadow resize-none"
                                        placeholder="How can we help you?"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center items-center rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-all"
                                >
                                    Send Message <Send className="ml-2 h-4 w-4" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
