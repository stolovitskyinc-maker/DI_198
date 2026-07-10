import { Component } from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Keep this even in production builds — makes real issues traceable in the console.
    console.error('Unhandled error caught by ErrorBoundary:', error, errorInfo);
  }

  handleReload = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
            <AlertTriangle className="h-7 w-7" />
          </span>
          <h1 className="mt-5 font-heading text-2xl font-bold tracking-tight">Something went wrong</h1>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            We hit an unexpected error while rendering this page. Reloading usually fixes it — if it keeps
            happening, please let us know what you were doing.
          </p>
          <button
            onClick={this.handleReload}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.03]"
          >
            <RefreshCcw className="h-4 w-4" /> Reload page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
