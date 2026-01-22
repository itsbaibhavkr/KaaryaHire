import { Search, Briefcase, GraduationCap, Clock, FileText, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Services | KaaryaHire',
    description: 'Comprehensive recruitment solutions including Fresher Hiring, Experienced Professionals, and HR Consulting.',
};

const services = [
    {
        title: "End-to-End Recruitment",
        bestFor: "Best for: Companies needing full-cycle hiring",
        description: "From defining the role to the final offer letter, we manage the entire recruitment lifecycle. We act as your internal HR team, ensuring a seamless and professional hiring experience.",
        outcome: "Outcome: Reduced time-to-hire by 40% and zero administrative burden.",
        icon: Search,
        features: ["Role Analysis", "Candidate Sourcing", "Initial Screening", "Interview Coordination"],
    },
    {
        title: "Campus to Corporate",
        bestFor: "Best for: Volume hiring & Fresh talent",
        description: "Tap into the raw energy of India's top colleges. We manage campus drives and fresh graduate hiring to build your future leadership pipeline.",
        outcome: "Outcome: Access to high-potential talent eager to learn and grow.",
        icon: GraduationCap,
        features: ["Campus Drives", "Aptitude Testing", "Group Discussions", "Onboarding Support"],
    },
    {
        title: "Executive Search",
        bestFor: "Best for: Senior Leadership & Niche Roles",
        description: "Discreet and targeted headhunting for critical C-suite and upper-management roles. We map the market to find leaders who align with your long-term vision.",
        outcome: "Outcome: Strategic hires that drive organizational transformation.",
        icon: Briefcase,
        features: ["Market Mapping", "Competitor Analysis", "Confidential Hiring", "Leadership Assessment"],
    },
    {
        title: "Contract Staffing",
        bestFor: "Best for: Projects & Seasonal Spikes",
        description: "Flexible staffing solutions to scale your workforce up or down based on demand. Perfect for IT projects, seasonal sales, or interim requirements.",
        outcome: "Outcome: Operational agility without long-term payroll liabilities.",
        icon: Clock,
        features: ["Project-based Staffing", "Contract Management", "Statutory Compliance", "Payroll Support"],
    },
    {
        title: "HR Advisory",
        bestFor: "Best for: Startups & SMEs",
        description: "Strategic HR consulting to help you build a culture of performance. We help setup policies, compensation structures, and performance management systems.",
        outcome: "Outcome: A structured, compliant, and high-performance workplace.",
        icon: FileText,
        features: ["Policy Formation", "Org Structure Design", "Performance Mgmt", "Compliance Audit"],
    },
    {
        title: "Tech Hiring Specialist",
        bestFor: "Best for: Product Companies & IT Services",
        description: "Specialized recruitment for the technology sector. We fancy ourselves as tech-insiders who understand the difference between Java and JavaScript.",
        outcome: "Outcome: Technical talent that fits your stack and engineering culture.",
        icon: CheckCircle,
        features: ["Tech Screening", "Coding Assessments", "Stack-Specific Hiring", "Remote Talent"],
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
                            className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-secondary/20 hover:-translate-y-1"
                        >
                            <div className="mb-6 flex items-start justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-secondary ring-1 ring-inset ring-blue-700/10">
                                    {service.bestFor}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                                {service.title}
                            </h3>

                            <p className="mt-4 text-muted leading-relaxed">
                                {service.description}
                            </p>

                            <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-gray-100">
                                <p className="text-sm font-semibold text-primary">
                                    {service.outcome}
                                </p>
                            </div>

                            <div className="mt-8 border-t border-gray-50 pt-6 mt-auto">
                                <ul className="space-y-3">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-gray-600">
                                            <CheckCircle className="mr-2 h-4 w-4 text-secondary/70" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
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
