import { Search, Briefcase, GraduationCap, Clock, FileText, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Our Services | KaaryaHire',
    description: 'Comprehensive recruitment solutions including Fresher Hiring, Experienced Professionals, and HR Consulting.',
};

const services = [
    {
        title: "Recruitment Services",
        description: "End-to-end recruitment solutions tailored to your specific industry needs. We handle sourcing, screening, and initial interviews to present you with only the best candidates.",
        icon: Search,
        features: ["Role Analysis", "Candidate Sourcing", "Initial Screening", "Interview Coordination"],
    },
    {
        title: "Fresher Hiring",
        description: "Tap into the raw potential of fresh graduates. We bridge the gap between campuses and corporates, helping you find bright, energetic talent eager to learn and grow.",
        icon: GraduationCap,
        features: ["Campus Drives", "Skill Assessment", "Aptitude Testing", "Onboarding Support"],
    },
    {
        title: "Experienced Professional Hiring",
        description: "Find seasoned experts who can hit the ground running. Our deep network allows us to headhunt niche talent and leadership profiles that drive business success.",
        icon: Briefcase,
        features: ["Executive Search", "Niche Skill Mapping", "Confidential Hiring", "Reference Checks"],
    },
    {
        title: "Internship / Contract Hiring",
        description: "Flexible staffing solutions for short-term projects or seasonal spikes. Get skilled professionals on a contract basis or interns to support your teams.",
        icon: Clock,
        features: ["Project-based Staffing", "Internship Programs", "Contract Management", "Payroll Support"],
    },
    {
        title: "HR Consulting",
        description: "Strategic HR advice to optimize your workforce management. From policy formulation to performance management systems, we help structure your people operations.",
        icon: FileText,
        features: ["Policy Formation", "Performance Mgmt", "Employee Engagement", "Compliance Audit"],
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
                            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                                <service.icon className="h-6 w-6" />
                            </div>

                            <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                                {service.title}
                            </h3>

                            <p className="mt-4 flex-grow text-muted leading-relaxed">
                                {service.description}
                            </p>

                            <div className="mt-8 border-t border-gray-50 pt-6">
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
