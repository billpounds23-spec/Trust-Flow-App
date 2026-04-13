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
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
          <div className="text-center bg-white p-6 rounded-lg shadow-sm w-full max-w-md">
            <h1 className="text-xl font-bold text-gray-900 mb-2">Oops!</h1>
            <p className="text-gray-600 mb-4">Something went wrong loading the form.</p>
            <button onClick={() => window.location.reload()} className="btn-primary">Reload</button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function CaptureApp() {
    const [step, setStep] = React.useState('rating'); // rating, positive_feedback, negative_feedback, success
    const [rating, setRating] = React.useState(0);
    const [hoverRating, setHoverRating] = React.useState(0);
    const [feedback, setFeedback] = React.useState('');
    const [authorName, setAuthorName] = React.useState('');
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [businessProfile, setBusinessProfile] = React.useState({ Name: "Acme Plumbing Services", GoogleReviewLink: "https://google.com" });

    React.useEffect(() => {
        trickleListObjects('business_profile', 1, true).then(res => {
            if (res.items && res.items.length > 0) {
                setBusinessProfile(res.items[0].objectData);
            }
        }).catch(console.error);
    }, []);

    const handleRatingSelect = (selectedRating) => {
        setRating(selectedRating);
        // Delay slightly for effect
        setTimeout(() => {
            if (selectedRating >= 4) {
                setStep('positive_feedback');
            } else {
                setStep('negative_feedback');
            }
        }, 400);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await trickleCreateObject('review', {
                AuthorName: authorName || 'Anonymous',
                Rating: rating,
                Feedback: feedback,
                Source: 'Direct'
            });
            setStep('success');
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleGoogleRedirect = async () => {
        try {
            await trickleCreateObject('review', {
                AuthorName: 'Anonymous',
                Rating: rating,
                Feedback: '',
                Source: 'Google'
            });
        } catch (e) { console.error(e); }
        window.open(businessProfile.GoogleReviewLink || 'https://google.com', '_blank');
        setStep('success');
    };

    const handleDirectSubmit = async () => {
        setIsSubmitting(true);
        try {
            await trickleCreateObject('review', {
                AuthorName: 'Anonymous',
                Rating: rating,
                Feedback: '',
                Source: 'Direct'
            });
            setStep('success');
        } catch (e) { console.error(e); }
        setIsSubmitting(false);
    };

    try {
        return (
            <div className="min-h-screen flex items-center justify-center p-4 sm:p-8" data-name="capture-app" data-file="capture-app.js">
                <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    
                    {/* Header Image/Logo Area */}
                    <div className="h-32 bg-indigo-600 relative flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-700 opacity-90"></div>
                        <div className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                            <i className="icon-building-2 text-2xl text-indigo-600"></i>
                        </div>
                    </div>

                    <div className="p-8">
                        {step === 'rating' && (
                            <div className="text-center animate-fade-in">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Rate your experience</h2>
                                <p className="text-gray-500 mb-8">How was your recent service with {businessProfile.Name}?</p>
                                
                                <div className="flex justify-center gap-2 mb-4">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <button
                                            key={star}
                                            className="focus:outline-none transition-transform hover:scale-110"
                                            onMouseEnter={() => setHoverRating(star)}
                                            onMouseLeave={() => setHoverRating(0)}
                                            onClick={() => handleRatingSelect(star)}
                                        >
                                            <i className={`icon-star text-5xl transition-colors ${
                                                (hoverRating || rating) >= star 
                                                    ? 'text-yellow-400 fill-current drop-shadow-sm' 
                                                    : 'text-gray-200'
                                            }`}></i>
                                        </button>
                                    ))}
                                </div>
                                <div className="h-6 text-sm font-medium text-gray-500">
                                    {hoverRating === 1 && "Poor"}
                                    {hoverRating === 2 && "Fair"}
                                    {hoverRating === 3 && "Good"}
                                    {hoverRating === 4 && "Very Good"}
                                    {hoverRating === 5 && "Excellent!"}
                                </div>
                            </div>
                        )}

                        {step === 'positive_feedback' && (
                            <div className="text-center animate-fade-in">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <i className="icon-party-popper text-2xl"></i>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">We're thrilled to hear that!</h2>
                                <p className="text-gray-600 mb-8">
                                    Since you had a great experience, it would mean the world to us if you could share it on Google to help others find us.
                                </p>
                                
                                <div className="space-y-4">
                                    <button onClick={handleGoogleRedirect} className="w-full py-4 bg-white border-2 border-gray-200 hover:border-blue-500 hover:bg-blue-50 text-gray-800 font-semibold rounded-xl flex items-center justify-center gap-3 transition-all shadow-sm">
                                        <i className="icon-search text-blue-500 text-xl"></i>
                                        Review us on Google
                                    </button>
                                    
                                    <button onClick={handleDirectSubmit} disabled={isSubmitting} className="w-full py-3 text-gray-500 font-medium hover:text-gray-800 transition-colors">
                                        {isSubmitting ? "Submitting..." : `No thanks, just submit my ${rating} stars`}
                                    </button>
                                </div>
                            </div>
                        )}

                        {step === 'negative_feedback' && (
                            <div className="animate-fade-in">
                                <div className="text-center mb-6">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-2">We want to make it right.</h2>
                                    <p className="text-gray-600 text-sm">
                                        We're sorry your experience wasn't 5-stars. Please tell us what went wrong so we can improve.
                                    </p>
                                </div>
                                
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Name (Optional)</label>
                                        <input 
                                            type="text"
                                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow mb-4"
                                            placeholder="John Doe"
                                            value={authorName}
                                            onChange={(e) => setAuthorName(e.target.value)}
                                        />
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Feedback</label>
                                        <textarea 
                                            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-shadow"
                                            rows="4"
                                            placeholder="What could we have done better?"
                                            value={feedback}
                                            onChange={(e) => setFeedback(e.target.value)}
                                            required
                                        ></textarea>
                                    </div>
                                    <button type="submit" disabled={isSubmitting} className="btn-primary">
                                        {isSubmitting ? (
                                            <React.Fragment>
                                                <i className="icon-loader animate-spin"></i> Submitting...
                                            </React.Fragment>
                                        ) : (
                                            "Send Private Feedback"
                                        )}
                                    </button>
                                </form>
                            </div>
                        )}

                        {step === 'success' && (
                            <div className="text-center animate-fade-in py-8">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <i className="icon-check text-4xl"></i>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
                                <p className="text-gray-600">Your feedback has been received. We appreciate your time.</p>
                            </div>
                        )}
                    </div>
                    
                    <div className="bg-gray-50 py-3 text-center border-t border-gray-100">
                        <p className="text-xs text-gray-400 flex items-center justify-center gap-1">
                            Powered by <i className="icon-star text-indigo-400 w-3 h-3"></i> <strong>TrustFlow</strong>
                        </p>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error('Capture form error:', error);
        return null;
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <CaptureApp />
  </ErrorBoundary>
);