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
            <button onClick={() => window.location.reload()} className="btn-primary">Reload Dashboard</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function Sidebar() {
    const navItems = [
        { icon: 'icon-layout-dashboard', label: 'Dashboard', active: true },
        { icon: 'icon-message-square', label: 'Reviews', active: false },
        { icon: 'icon-send', label: 'Campaigns', active: false },
        { icon: 'icon-settings', label: 'Settings', active: false },
    ];

    return (
        <div className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 flex flex-col" data-name="sidebar" data-file="dashboard-app.js">
            <div className="h-16 flex items-center px-6 border-b border-gray-100 cursor-pointer" onClick={() => window.location.href = 'index.html'}>
                <div className="w-6 h-6 rounded bg-[var(--primary-color)] flex items-center justify-center text-white mr-2">
                    <i className="icon-star text-xs"></i>
                </div>
                <span className="font-bold text-lg tracking-tight">TrustFlow</span>
            </div>
            <div className="p-4 flex-grow">
                <nav className="space-y-1">
                    {navItems.map((item, idx) => (
                        <a key={idx} href="#" className={`flex items-center px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${item.active ? 'bg-indigo-50 text-[var(--primary-color)]' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}>
                            <i className={`${item.icon} mr-3 text-lg ${item.active ? 'text-[var(--primary-color)]' : 'text-gray-400'}`}></i>
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
            <div className="p-4 border-t border-gray-100">
                <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm">TF</div>
                    <div className="ml-3">
                        <p className="text-sm font-medium text-gray-700">Business Owner</p>
                        <p className="text-xs text-gray-500 truncate w-40">TrustFlow</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatCard({ title, value, trend, icon, colorClass }) {
    return (
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm" data-name="stat-card" data-file="dashboard-app.js">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-gray-500">{title}</h3>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colorClass}`}>
                    <i className={`${icon} text-lg`}></i>
                </div>
            </div>
            <div className="flex items-baseline">
                <p className="text-2xl font-bold text-gray-900">{value}</p>
                {trend && (
                    <span className={`ml-2 text-sm font-medium ${trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {trend}
                    </span>
                )}
            </div>
        </div>
    );
}

function DashboardApp() {
    const [copied, setCopied] = React.useState(false);
    const [reviews, setReviews] = React.useState([]);
    const [stats, setStats] = React.useState({ avg: 0, total: 0 });
    const [businessName, setBusinessName] = React.useState("Loading...");
    
    const captureLink = window.location.origin + '/capture.html';

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const profileRes = await trickleListObjects('business_profile', 1, true);
                if (profileRes.items && profileRes.items.length > 0) {
                    setBusinessName(profileRes.items[0].objectData.Name);
                }

                const reviewRes = await trickleListObjects('review', 100, true);
                if (reviewRes.items) {
                    const formattedReviews = reviewRes.items.map(item => {
                        const date = new Date(item.createdAt);
                        const now = new Date();
                        const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
                        let dateStr = diffDays === 0 ? 'Today' : diffDays === 1 ? 'Yesterday' : `${diffDays} days ago`;
                        
                        return {
                            id: item.objectId,
                            author: item.objectData.AuthorName || 'Anonymous',
                            rating: item.objectData.Rating,
                            text: item.objectData.Feedback || '',
                            source: item.objectData.Source || 'Direct',
                            date: dateStr
                        };
                    });
                    setReviews(formattedReviews);
                    
                    if (formattedReviews.length > 0) {
                        const total = formattedReviews.length;
                        const sum = formattedReviews.reduce((acc, curr) => acc + curr.rating, 0);
                        setStats({ avg: (sum / total).toFixed(1), total });
                    }
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(captureLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    try {
        return (
            <div className="min-h-screen bg-[var(--bg-color)] pl-64" data-name="dashboard-layout" data-file="dashboard-app.js">
                <Sidebar />
                
                <div className="p-8 max-w-6xl mx-auto">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                            <p className="text-sm text-gray-500">Welcome back. Here's what's happening for {businessName}.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center bg-white border border-gray-300 rounded-md shadow-sm overflow-hidden">
                                <div className="px-3 py-2 bg-gray-50 border-r border-gray-300 text-sm text-gray-500 font-mono">
                                    {captureLink}
                                </div>
                                <button onClick={copyToClipboard} className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                                    <i className={copied ? "icon-check text-green-600" : "icon-copy"}></i>
                                    {copied ? 'Copied!' : 'Copy Link'}
                                </button>
                            </div>
                            <button className="btn-primary" onClick={() => window.open('capture.html', '_blank')}>
                                <i className="icon-external-link"></i> View Form
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <StatCard title="Average Rating" value={stats.avg} icon="icon-star" colorClass="bg-yellow-100 text-yellow-600" />
                        <StatCard title="Total Reviews" value={stats.total} icon="icon-message-square" colorClass="bg-blue-100 text-blue-600" />
                        <StatCard title="Capture Rate" value="24%" icon="icon-chart-line" colorClass="bg-green-100 text-green-600" />
                    </div>

                    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                            <h2 className="text-lg font-semibold text-gray-900">Recent Reviews</h2>
                            <button className="text-sm text-[var(--primary-color)] font-medium hover:text-[var(--primary-hover)]">View All</button>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {reviews.length === 0 ? (
                                <div className="p-8 text-center text-gray-500">No reviews yet.</div>
                            ) : reviews.map(review => (
                                <div key={review.id} className="p-6 flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 font-medium shrink-0">
                                        {review.author.charAt(0).toUpperCase()}
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className="font-medium text-gray-900">{review.author}</h4>
                                            <span className="text-xs text-gray-500">{review.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => (
                                                    <i key={i} className={`icon-star text-sm ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-200'}`}></i>
                                                ))}
                                            </div>
                                            <span className="text-xs px-2 py-0.5 rounded bg-gray-100 text-gray-600">{review.source}</span>
                                        </div>
                                        <p className="text-sm text-gray-600">{review.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Dashboard error:', error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <DashboardApp />
  </ErrorBoundary>
);