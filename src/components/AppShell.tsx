import { Link, Outlet } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import type { ReactNode } from "react";

const navItems = [
  { to: "/", label: "Overview" },
  { to: "/upload", label: "Upload" },
  { to: "/dashboard", label: "Analysis" },
  { to: "/decision", label: "Decision" },
] as const;

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 border-b border-border/70 backdrop-blur-xl bg-background/70">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald/15 ring-1 ring-emerald/30">
              <Sparkles className="h-4 w-4 text-emerald" strokeWidth={2.25} />
            </span>
            <span className="text-[15px] font-semibold tracking-tight">
              ProcurePilot
            </span>
            <span className="chip ml-2 hidden sm:inline-flex">Beta</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 rounded-full border border-border/70 bg-surface/60 p-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="px-3.5 py-1.5 text-[13px] font-medium text-muted-foreground rounded-full transition-colors hover:text-foreground data-[status=active]:bg-surface-elevated data-[status=active]:text-foreground data-[status=active]:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
                activeOptions={{ exact: true }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <span className="hidden sm:inline-flex chip">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald animate-pulse" />
              Live demo
            </span>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border/70 mt-12">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© 2026 ProcurePilot — Decision intelligence for procurement.</p>
          <p>SOC 2 · GDPR · Human-in-the-loop</p>
        </div>
      </footer>
    </div>
  );
}

export function ShellOutlet() {
  return (
    <AppShell>
      <Outlet />
    </AppShell>
  );
}
