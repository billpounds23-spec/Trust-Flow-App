function PricingSection() {
    const features = [
        'Unlimited review captures',
        'Smart review routing',
        'Dashboard analytics',
        'Custom business profile',
        'Google & Yelp integration'
    ];

    return (
        <section id="pricing" className="py-24 bg-gray-50 border-t border-gray-100" data-name="pricing" data-file="components/Pricing.js">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-[var(--text-main)] mb-4">Simple, Transparent Pricing</h2>
                    <p className="text-[var(--text-muted)] max-w-2xl mx-auto">
                        Start capturing 5-star reviews today with our affordable monthly plan. No hidden fees.
                    </p>
                </div>
                
                <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden transition-transform hover:-translate-y-1 duration-300">
                    <div className="p-8 text-center border-b border-gray-100 relative">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">Pro Plan</h3>
                        <div className="flex justify-center items-baseline gap-1 mb-4">
                            <span className="text-5xl font-extrabold text-gray-900">$9.99</span>
                            <span className="text-gray-500 font-medium">/month</span>
                        </div>
                        <p className="text-gray-500">Everything you need to automate and manage your reviews.</p>
                    </div>
                    <div className="p-8 bg-white">
                        <ul className="space-y-4 mb-8">
                            {features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                                        <i className="icon-check text-xs"></i>
                                    </div>
                                    <span className="text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="dashboard.html" className="btn-primary w-full py-4 text-lg">
                            Get Started Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}