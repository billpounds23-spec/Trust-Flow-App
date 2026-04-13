function HowItWorksSection() {
    const steps = [
        {
            number: "01",
            title: "Send the Request",
            description: "Share your unique TrustFlow link with clients after a service via email, SMS, or QR code.",
            icon: "icon-send"
        },
        {
            number: "02",
            title: "Smart Routing",
            description: "Happy clients are directed to leave public reviews, while unsatisfied ones provide private feedback.",
            icon: "icon-route"
        },
        {
            number: "03",
            title: "Grow Your Business",
            description: "Watch your average rating soar and attract more customers with a stellar online reputation.",
            icon: "icon-trending-up"
        }
    ];

    return (
        <section id="how-it-works" className="py-24 bg-white border-t border-gray-100" data-name="how-it-works" data-file="components/HowItWorks.js">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-[var(--text-main)] mb-4">How It Works</h2>
                    <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
                        A simple 3-step solution to automate your review collection and build a stronger online reputation.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-100 z-0"></div>
                    
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative z-10 text-center group">
                            <div className="w-24 h-24 mx-auto bg-white border-4 border-indigo-50 rounded-full flex items-center justify-center mb-6 shadow-sm transition-transform duration-300 group-hover:-translate-y-2">
                                <div className="w-16 h-16 bg-[var(--primary-color)] text-white rounded-full flex items-center justify-center">
                                    <i className={`${step.icon} text-2xl`}></i>
                                </div>
                            </div>
                            <div className="text-indigo-600 font-bold text-lg mb-2">{step.number}</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-gray-500 leading-relaxed">{step.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-20 max-w-4xl mx-auto">
                    <div className="rounded-xl shadow-2xl overflow-hidden border border-gray-200 bg-white">
                        <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="mx-auto bg-white text-xs text-gray-500 px-3 py-1 rounded-md shadow-sm border border-gray-200 flex items-center gap-2">
                                <i className="icon-lock w-3 h-3"></i> trustflow.io/dashboard
                            </div>
                        </div>
                        <div className="flex h-[450px] bg-gray-50 text-left">
                            <div className="w-48 bg-white border-r border-gray-200 p-4 hidden sm:block">
                                <div className="flex items-center gap-2 mb-8">
                                    <div className="w-6 h-6 rounded bg-[var(--primary-color)] flex items-center justify-center text-white">
                                        <i className="icon-star text-[10px]"></i>
                                    </div>
                                    <span className="font-bold text-sm text-gray-900">TrustFlow</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="bg-indigo-50 text-[var(--primary-color)] px-3 py-2 rounded-md text-xs font-medium flex items-center gap-2">
                                        <i className="icon-layout-dashboard"></i> Dashboard
                                    </div>
                                    <div className="text-gray-600 px-3 py-2 rounded-md text-xs font-medium flex items-center gap-2">
                                        <i className="icon-message-square"></i> Reviews
                                    </div>
                                    <div className="text-gray-600 px-3 py-2 rounded-md text-xs font-medium flex items-center gap-2">
                                        <i className="icon-send"></i> Campaigns
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 p-6 overflow-hidden flex flex-col">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Dashboard Overview</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                                        <div className="text-gray-500 text-xs mb-1">Average Rating</div>
                                        <div className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                                            4.8 <i className="icon-star text-yellow-400 text-sm fill-current"></i>
                                        </div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                                        <div className="text-gray-500 text-xs mb-1">Total Reviews</div>
                                        <div className="text-2xl font-bold text-gray-900">124</div>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                                        <div className="text-gray-500 text-xs mb-1">Capture Rate</div>
                                        <div className="text-2xl font-bold text-gray-900 text-green-600 flex items-center gap-1">
                                            24% <i className="icon-arrow-up text-xs"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden flex-1 flex flex-col">
                                    <div className="px-4 py-3 border-b border-gray-50 text-sm font-semibold text-gray-700 bg-white">Recent Reviews</div>
                                    <div className="p-4 space-y-4 overflow-hidden">
                                        <div className="flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-medium shrink-0">JD</div>
                                            <div>
                                                <div className="flex items-center gap-2"><span className="text-sm font-medium text-gray-900">John Doe</span><span className="text-xs text-gray-400">Today</span></div>
                                                <div className="flex text-yellow-400 text-[10px] my-1"><i className="icon-star fill-current"></i><i className="icon-star fill-current"></i><i className="icon-star fill-current"></i><i className="icon-star fill-current"></i><i className="icon-star fill-current"></i></div>
                                                <p className="text-xs text-gray-600">The team arrived on time and fixed my plumbing issue perfectly. Highly recommend!</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-medium shrink-0">AS</div>
                                            <div>
                                                <div className="flex items-center gap-2"><span className="text-sm font-medium text-gray-900">Alice Smith</span><span className="text-xs text-gray-400">Yesterday</span></div>
                                                <div className="flex text-yellow-400 text-[10px] my-1"><i className="icon-star fill-current"></i><i className="icon-star fill-current"></i><i className="icon-star fill-current"></i><i className="icon-star fill-current"></i><i className="icon-star text-gray-300"></i></div>
                                                <p className="text-xs text-gray-600">Very professional and quick service.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}