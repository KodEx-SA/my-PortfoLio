import { useNavigate } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="bg-[var(--bg)] text-[var(--ink)] min-h-[calc(100vh-4rem)] flex items-center">
      <div className="max-w-2xl mx-auto px-5 text-center">
        <span className="eyebrow">{"// 404"}</span>
        <h1 className="mt-3 text-6xl md:text-7xl font-bold tracking-tight">
          Page not found
        </h1>
        <p className="mt-4 text-[var(--ink-muted)]">
          The page you're looking for doesn't exist or has moved.
        </p>

        <div className="mt-9 flex flex-wrap gap-3 justify-center">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--ink)] text-[var(--bg)] font-medium text-sm hover:bg-[var(--accent-ink)] transition-colors"
          >
            <Home className="w-4 h-4" />
            Back home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--border)] text-[var(--ink)] font-medium text-sm hover:border-[var(--ink-faint)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go back
          </button>
        </div>
      </div>
    </main>
  );
}
