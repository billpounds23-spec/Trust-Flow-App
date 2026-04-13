function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 mt-auto" data-name="footer" data-file="components/Footer.js">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-6 h-6 rounded bg-[var(--primary-color)] flex items-center justify-center text-white">
                                <i className="icon-star text-sm"></i>
                            </div>
                            <span className="font-bold text-lg tracking-tight text-[var(--text-main)]">TrustFlow</span>
                        </div>
                        <p className="text-[var(--text-muted)] text-sm mb-4 max-w-xs">
                            Automate your review collection process and turn happy clients into your best marketing channel.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-[var(--text-main)] mb-4">Product</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-[var(--text-muted)] hover:text-[var(--primary-color)]">Features</a></li>
                            <li><a href="#" className="text-sm text-[var(--text-muted)] hover:text-[var(--primary-color)]">Integrations</a></li>
                            <li><a href="#" className="text-sm text-[var(--text-muted)] hover:text-[var(--primary-color)]">Pricing</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-[var(--text-main)] mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-[var(--text-muted)] hover:text-[var(--primary-color)]">About Us</a></li>
                            <li><a href="#" className="text-sm text-[var(--text-muted)] hover:text-[var(--primary-color)]">Contact</a></li>
                            <li><a href="#" className="text-sm text-[var(--text-muted)] hover:text-[var(--primary-color)]">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-[var(--text-muted)]">
                        &copy; 2026 TrustFlow Inc. All rights reserved.
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="text-[var(--text-muted)] hover:text-[var(--primary-color)]">
                            <i className="icon-twitter"></i>
                        </a>
                        <a href="#" className="text-[var(--text-muted)] hover:text-[var(--primary-color)]">
                            <i className="icon-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}