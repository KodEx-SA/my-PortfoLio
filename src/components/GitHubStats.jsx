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
        <Github className="w-5 h-5 text-green-400" />
        <h3 className="text-green-400 font-mono text-sm font-semibold">GitHub Activity</h3>
        <div className="flex-1 h-px bg-green-500/15" />
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-gray-500 hover:text-green-400 flex items-center gap-1 transition-colors"
        >
          @{username} <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {loading && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[0,1,2,3].map((i) => (
            <div key={i} className="h-20 rounded-xl bg-green-500/5 border border-green-500/10 animate-pulse" />
          ))}
        </div>
      )}

      {!loading && error && (
        <div className="text-center py-6 text-gray-600 font-mono text-xs border border-green-500/10 rounded-xl bg-green-500/3">
          Could not load GitHub stats — visit{" "}
          <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer" className="text-green-500/60 hover:text-green-400">
            github.com/{username}
          </a>
        </div>
      )}

      {!loading && !error && stats && (
        <>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { Icon: BookOpen, label: "Public Repos", value: stats.public_repos ?? "—", color: "text-green-400" },
              { Icon: Users,    label: "Followers",    value: stats.followers    ?? "—", color: "text-emerald-400" },
              { Icon: Star,     label: "Total Stars",  value: totalStars,                color: "text-teal-400" },
              { Icon: GitFork,  label: "Total Forks",  value: totalForks,                color: "text-green-300" },
            ].map((s) => (
              <div
                key={s.label}
                className="relative p-4 rounded-xl bg-green-500/5 border border-green-500/15 hover:border-green-500/35 hover:bg-green-500/8 transition-all duration-200 text-center group overflow-hidden"
              >
                <span className="absolute inset-0 bg-green-500/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <s.Icon className={"w-4 h-4 " + s.color + " mx-auto mb-2 relative z-10"} />
                <div className={"text-xl font-bold font-mono " + s.color + " relative z-10"}>{s.value}</div>
                <div className="text-[10px] text-gray-500 font-mono relative z-10">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="mb-6 rounded-xl overflow-hidden border border-green-500/15 bg-green-500/3 p-3">
            <img
              src={"https://ghchart.rshah.org/22c55e/" + username}
              alt="GitHub contribution chart"
              className="w-full h-auto opacity-80"
              onError={(e) => { if (e.target && e.target.parentElement) e.target.parentElement.style.display = "none"; }}
            />
          </div>

          {repos.length > 0 && (
            <>
              <p className="text-xs font-mono text-gray-600 mb-3 flex items-center gap-2">
                <Activity className="w-3 h-3 text-green-500/50" /> Recently updated repositories
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {repos.map((r) => (
                  <a
                    key={r.id}
                    href={r.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative p-4 rounded-xl bg-green-500/3 border border-green-500/12 hover:border-green-500/40 hover:bg-green-500/7 transition-all duration-200 group flex flex-col gap-2"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <Code2 className="w-3.5 h-3.5 text-green-500/60 flex-shrink-0" />
                        <span className="text-green-400 text-xs font-mono font-semibold truncate group-hover:text-green-300 transition-colors">
                          {r.name}
                        </span>
                      </div>
                      <ExternalLink className="w-3 h-3 text-gray-600 flex-shrink-0 group-hover:text-green-500/60 transition-colors" />
                    </div>
                    {r.description ? (
                      <p className="text-gray-500 text-[11px] font-mono leading-relaxed line-clamp-2">{r.description}</p>
                    ) : null}
                    <div className="flex items-center gap-3 mt-auto pt-1">
                      {r.language ? (
                        <span className="text-[10px] font-mono text-gray-600 flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-green-500/60 inline-block" />
                          {r.language}
                        </span>
                      ) : null}
                      <span className="text-[10px] font-mono text-gray-600 flex items-center gap-1 ml-auto">
                        <Star className="w-2.5 h-2.5" />{r.stargazers_count ?? 0}
                      </span>
                      <span className="text-[10px] font-mono text-gray-600 flex items-center gap-1">
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