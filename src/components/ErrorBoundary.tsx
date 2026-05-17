import React from "react";

interface Props {
  children: React.ReactNode;
}

interface State {
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("Portfolio render error:", error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="size-full flex flex-col items-center justify-center gap-4 p-8 bg-gray-900 text-white text-center">
          <p className="text-xl font-semibold">Something went wrong loading the portfolio.</p>
          <p className="text-sm opacity-70 max-w-lg font-mono break-all">
            {this.state.error.message}
          </p>
          <button
            type="button"
            className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500"
            onClick={() => window.location.reload()}
          >
            Reload page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
