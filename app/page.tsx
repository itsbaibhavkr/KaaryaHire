import Link from "next/link";
import { ArrowRight, CheckCircle2, Users, Building2, TrendingUp, MapPin, GraduationCap, Clock, UserCheck, ShieldCheck, HeartHandshake, Scale, Rocket, Store, Briefcase, Landmark } from "lucide-react";
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
            <div className="text-center lg:text-left relative z-10">
              <div className="inline-flex items-center rounded-full border border-teal-100 bg-teal-50/50 px-4 py-1.5 text-sm font-semibold text-secondary mb-8 ring-1 ring-teal-500/10">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                We are hiring 24/7 across India
              </div>

              <h1 className="text-5xl font-extrabold tracking-tight text-primary sm:text-6xl lg:text-7xl lg:leading-[1.1] mb-6">
                Recruit Industry <br className="hidden lg:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-blue-600">
                  Leaders & Experts
                </span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl leading-relaxed text-muted max-w-2xl mx-auto lg:mx-0 font-medium">
                KaaryaHire connects ambitious companies with exceptional talent. From rapid scaling to executive search, we are your strategic partner in growth.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-xl bg-secondary px-8 py-4 text-lg font-bold text-white shadow-lg shadow-teal-500/30 hover:bg-teal-700 hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-all duration-300"
                >
                  Start Hiring Now
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-8 py-4 text-lg font-bold text-gray-900 shadow-sm hover:bg-gray-50 hover:border-gray-300 hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5 text-gray-400 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                </Link>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 text-sm font-semibold text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="h-8 w-8 rounded-full ring-2 ring-white bg-gray-200"></div>
                    <div className="h-8 w-8 rounded-full ring-2 ring-white bg-gray-300"></div>
                    <div className="h-8 w-8 rounded-full ring-2 ring-white bg-gray-400"></div>
                  </div>
                  <span className="text-primary">500+ Roles Filled</span>
                </div>
                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                <span className="flex items-center text-primary"><CheckCircle2 className="h-5 w-5 text-teal-500 mr-2" /> 98% Client Retention</span>
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
              <h3 className="text-lg font-bold text-primary mb-2">Pan-India Reach</h3>
              <p className="text-sm text-muted leading-relaxed">
                We don't just find candidates; we map talent across every major hub in India to find the perfect regional fit.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-secondary/30">
              <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                <UserCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Quality First</h3>
              <p className="text-sm text-muted leading-relaxed">
                Our rigorous pre-screening ensures you interview only top 5% of relevant talent, saving you valuable time.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-secondary/30">
              <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Speed to Hire</h3>
              <p className="text-sm text-muted leading-relaxed">
                We close positions 40% faster than industry average through our proactive candidate pipelines.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-secondary/30">
              <div className="h-12 w-12 bg-blue-50 rounded-lg flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                <Scale className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Zero Compromise</h3>
              <p className="text-sm text-muted leading-relaxed">
                100% transparent and ethical recruitment process. No hidden clauses, just honest partnership.
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
            <Link href="/services" className="text-sm font-semibold text-secondary hover:text-teal-700">
              View All Services <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-16 sm:py-24 bg-slate-50 border-y border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Who We Help
            </h2>
            <p className="mt-4 text-lg text-muted">
              Whether you are building from scratch or scaling to new heights, we have the right talent for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Startups */}
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 text-center hover:border-teal-200 hover:shadow-md transition-all">
              <div className="mx-auto h-12 w-12 bg-teal-50 rounded-full flex items-center justify-center text-secondary mb-4">
                <Rocket className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">Startups</h3>
              <p className="text-sm text-muted">Building your founding team with high-energy talent.</p>
            </div>

            {/* Card 2: SMEs */}
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 text-center hover:border-teal-200 hover:shadow-md transition-all">
              <div className="mx-auto h-12 w-12 bg-teal-50 rounded-full flex items-center justify-center text-secondary mb-4">
                <Store className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary">SMEs</h3>
              <p className="text-sm text-muted">Reliable hiring to stabilize and grow your operations.</p>
            </div>

            {/* Card 3: Growing Enterprises */}
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 text-center hover:border-teal-200 hover:shadow-md transition-all">
              <div className="mx-auto h-12 w-12 bg-teal-50 rounded-full flex items-center justify-center text-secondary mb-4">
                <Landmark className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary">Enterprises</h3>
              <p className="text-sm text-muted">Volume hiring and niche executive search at scale.</p>
            </div>

            {/* Card 4: Fresh Graduates */}
            <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 text-center hover:border-teal-200 hover:shadow-md transition-all">
              <div className="mx-auto h-12 w-12 bg-teal-50 rounded-full flex items-center justify-center text-secondary mb-4">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-primary">Graduates</h3>
              <p className="text-sm text-muted">Connecting fresh talent with their dream first jobs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Credibility */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Reliability You Can Count On
            </h2>
            <p className="mt-4 text-lg text-muted">
              We build lasting partnerships through consistent delivery and unwavering ethics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Trust Item 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 text-secondary transform transition-transform hover:scale-110 hover:rotate-3 duration-300">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Uncompromising Quality</h3>
              <p className="text-muted leading-relaxed">
                We adhere to strict quality standards. We never submit a candidate we wouldn't hire ourselves.
              </p>
            </div>

            {/* Trust Item 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 text-secondary transform transition-transform hover:scale-110 hover:rotate-3 duration-300">
                <HeartHandshake className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Transparent Partnership</h3>
              <p className="text-muted leading-relaxed">
                Full visibility into our process. No hidden fees, no surprises—just honest collaboration.
              </p>
            </div>

            {/* Trust Item 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="h-16 w-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 text-secondary transform transition-transform hover:scale-110 hover:rotate-3 duration-300">
                <Scale className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Long-Term Success</h3>
              <p className="text-muted leading-relaxed">
                Our goal isn't just to fill a seat, but to find a candidate who drives retention and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-primary py-24 sm:py-32">
        {/* Abstract Background Design */}
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl mb-6">
            Stop Searching. <br className="hidden sm:block" />
            <span className="text-teal-400">Start Hiring.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-300 leading-relaxed font-light">
            Don't let open positions slow down your growth. Partner with KaaryaHire today and experience the difference specialist recruitment makes.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 text-lg font-bold text-primary shadow-xl hover:bg-teal-50 hover:scale-105 transition-all duration-300"
            >
              Get a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 text-secondary" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border border-gray-600 bg-transparent px-8 py-4 text-lg font-semibold text-white hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              Browse Services
            </Link>
          </div>
          <p className="mt-8 text-sm text-gray-400">
            No obligation. 100% Confidential.
          </p>
        </div>
      </section>
    </div>
  );
}
