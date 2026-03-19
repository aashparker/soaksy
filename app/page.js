"use client"

import Link from 'next/link';

export default function Home() {
    return (
        <main className="w-full bg-slate-50 min-h-screen">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 px-6 sm:px-8 lg:px-12 py-6">
                <span className="text-xl text-black font-black tracking-tight">
                    SOAKSY
                </span>
            </header>

            {/* Hero Section */}
            <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
                {/* Subtle Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}/>
                </div>

                {/* Gradient Orbs */}
                <div
                    className="absolute top-20 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"/>
                <div
                    className="absolute top-40 right-10 w-72 h-72 bg-slate-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"/>
                <div
                    className="absolute -bottom-8 left-1/2 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"/>

                {/* Content Container */}
                <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center pt-20">

                    {/* Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-8 animate-fade-in-up">
                        <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"/>
                        <span className="text-sm font-semibold text-slate-700">Professional Car Care</span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-slate-900 mb-6 leading-[1.1] tracking-tight animate-fade-in-up animation-delay-150">
                        Expert Detailing
                        <span className="block text-teal-700 mt-2">Delivered to You</span>
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium animate-fade-in-up animation-delay-300">
                        Premium washing and detailing services scheduled in seconds.
                        Exceptional results, every time.
                    </p>

                    {/* CTA Buttons */}
                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-450">
                        <Link
                            href="/m/book"
                            className="group px-8 py-4 bg-teal-700 hover:bg-teal-800 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-teal-700/25 hover:shadow-xl hover:shadow-teal-700/30 hover:-translate-y-0.5 flex items-center gap-2"
                        >
                            Book Now
                            <svg
                                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                      d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                            </svg>
                        </Link>
                        <button
                            className="px-8 py-4 border-2 border-slate-300 text-slate-700 hover:border-teal-700 hover:text-teal-700 font-bold rounded-xl transition-all duration-300 hover:bg-teal-50"
                        >
                            Our Services
                        </button>
                    </div>

                    {/* Stats */}
                    <div
                        className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto animate-fade-in-up animation-delay-600">
                        <div className="text-center">
                            <div className="text-3xl font-black text-slate-900">15min</div>
                            <div className="text-sm font-semibold text-slate-500 mt-1">Express Available</div>
                        </div>
                        <div className="text-center border-x border-slate-200">
                            <div className="text-3xl font-black text-slate-900">500+</div>
                            <div className="text-sm font-semibold text-slate-500 mt-1">Vehicles Served</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-black text-slate-900">4.9</div>
                            <div className="text-sm font-semibold text-slate-500 mt-1">Client Rating</div>
                        </div>
                    </div>
                </div>

                {/* Bottom Gradient Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent"/>
            </section>

            {/* Styles */}
            <style jsx global>{`
                @keyframes blob {
                    0% {
                        transform: translate(0px, 0px) scale(1);
                    }
                    33% {
                        transform: translate(30px, -50px) scale(1.1);
                    }
                    66% {
                        transform: translate(-20px, 20px) scale(0.9);
                    }
                    100% {
                        transform: translate(0px, 0px) scale(1);
                    }
                }

                .animate-blob {
                    animation: blob 7s infinite;
                }

                .animation-delay-2000 {
                    animation-delay: 2s;
                }

                .animation-delay-4000 {
                    animation-delay: 4s;
                }

                @keyframes fade-in-up {
                    0% {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.6s ease-out forwards;
                    opacity: 0;
                }

                .animation-delay-150 {
                    animation-delay: 150ms;
                }

                .animation-delay-300 {
                    animation-delay: 300ms;
                }

                .animation-delay-450 {
                    animation-delay: 450ms;
                }

                .animation-delay-600 {
                    animation-delay: 600ms;
                }
            `}</style>
        </main>
    )
}
