import Link from "next/link";
import { ArrowRight, CheckCircle2, Users, Building2, TrendingUp } from "lucide-react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KaaryaHire - India\'s Premier Recruitment Agency',
  description: 'Connecting top talent with leading businesses across India. Expert recruitment for IT, Non-IT, and Executive roles.',
};

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
              Empowering Businesses with <span className="text-secondary">Top Talent</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
              KaaryaHire connects forward-thinking companies with exceptional professionals across India.
              We bridge the gap between ambition and achievement.
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
              <Link
                href="/services"
                className="rounded-md bg-secondary px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className="group flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-semibold text-gray-900 shadow-sm hover:bg-gray-50 hover:border-gray-400 transition-all"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 -z-10 translate-x-1/3 -translate-y-1/4 transform opacity-10">
          <svg viewBox="0 0 1024 1024" className="h-[64rem] w-[64rem]" aria-hidden="true">
            <circle cx="512" cy="512" r="512" fill="url(#gradient)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
                <stop stopColor="#2563eb" />
                <stop offset="1" stopColor="#0f172a" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Why Choose KaaryaHire */}
      <section className="bg-slate-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Why Partner with KaaryaHire?
            </h2>
            <p className="mt-4 text-lg text-muted">
              We bring precision, speed, and reliability to your recruitment process.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-primary">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                    <Building2 className="h-6 w-6 text-secondary" aria-hidden="true" />
                  </div>
                  Pan-India Network
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted">
                  <p className="flex-auto">
                    Access a vast database of pre-screened candidates from metropolitans to tier-2 cities across India.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-primary">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                    <Users className="h-6 w-6 text-secondary" aria-hidden="true" />
                  </div>
                  Diverse Talent Pool
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted">
                  <p className="flex-auto">
                    From fresh graduates bringing new energy to seasoned industry veterans, we find the right fit for every role.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-primary">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                    <TrendingUp className="h-6 w-6 text-secondary" aria-hidden="true" />
                  </div>
                  Fast Turnaround
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-muted">
                  <p className="flex-auto">
                    Our rigorous screening process ensures you see only the most relevant candidates, saving you time and resources.
                  </p>
                </dd>
              </div>
            </dl>
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
