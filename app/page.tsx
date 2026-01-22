import Link from "next/link";
import { ArrowRight, CheckCircle2, Users, Building2, TrendingUp, MapPin, GraduationCap, Clock, UserCheck, ShieldCheck, HeartHandshake, Scale } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KaaryaHire - India\'s Premier Recruitment Agency',
  description: 'Connecting top talent with leading businesses across India. Expert recruitment for IT, Non-IT, and Executive roles.',
};

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-32 lg:pb-40">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.4]"></div>
        <div className="absolute top-0 right-0 -z-10 h-[600px] w-[600px] rounded-full bg-blue-50/80 blur-3xl filter opacity-60 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 -z-10 h-[600px] w-[600px] rounded-full bg-slate-50/80 blur-3xl filter opacity-60 -translate-x-1/2 translate-y-1/2"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Column: Text Content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-sm font-medium text-secondary mb-6">
                <span className="flex h-2 w-2 rounded-full bg-secondary mr-2"></span>
                We are hiring 24/7 across India
              </div>
              <h1 className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl md:text-6xl lg:leading-tight">
                Building Tomorrow’s <br />
                <span className="text-secondary">Workforce Today.</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted max-w-2xl mx-auto lg:mx-0">
                KaaryaHire is your strategic partner in talent acquisition. We connect ambitious companies with exceptional professionals to drive growth and innovation.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-lg bg-secondary px-8 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-8 py-3.5 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-200 transition-all group"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-500 font-medium">
                <span className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> Verified Candidates</span>
                <span className="flex items-center"><CheckCircle2 className="h-4 w-4 text-green-500 mr-2" /> Fast Turnaround</span>
              </div>
            </div>

            {/* Right Column: Visual Mockup (CSS Composition) */}
            <div className="relative hidden lg:block">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-secondary to-blue-200 opacity-20 blur"></div>
              <div className="relative rounded-2xl bg-white border border-gray-100 shadow-2xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                {/* Mock Header */}
                <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-xs font-mono text-gray-400">kaaryahire-dashboard.app</div>
                </div>

                {/* Mock Content */}
                <div className="space-y-6">
                  <div className="flex items-center p-4 bg-slate-50 rounded-xl border border-dashed border-gray-200">
                    <div className="h-10 w-10 text-white bg-secondary rounded-full flex items-center justify-center font-bold">IT</div>
                    <div className="ml-4 flex-1">
                      <div className="h-2.5 bg-gray-200 rounded w-24 mb-2"></div>
                      <div className="h-2 bg-gray-100 rounded w-32"></div>
                    </div>
                    <span className="text-green-600 font-bold text-sm bg-green-50 px-2 py-1 rounded">Active</span>
                  </div>

                  <div className="flex items-center p-4 bg-slate-50 rounded-xl border border-dashed border-gray-200">
                    <div className="h-10 w-10 text-white bg-slate-700 rounded-full flex items-center justify-center font-bold">HR</div>
                    <div className="ml-4 flex-1">
                      <div className="h-2.5 bg-gray-200 rounded w-20 mb-2"></div>
                      <div className="h-2 bg-gray-100 rounded w-28"></div>
                    </div>
                    <span className="text-blue-600 font-bold text-sm bg-blue-50 px-2 py-1 rounded">Screening</span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="text-sm text-gray-500">Total Placements</div>
                    <div className="text-xl font-bold text-primary">1,240+</div>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2">
                    <div className="bg-secondary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>

              {/* Floating Element */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg border border-gray-100 p-4 flex items-center animate-bounce duration-[3000ms]">
                <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-3">
                  <p className="text-xs text-gray-500 font-semibold uppercase">Status</p>
                  <p className="text-sm font-bold text-gray-900">Candidate Hired!</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* How KaaryaHire Helps You */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              How KaaryaHire Helps You
            </h2>
            <p className="mt-4 text-lg text-muted">
              We simplify the recruitment journey in three tailored steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="flex flex-col h-full rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-secondary text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Understand Hiring Needs</h3>
              <p className="text-muted flex-grow">
                We dive deep into your company culture and job requirements to create a precise candidate persona tailored for the Indian market.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col h-full rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-secondary text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Connect with Right Talent</h3>
              <p className="text-muted flex-grow">
                Using our vast network, we shortlist and screen top-tier candidates who match your technical needs and organizational values.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col h-full rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-secondary text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Support End-to-End Recruitment</h3>
              <p className="text-muted flex-grow">
                From interview coordination to salary negotiation and onboarding, we support you until the candidate joins your team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose KaaryaHire */}
      <section className="bg-slate-50 py-16 sm:py-24 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-100 blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-orange-50 blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Why Partner with KaaryaHire?
            </h2>
            <p className="mt-4 text-lg text-muted">
              We bring precision, speed, and reliability to your recruitment process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Card 1 */}
            <div className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-secondary/30">
              <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">India-Focused Hiring</h3>
              <p className="text-sm text-muted leading-relaxed">
                Deep expertise in local details and regional talent pools across India.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-secondary/30">
              <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Fresher & Experienced</h3>
              <p className="text-sm text-muted leading-relaxed">
                From campus recruitment to lateral hiring, we cover all experience levels.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-secondary/30">
              <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Fast Turnaround</h3>
              <p className="text-sm text-muted leading-relaxed">
                Accelerated screening process to close critical open positions faster.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-secondary/30">
              <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                <UserCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Personalized Service</h3>
              <p className="text-sm text-muted leading-relaxed">
                Tailored recruitment strategies that align with your specific company culture.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Tailored Recruitment Solutions
            </h2>
            <p className="mt-4 text-lg text-muted">
              We specialize in fulfilling diverse hiring needs across industries.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-secondary/20">
              <h3 className="text-xl font-semibold text-primary">IT Recruitment</h3>
              <p className="mt-4 text-muted">
                Software Developers, Data Scientists, System Architects, and more technical roles.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-secondary" /> Frontend & Backend
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-secondary" /> DevOps & Cloud
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-secondary/20">
              <h3 className="text-xl font-semibold text-primary">Non-IT Hiring</h3>
              <p className="mt-4 text-muted">
                Sales, Marketing, HR, Finance, and Operations professionals for your core business.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-secondary" /> Sales Executives
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-secondary" /> Digital Marketers
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-secondary/20">
              <h3 className="text-xl font-semibold text-primary">Executive Search</h3>
              <p className="mt-4 text-muted">
                Leadership hiring for C-suite roles and senior management positions.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-secondary" /> Directors & VPs
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-secondary" /> Branch Heads
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/services" className="text-sm font-semibold text-secondary hover:text-blue-700">
              View All Services <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Credibility */}
      <section className="bg-white py-16 sm:py-24 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Committed to <span className="text-secondary">Excellence</span> & Integrity
            </h2>
            <p className="mt-4 text-lg text-muted">
              We build relationships on trust. Our commitment to high ethical standards and professional service sets us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Trust Item 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl transition-transform hover:scale-105 duration-300">
              <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-secondary">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-primary">Industry-Focused Recruitment</h3>
              <p className="mt-2 text-sm text-muted">
                Specialized knowledge across key sectors to ensure precise candidate matching for your specific needs.
              </p>
            </div>

            {/* Trust Item 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl transition-transform hover:scale-105 duration-300">
              <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-secondary">
                <HeartHandshake className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-primary">Dedicated Hiring Support</h3>
              <p className="mt-2 text-sm text-muted">
                A dedicated account manager guides you through every step, from initial consultation to final onboarding.
              </p>
            </div>

            {/* Trust Item 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-slate-50 rounded-2xl transition-transform hover:scale-105 duration-300">
              <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-secondary">
                <Scale className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold text-primary">Ethical & Transparent</h3>
              <p className="mt-2 text-sm text-muted">
                We maintain 100% transparency with clients and candidates, ensuring a fair and honest recruitment process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Build Your Dream Team?
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Let's discuss how KaaryaHire can streamline your recruitment process and finding the perfect match.
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-6 py-3 text-base font-semibold text-primary shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Contact Us Today
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
