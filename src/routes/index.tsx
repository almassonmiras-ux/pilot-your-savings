import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Upload,
  Brain,
  ShieldCheck,
  Sparkles,
  FileSearch,
  Eye,
  TrendingDown,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ProcurePilot — AI decision intelligence for procurement" },
      {
        name: "description",
        content:
          "ProcurePilot reads vendor quotes, flags contract traps, and uncovers hidden cost leakages before you sign.",
      },
      { property: "og:title", content: "ProcurePilot — Decision intelligence for procurement" },
      {
        property: "og:description",
        content:
          "The AI procurement operator that reviews quotes, contracts, and proposals in seconds.",
      },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div>
      {/* Hero */}
      <section className="relative grid-bg">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-28 sm:pt-28 sm:pb-36 text-center">
          <div className="inline-flex items-center gap-2 chip mb-6 animate-fade-in">
            <Sparkles className="h-3.5 w-3.5 text-emerald" />
            New · Multi-agent contract review v2
          </div>
          <h1 className="text-balance text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-gradient">
            Stop making company spending
            <br className="hidden sm:block" /> decisions blindly.
          </h1>
          <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
            Meet the AI procurement operator that reads your vendor quotes,
            flags contract traps, and uncovers hidden cost leakages in seconds.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/upload"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald px-5 py-3 text-sm font-semibold text-emerald-foreground shadow-[0_10px_30px_-10px_oklch(0.72_0.16_158/0.6)] transition-transform hover:scale-[1.02] active:scale-[0.99]"
            >
              Launch ProcurePilot
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-5 py-3 text-sm font-medium text-foreground hover:bg-surface-elevated transition-colors"
            >
              See a live analysis
            </Link>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-xs uppercase tracking-widest text-muted-foreground/70">
            <span>Trusted by procurement teams at</span>
            <span className="font-semibold text-muted-foreground">NORTHWIND</span>
            <span className="font-semibold text-muted-foreground">ATLAS GROUP</span>
            <span className="font-semibold text-muted-foreground">HELIX FIN</span>
            <span className="font-semibold text-muted-foreground">OPENCREST</span>
          </div>
        </div>

        {/* Floating preview card */}
        <div className="mx-auto max-w-5xl px-6 -mt-10 pb-20">
          <div className="glass-card p-2 sm:p-3">
            <div className="rounded-xl border border-border/70 bg-background/60 p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-emerald" />
                  Analysis · CloudScale Metrics Inc.
                </div>
                <span className="chip">Score 94 / 100</span>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <MiniStat icon={<TrendingDown className="h-4 w-4" />} label="Annual savings" value="€14,500" tone="emerald" />
                <MiniStat icon={<Eye className="h-4 w-4" />} label="Hidden clauses" value="2 flagged" tone="amber" />
                <MiniStat icon={<CheckCircle2 className="h-4 w-4" />} label="Decision" value="Approved" tone="emerald" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="chip mb-4">The problem</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
              Procurement decisions get made in spreadsheets, not strategy.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Teams spend weeks comparing vendor proposals, then sign contracts
              with auto-renewal traps, hidden overage fees, and inflated rate
              cards — leaking 6–18% of annual spend before anyone notices.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: FileSearch, title: "Buried clauses", body: "Auto-renewals, exclusivity, and overage triggers hide on page 47." },
              { icon: TrendingDown, title: "Quote inflation", body: "Vendors price 12–20% above market when buyers can't benchmark fast." },
              { icon: Eye, title: "No second opinion", body: "Legal & finance review in silos, weeks after the signature deadline." },
              { icon: ShieldCheck, title: "Audit exposure", body: "No paper trail of why a vendor was chosen — compliance nightmare." },
            ].map((c) => (
              <div key={c.title} className="glass-card p-5">
                <c.icon className="h-5 w-5 text-amber" />
                <h3 className="mt-3 font-semibold text-sm">{c.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-6 py-20 border-t border-border/60">
        <div className="text-center mb-14">
          <p className="chip mb-4">How it works</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            From PDF to procurement decision in 60 seconds.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              n: "01",
              icon: Upload,
              title: "Upload documents",
              body: "Drop in vendor quotes, RFP responses, contracts. PDF, DOCX, XLSX — anything procurement throws at you.",
            },
            {
              n: "02",
              icon: Brain,
              title: "Multi-agent AI analysis",
              body: "Specialist agents extract line items, benchmark pricing, and audit every clause against your policy.",
            },
            {
              n: "03",
              icon: ShieldCheck,
              title: "Secure savings",
              body: "Get a ranked recommendation, a risk dossier, and a ready-to-send negotiation email — human approved.",
            },
          ].map((step) => (
            <div key={step.n} className="glass-card p-6 relative overflow-hidden">
              <div className="absolute -top-6 -right-4 text-7xl font-semibold text-foreground/5 select-none">
                {step.n}
              </div>
              <div className="relative">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald/10 ring-1 ring-emerald/20">
                  <step.icon className="h-5 w-5 text-emerald" />
                </span>
                <h3 className="mt-4 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/upload"
            className="inline-flex items-center gap-2 rounded-full bg-emerald px-5 py-3 text-sm font-semibold text-emerald-foreground shadow-[0_10px_30px_-10px_oklch(0.72_0.16_158/0.6)] hover:scale-[1.02] transition-transform"
          >
            Try it now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function MiniStat({
  icon,
  label,
  value,
  tone,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  tone: "emerald" | "amber";
}) {
  const toneCls =
    tone === "emerald"
      ? "text-emerald bg-emerald/10 ring-emerald/20"
      : "text-amber bg-amber/10 ring-amber/20";
  return (
    <div className="rounded-lg border border-border/70 bg-surface/60 p-4">
      <div className="flex items-center gap-2">
        <span className={`inline-flex h-7 w-7 items-center justify-center rounded-md ring-1 ${toneCls}`}>
          {icon}
        </span>
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
      <p className={`mt-3 text-xl font-semibold ${tone === "emerald" ? "text-emerald" : "text-amber"}`}>
        {value}
      </p>
    </div>
  );
}
