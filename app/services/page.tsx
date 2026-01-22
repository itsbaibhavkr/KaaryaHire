import Link from "next/link";
import { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
    title: 'Our Services | KaaryaHire',
    description: 'Comprehensive recruitment solutions including IT Staffing, Campus Placement, and Payroll Management.',
};

const services = [
    {
        title: "IT Staffing",
        bestFor: "Best for: Tech & Product Cos",
        description: "We navigate the competitive tech landscape to source specialized developers and engineers who strictly align with your technical stack and project timelines.",
        outcome: "Outcome: Pre-vetted technical talent deployed in record time.",
        image: "/service_tech.png",
    },
    {
        title: "Non-IT Staffing",
        bestFor: "Best for: Manufacturing & Retail",
        description: "Reliable workforce solutions for operational excellence. We close bulk and niche positions across healthcare, sales, and administration with a focus on retention.",
        outcome: "Outcome: Stable, high-performing teams for critical operations.",
        image: "/service_recruitment.png",
    },
    {
        title: "Campus Placement",
        bestFor: "Best for: Graduate Hiring",
        description: "End-to-end management of campus drives. We identify and assess high-potential freshers ready to be molded into your future leaders.",
        outcome: "Outcome: A consistent pipeline of energetic, cost-effective talent.",
        image: "/service_campus.png",
    },
    {
        title: "Executive Search",
        bestFor: "Best for: C-Suite & VPs",
        description: "Discreet and precise headhunting for senior leadership. We leverage deep networks to find proven visionaries capable of driving organizational change.",
        outcome: "Outcome: Strategic leadership hires that directly impact growth.",
        image: "/service_executive.png",
    },
    {
        title: "Career Counselling",
        bestFor: "Best for: Professionals",
        description: "Strategic mentorship for candidates navigating complex career paths. We align individual skills with market realities to foster long-term professional success.",
        outcome: "Outcome: Informed career decisions and higher job satisfaction.",
        image: "/service_hr.png",
    },
    {
        title: "Payroll Management",
        bestFor: "Best for: Compliance & Ops",
        description: "Full-cycle payroll processing tailored to Indian statutory norms (PF, ESIC, Tax). We eliminate errors and ensure timely disbursement for your workforce.",
        outcome: "Outcome: Zero non-compliance risk and streamlined operations.",
        image: "/service_contract.png",
    },
];

export default function ServicesPage() {
    return (
        <div className="bg-white">
            {/* Header Section */}
            <div className="bg-slate-50 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                        Our Recruitment Services
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
                        Comprehensive workforce solutions designed to scale your business.
                        We connect the right talent with the right opportunities.
                    </p>
                </div>
            </div>

            {/* Services Grid */}
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-secondary/20 hover:-translate-y-1"
                        >
                            <div className="mb-6 flex items-start justify-between">
                                <div className="h-16 w-16 relative">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={64}
                                        height={64}
                                        className="object-contain"
                                    />
                                </div>
                                <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-secondary ring-1 ring-inset ring-blue-700/10">
                                    {service.bestFor}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                                {service.title}
                            </h3>

                            <p className="mt-4 text-muted leading-relaxed flex-grow">
                                {service.description}
                            </p>

                            <div className="mt-6 p-3 bg-slate-50 rounded-lg border border-gray-100">
                                <p className="text-sm font-semibold text-primary">
                                    {service.outcome}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-primary">
                <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        <span className="block">Need a custom solution?</span>
                        <span className="block text-secondary">Let's talk about your requirements.</span>
                    </h2>
                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-6 py-3 text-base font-medium text-primary hover:bg-gray-50"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
