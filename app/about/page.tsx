import { Target, Lightbulb, Users, Award, ShieldCheck, MapPin } from "lucide-react";
import { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
    title: 'About Us | KaaryaHire',
    description: 'KaaryaHire is a premier recruitment agency connecting India\'s top talent with leading businesses through trust, speed, and precision.',
};

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero Section with Background Image */}
            <div className="relative py-24 sm:py-32 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <Image
                        src="/about_hero_bg.png"
                        alt="About Background"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                    <div className="absolute inset-0 bg-slate-900/80" />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl drop-shadow-sm">
                        About KaaryaHire
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-200 leading-relaxed drop-shadow-sm">
                        We are more than just a recruitment agency; we are your strategic partners in growth.
                        Building stronger organizations, one hire at a time.
                    </p>
                </div>
            </div>

            {/* Who We Are: Founding Vision */}
            <section className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6">
                                More Than Just a <br /> <span className="text-secondary">Resume Database.</span>
                            </h2>
                            <p className="text-lg text-muted leading-relaxed mb-6">
                                KaaryaHire started with a simple observation: the Indian recruitment market was flooded with quantity, but starved for quality. Agencies were becoming resume-forwarding services, losing the human element of hiring.
                            </p>
                            <p className="text-lg text-muted leading-relaxed mb-8">
                                We set out to change that. We view ourselves not as external vendors, but as an extension of your own HR team. We take the time to understand your culture, your code, and your vision before we ever send a candidate profile.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6">
                                <div className="border-l-4 border-secondary pl-4">
                                    <p className="font-bold text-3xl text-primary">5+</p>
                                    <p className="text-sm text-gray-500 font-medium">Years of Excellence</p>
                                </div>
                                <div className="border-l-4 border-secondary pl-4">
                                    <p className="font-bold text-3xl text-primary">500+</p>
                                    <p className="text-sm text-gray-500 font-medium">Placements Delivered</p>
                                </div>
                                <div className="border-l-4 border-secondary pl-4">
                                    <p className="font-bold text-3xl text-primary">50+</p>
                                    <p className="text-sm text-gray-500 font-medium">Partner Companies</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 lg:mt-0 relative">
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-60"></div>

                            {/* Image Container */}
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 transform rotate-1 hover:rotate-0 transition-transform duration-700">
                                <Image
                                    src="/team_collaboration.png"
                                    alt="KaaryaHire Team Collaboration"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* Floating Card */}
                            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl border border-gray-100 max-w-xs transform -rotate-2 hover:rotate-0 transition-transform duration-500 hidden sm:block">
                                <div className="flex items-center space-x-3 mb-3">
                                    <div className="h-10 w-10 rounded-full bg-teal-50 flex items-center justify-center">
                                        <Target className="h-5 w-5 text-secondary" />
                                    </div>
                                    <h3 className="font-bold text-primary text-sm">Core Philosophy</h3>
                                </div>
                                <p className="text-sm text-gray-600 italic leading-relaxed">
                                    "We protect your momentum by finding people who fit perfectly."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Cards */}
            <section className="bg-slate-50 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                            <div className="h-14 w-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 text-secondary">
                                <Target className="h-7 w-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                            <p className="text-muted leading-relaxed">
                                To replace the "spray and pray" approach of traditional recruitment with a data-driven, human-centric methodology. We aim to reduce hiring timelines by 40% for our partners while ensuring 100% cultural fit.
                            </p>
                        </div>

                        <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
                            <div className="h-14 w-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-6 text-amber-500">
                                <Lightbulb className="h-7 w-7" />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                            <p className="text-muted leading-relaxed">
                                To be the Pulse of Indian Hiring. We envision a future where KaaryaHire is the automatic first choice for any Indian company looking to scale their team with quality and speed.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why KaaryaHire (Values) */}
            <section className="py-16 sm:py-24 bg-slate-50">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-primary">Why Choose KaaryaHire?</h2>
                        <p className="mt-4 text-lg text-muted">Core values that drive our operations and your success.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-primary mb-3">Integrity First</h3>
                            <p className="text-muted">
                                We believe in honest, transparent communication with both clients and candidates.
                                Trust is the foundation of our business.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-primary mb-3">Quality Over Quantity</h3>
                            <p className="text-muted">
                                We don't flood you with resumes. We carefully curate matches to ensure you see only
                                the most relevant and qualified candidates.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-primary mb-3">Long-term Commitment</h3>
                            <p className="text-muted">
                                We look beyond immediate placements. We aim to build long-lasting partnerships
                                supporting your growth journey over the years.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
}
