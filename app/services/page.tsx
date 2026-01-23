import Link from "next/link";
import { Metadata } from 'next';
import Image from "next/image";

export const metadata: Metadata = {
    title: 'Our Services | KaaryaHire',
    description: 'Comprehensive recruitment solutions including IT Staffing, Campus Placement, and Payroll Management.',
};

const services = [
    {
        title: "Permanent Staffing (Full-Time Recruitment)",
        tagline: "Building your core team with long-term assets.",
        inclusions: [
            "End-to-End Executive Search",
            "Technical & Cultural Fit Assessment",
            "Background Verification Checks",
            "Post-Onboarding Support"
        ],
        image: "/service_executive.png",
    },
    {
        title: "Contract / Temporary Staffing",
        tagline: "Flexible workforce solutions for dynamic business needs.",
        inclusions: [
            "Project-Based Hiring",
            "Seasonal Staffing Support",
            "Payroll & Compliance Management",
            "Immediate Resource Deployment"
        ],
        image: "/service_contract.png",
    },
    {
        title: "Bulk Hiring Solutions",
        tagline: "Scaling your workforce rapidly without compromising quality.",
        inclusions: [
            "High-Volume Recruitment Drives",
            "Campus Placement Management",
            "Walk-in Drive Organization",
            "Automated Screening Process"
        ],
        image: "/service_campus.png",
    },
    {
        title: "Entry-Level & Mid-Level Hiring",
        tagline: "Connecting you with rising stars and experienced professionals.",
        inclusions: [
            "Fresh Graduate Recruitment",
            "Junior to Mid-Senior Roles",
            "Skill-Based Candidate Filtering",
            "Interview Scheduling & Coordination"
        ],
        image: "/service_recruitment.png",
    },
    {
        title: "Industry-Specific Hiring",
        tagline: "Specialized talent for niche market requirements.",
        inclusions: [
            "IT & Non-IT Recruitment",
            "Healthcare & Pharma Staffing",
            "Manufacturing & Engineering Roles",
            "Hospitality & Retail Hiring"
        ],
        image: "/service_tech.png",
    },
    {
        title: "Replacement Hiring Support",
        tagline: "Ensuring business continuity with quick backfills.",
        inclusions: [
            "Quick Turnaround for Attrition",
            "Backup Resource Planning",
            "Transition Management",
            "Guaranteed Replacement Period"
        ],
        image: "/service_hr.png",
    },
    {
        title: "On-Request Hiring & Consulting",
        tagline: "Tailored recruitment strategies for unique challenges.",
        inclusions: [
            "Market Mapping & Salary Benchmarking",
            "Diversity & Inclusion Hiring",
            "Recruitment Process Outsourcing (RPO)",
            "HR Policy Consultation"
        ],
        image: "/team_collaboration.png",
    },
];

export default function ServicesPage() {
    return (
        <div className="bg-white">
            {/* Header Section */}
            <div className="bg-slate-50 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                        Recruitment & Staffing Services
                    </h1>
                    <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
                        At KaaryaHire, we provide a focused and personalized recruitment experience specifically tailored to the dynamic Indian market. We prioritize building trust by deeply understanding your organization’s needs, ensuring we connect you with committed talent that drives long-term success.
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
                            </div>

                            <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                                {service.title}
                            </h3>

                            <p className="mt-2 text-sm italic text-secondary font-medium">
                                {service.tagline}
                            </p>

                            <ul className="mt-6 list-disc pl-5 space-y-2 text-muted text-sm flex-grow leading-relaxed">
                                {service.inclusions.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
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
