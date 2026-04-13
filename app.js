class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-6">We encountered an unexpected error.</p>
            <button onClick={() => window.location.reload()} className="btn-primary">
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function HeroSection() {
    return (
        <section className="relative pt-20 pb-32 overflow-hidden" data-name="hero" data-file="app.js">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-[var(--primary-color)] text-sm font-medium mb-8">
                    <span className="flex h-2 w-2 rounded-full bg-[var(--primary-color)]"></span>
                    Smart Review Routing Built-In
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold text-[var(--text-main)] tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
                    Turn Happy Clients Into <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary-color)] to-[var(--secondary-color)]">
                        Your Best Marketing
                    </span>
                </h1>
                <p className="text-lg text-[var(--text-muted)] mb-10 max-w-2xl mx-auto">
                    Automatically capture 5-star reviews on auto-pilot. Route unhappy clients to private feedback, and push your best testimonials directly to Google and your website.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a href="dashboard.html" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto">
                        Start Free Trial
                        <i className="icon-arrow-right"></i>
                    </a>
                    <a href="capture.html" target="_blank" className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto">
                        View Demo Form
                    </a>
                </div>
                
                <div className="mt-16 mb-12 relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
                    <img src="https://app.trickle.so/storage/tasks/storage/generated_images/1775667790602.png" alt="Happy service worker with 5-star reviews" className="w-full max-h-[700px] object-contain" />
                </div>

                <div className="relative max-w-5xl mx-auto">
                    <div className="rounded-xl shadow-2xl overflow-hidden border border-gray-200 bg-white">
                        <div className="bg-gray-100 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="mx-auto bg-white text-xs text-gray-400 px-3 py-1 rounded-md shadow-sm border border-gray-200 flex items-center gap-2">
                                <i className="icon-lock w-3 h-3"></i> trustflow.io/demo
                            </div>
                        </div>
                        <div className="p-8 bg-gray-50 flex items-center justify-center">
                            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 w-full max-w-md text-center">
                                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="icon-building-2 text-2xl"></i>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Acme Plumbing Services</h3>
                                <p className="text-gray-500 text-sm mb-6">How was your recent service experience?</p>
                                <div className="flex justify-center gap-2 mb-6">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <i key={i} className="icon-star text-3xl text-yellow-400"></i>
                                    ))}
                                </div>
                                <div className="h-2 bg-gray-100 rounded-full w-full overflow-hidden">
                                    <div className="h-full bg-[var(--primary-color)] w-3/4"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FeatureSection() {
    const features = [
        {
            icon: 'icon-wand-sparkles',
            title: 'Automated Campaigns',
            description: 'Connect your CRM or booking software to automatically send review requests via Email or SMS when a job is marked complete.'
        },
        {
            icon: 'icon-route',
            title: 'Smart Routing',
            description: '4 and 5-star reviews are prompted to share on Google/Yelp. 1 to 3-star reviews are captured privately to resolve issues.'
        },
        {
            icon: 'icon-chart-bar',
            title: 'Actionable Analytics',
            description: 'Track your capture rate, average rating over time, and team performance from a single centralized dashboard.'
        }
    ];

    return (
        <section id="features" className="py-24 bg-white" data-name="features" data-file="app.js">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-[var(--text-main)] mb-4">Everything you need to build trust</h2>
                    <p className="text-[var(--text-muted)] max-w-2xl mx-auto">Set it up once and let our system automatically build your online reputation while you focus on delivering great service.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                            <div className="w-12 h-12 rounded-lg bg-[var(--primary-color)] text-white flex items-center justify-center mb-6">
                                <i className={`${feature.icon} text-xl`}></i>
                            </div>
                            <h3 className="text-xl font-bold text-[var(--text-main)] mb-3">{feature.title}</h3>
                            <p className="text-[var(--text-muted)] leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function App() {
  try {
    return (
      <div className="flex flex-col min-h-screen" data-name="landing-app" data-file="app.js">
        <Header />
        <main className="flex-grow">
            <HeroSection />
            <FeatureSection />
            <HowItWorksSection />
            <PricingSection />
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);