import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, Code2, Activity, ExternalLink, Users, BookOpen } from "lucide-react";

export default function GitHubStats({ username = "KodEx-SA" }) {
  const [stats, setStats] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function fetchGitHub() {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (cancelled) return;

        if (!userRes.ok) {
          setError(true);
          setLoading(false);
          return;
        }

        const userData = await userRes.json();
        if (cancelled) return;

        let reposData = [];
        try {
          const reposRes = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
          );
          if (!cancelled && reposRes.ok) {
            const json = await reposRes.json();
            reposData = Array.isArray(json) ? json.slice(0, 6) : [];
          }
        } catch {
          // repos fetch failed silently
        }

        if (!cancelled) {
          setStats(userData);
          setRepos(reposData);
          setLoading(false);
        }
      } catch {
        if (!cancelled) {
          setError(true);
          setLoading(false);
        }
      }
    }

    fetchGitHub();
    return () => { cancelled = true; };
  }, [username]);

  const totalStars = repos.reduce((acc, r) => acc + (Number(r?.stargazers_count) || 0), 0);
  const totalForks = repos.reduce((acc, r) => acc + (Number(r?.forks_count) || 0), 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-4"
    >
      <div className="flex items-center gap-3 mb-6">
        <Github className="w-5 h-5 text-[var(--accent)]" />
        <h3 className="text-[var(--accent)] text-sm font-semibold">GitHub Activity</h3>
        <div className="flex-1 h-px bg-[var(--border)]" />
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[var(--ink-muted)] hover:text-[var(--accent)] flex items-center gap-1 transition-colors"
        >
          @{username} <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {loading && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[0,1,2,3].map((i) => (
            <div key={i} className="h-20 rounded-xl bg-[var(--surface)] border border-[var(--border)] animate-pulse" />
          ))}
        </div>
      )}

      {!loading && error && (
        <div className="text-center py-6 text-[var(--ink-faint)] text-xs border border-[var(--border)] rounded-xl bg-[var(--surface)]">
          Could not load GitHub stats — visit{" "}
          <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" className="text-[var(--ink-faint)] hover:text-[var(--accent)]">
            github.com/{username}
          </a>
        </div>
      )}

      {!loading && !error && stats && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { Icon: BookOpen, label: "Public Repos", value: stats.public_repos ?? "—", color: "text-[var(--accent)]" },
              { Icon: Users,    label: "Followers",    value: stats.followers    ?? "—", color: "text-[var(--accent)]" },
              { Icon: Star,     label: "Total Stars",  value: totalStars,                color: "text-[var(--accent)]" },
              { Icon: GitFork,  label: "Total Forks",  value: totalForks,                color: "text-[var(--accent)]" },
            ].map((s) => (
              <div
                key={s.label}
                className="relative p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--ink-faint)] hover:bg-[var(--surface-2)] transition-all duration-200 text-center group overflow-hidden"
              >
                <s.Icon className={"w-4 h-4 " + s.color + " mx-auto mb-2 relative z-10"} />
                <div className={"text-xl font-bold " + s.color + " relative z-10"}>{s.value}</div>
                <div className="text-[10px] text-[var(--ink-muted)] relative z-10">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mb-6 rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] p-3">
            <img
              src={"https://ghchart.rshah.org/2247e0/" + username}
              alt="GitHub contribution chart"
              className="w-full h-auto opacity-80"
              onError={(e) => { if (e.target && e.target.parentElement) e.target.parentElement.style.display = "none"; }}
            />
          </div>

          {repos.length > 0 && (
            <>
              <p className="text-xs text-[var(--ink-faint)] mb-3 flex items-center gap-2">
                <Activity className="w-3 h-3 text-[var(--ink-faint)]" /> Recently updated repositories
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {repos.map((r) => (
                  <a
                    key={r.id}
                    href={r.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative p-4 rounded-xl bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--ink-faint)] hover:bg-[var(--surface-2)] transition-all duration-200 group flex flex-col gap-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <Code2 className="w-3.5 h-3.5 text-[var(--ink-faint)] flex-shrink-0" />
                        <span className="text-[var(--accent)] text-xs font-semibold truncate group-hover:text-[var(--accent)] transition-colors">
                          {r.name}
                        </span>
                      </div>
                      <ExternalLink className="w-3 h-3 text-[var(--ink-faint)] flex-shrink-0 group-hover:text-[var(--ink-faint)] transition-colors" />
                    </div>
                    {r.description ? (
                      <p className="text-[var(--ink-muted)] text-[11px] leading-relaxed line-clamp-2">{r.description}</p>
                    ) : null}
                    <div className="flex items-center gap-3 mt-auto pt-1">
                      {r.language ? (
                        <span className="text-[10px] text-[var(--ink-faint)] flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-[var(--accent)] inline-block" />
                          {r.language}
                        </span>
                      ) : null}
                      <span className="text-[10px] text-[var(--ink-faint)] flex items-center gap-1 ml-auto">
                        <Star className="w-2.5 h-2.5" />{r.stargazers_count ?? 0}
                      </span>
                      <span className="text-[10px] text-[var(--ink-faint)] flex items-center gap-1">
                        <GitFork className="w-2.5 h-2.5" />{r.forks_count ?? 0}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </>
          )}
        </>
      )}
    </motion.div>
  );
}