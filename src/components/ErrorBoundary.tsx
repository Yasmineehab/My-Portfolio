import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service here
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      // Fallback UI when an error occurs
      return (
        <div className="flex flex-col items-center justify-center min-h-[400px] text-center p-8 m-4 bg-card/40 backdrop-blur-xl border border-red-500/20 rounded-2xl">
          <h2 className="text-2xl font-bold font-sora text-red-400 mb-4">
            Oops! Something went wrong.
          </h2>
          <p className="text-gray-400 font-inter mb-6 max-w-md text-sm">
            We encountered a temporary issue while loading this section. 
          </p>
          <button
            className="px-6 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-300 rounded-lg font-jetbrains text-sm transition-all"
            onClick={() => this.setState({ hasError: false })}
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;