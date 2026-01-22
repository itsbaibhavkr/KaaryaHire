import { Target, Lightbulb, Users, Award, ShieldCheck, MapPin } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | KaaryaHire',
    description: 'KaaryaHire is a premier recruitment agency connecting India\'s top talent with leading businesses through trust, speed, and precision.',
};

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="bg-slate-50 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                        About KaaryaHire
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
                        We are more than just a recruitment agency; we are your strategic partners in growth.
                        Building stronger organizations, one hire at a time.
                    </p>
                </div>
            </div>

            {/* Who We Are */}
            <section className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-primary">Who We Are</h2>
                            <p className="mt-6 text-lg text-muted leading-relaxed">
                                KaaryaHire is a dynamic recruitment firm dedicated to bridging the talent gap in the Indian market.
                                With a deep understanding of the diverse industrial landscape, we specialize in identifying,
                                screening, and placing candidates who not only fit the job description but also the company culture.
                            </p>
                            <p className="mt-4 text-lg text-muted leading-relaxed">
                                Founded on the principles of integrity and excellence, we serve as a catalyst for professional growth
                                and organizational success. Whether you are a startup looking for your founding team or an enterprise
                                scaling operations, we have the expertise to deliver.
                            </p>
                        </div>
                        <div className="mt-12 lg:mt-0 grid grid-cols-2 gap-4">
                            <div className="bg-slate-50 rounded-2xl p-6 text-center">
                                <ShieldCheck className="mx-auto h-10 w-10 text-secondary mb-3" />
                                <h3 className="font-semibold text-primary">Trusted Partner</h3>
                            </div>
                            <div className="bg-slate-50 rounded-2xl p-6 text-center">
                                <MapPin className="mx-auto h-10 w-10 text-secondary mb-3" />
                                <h3 className="font-semibold text-primary">Pan-India Reach</h3>
                            </div>
                            <div className="bg-slate-50 rounded-2xl p-6 text-center">
                                <Users className="mx-auto h-10 w-10 text-secondary mb-3" />
                                <h3 className="font-semibold text-primary">Human Focussed</h3>
                            </div>
                            <div className="bg-slate-50 rounded-2xl p-6 text-center">
                                <Award className="mx-auto h-10 w-10 text-secondary mb-3" />
                                <h3 className="font-semibold text-primary">Industry Experts</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="bg-primary py-16 sm:py-24 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">

                        {/* Mission */}
                        <div className="relative">
                            <div className="absolute top-0 left-0 -ml-4 -mt-4 opacity-10">
                                <Target className="w-24 h-24" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center">
                                    <Target className="mr-3 h-6 w-6" /> Our Mission
                                </h3>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    To empower businesses by connecting them with exceptional talent, and to empower individuals
                                    by providing them with career-defining opportunities. We aim to simplify the recruitment process
                                    through transparency, speed, and accuracy.
                                </p>
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="relative">
                            <div className="absolute top-0 left-0 -ml-4 -mt-4 opacity-10">
                                <Lightbulb className="w-24 h-24" />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold text-secondary mb-4 flex items-center">
                                    <Lightbulb className="mr-3 h-6 w-6" /> Our Vision
                                </h3>
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    To be India's most trusted and preferred recruitment partner, known for creating meaningful
                                    professional relationships and fostering an ecosystem where talent meets opportunity seamlessly.
                                </p>
                            </div>
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
