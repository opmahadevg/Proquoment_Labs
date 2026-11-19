import * as React from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCw } from "lucide-react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class RouteErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Route navigation / chunk resolution error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          role="alert"
          className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20 space-y-6"
        >
          <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div className="space-y-2 max-w-md">
            <h2 className="text-xl font-bold text-white tracking-tight">
              Unable to load page view
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We encountered a network or version transition while loading this route chunk.
              Please reload to fetch the latest assets.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              onClick={this.handleReload}
              className="bg-primary text-white hover:bg-primary/90 font-medium"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              <span>Reload page</span>
            </Button>
            <Button
              variant="outline"
              onClick={this.handleReset}
              className="border-white/10 text-zinc-300 hover:text-white"
            >
              Retry
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default RouteErrorBoundary;
