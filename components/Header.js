function Header() {
    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50" data-name="header" data-file="components/Header.js">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.href = 'index.html'}>
                        <div className="w-8 h-8 rounded bg-[var(--primary-color)] flex items-center justify-center text-white">
                            <i className="icon-star text-lg"></i>
                        </div>
                        <span className="font-bold text-xl tracking-tight text-[var(--text-main)]">TrustFlow</span>
                    </div>
                    
                    <nav className="hidden md:flex space-x-8">
                        <a href="#features" className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--primary-color)] transition-colors">Features</a>
                        <a href="#how-it-works" className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--primary-color)] transition-colors">How it Works</a>
                        <a href="#pricing" className="text-sm font-medium text-[var(--text-muted)] hover:text-[var(--primary-color)] transition-colors">Pricing</a>
                    </nav>

                    <div className="flex items-center gap-4">
                        <a href="dashboard.html" className="text-sm font-medium text-[var(--text-main)] hover:text-[var(--primary-color)] transition-colors">
                            Login
                        </a>
                        <a href="dashboard.html" className="btn-primary py-2 px-4 text-sm">
                            Get Started
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}