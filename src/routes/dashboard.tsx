import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Trophy,
  TrendingDown,
  ShieldAlert,
  ArrowRight,
  Building2,
  Check,
  X,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Analysis dashboard · ProcurePilot" },
      { name: "description", content: "AI-generated vendor recommendation, savings forecast, and risk assessment." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div>
          <p className="chip mb-3">
            <Sparkles className="h-3 w-3 text-emerald" />
            Analysis complete · 38 seconds
          </p>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Procurement Analysis: Cloud Analytics Platform Upgrade
          </h1>
          <p className="mt-2 text-muted-foreground">
            3 vendors compared · 142 pages parsed · 18 clauses audited
          </p>
        </div>
        <Link
          to="/decision"
          className="inline-flex items-center gap-2 rounded-full bg-emerald px-5 py-2.5 text-sm font-semibold text-emerald-foreground shadow-[0_10px_30px_-10px_oklch(0.72_0.16_158/0.6)] hover:scale-[1.02] transition-transform"
        >
          View full decision <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Top metric cards */}
      <div className="grid lg:grid-cols-3 gap-5">
        {/* Card 1 — Winner */}
        <div className="glass-card p-6 relative overflow-hidden">
          <div className="absolute top-4 right-4 chip">
            <Trophy className="h-3 w-3 text-emerald" /> Winner
          </div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            Recommended vendor
          </p>
          <div className="mt-3 flex items-center gap-3">
            <span className="h-10 w-10 rounded-lg bg-emerald/15 ring-1 ring-emerald/30 flex items-center justify-center">
              <Building2 className="h-5 w-5 text-emerald" />
            </span>
            <h3 className="text-lg font-semibold">CloudScale Metrics Inc.</h3>
          </div>
          <div className="mt-6">
            <div className="flex items-baseline justify-between">
              <p className="text-xs text-muted-foreground">Decision score</p>
              <p className="text-3xl font-semibold text-emerald tabular-nums">
                94<span className="text-sm text-muted-foreground">/100</span>
              </p>
            </div>
            <div className="mt-3 h-1.5 w-full rounded-full bg-surface-elevated overflow-hidden">
              <div className="h-full bg-emerald" style={{ width: "94%" }} />
            </div>
          </div>
        </div>

        {/* Card 2 — Savings */}
        <div className="glass-card p-6 relative overflow-hidden">
          <div className="absolute top-4 right-4 chip">
            <TrendingDown className="h-3 w-3 text-emerald" /> ROI
          </div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            Estimated annual savings
          </p>
          <p className="mt-6 text-5xl font-semibold text-emerald tabular-nums tracking-tight">
            €14,500
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1 text-emerald">
              <TrendingDown className="h-3 w-3" /> 15.2%
            </span>
            vs. baseline quote
          </div>
        </div>

        {/* Card 3 — Risk */}
        <div className="glass-card p-6 relative overflow-hidden">
          <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-amber/15 ring-1 ring-amber/30 px-2.5 py-1 text-[11px] font-semibold text-amber uppercase tracking-wider">
            <ShieldAlert className="h-3 w-3" /> Medium
          </div>
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            Risk assessment
          </p>
          <p className="mt-6 text-2xl font-semibold">2 flags · 0 critical blockers</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber shrink-0" />
              <span className="text-muted-foreground">
                Aggressive auto-renewal clause (§4.2)
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber shrink-0" />
              <span className="text-muted-foreground">
                API overage billed €0.05 / request
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Reasoning + Comparison */}
      <div className="grid lg:grid-cols-5 gap-5 mt-6">
        <div className="lg:col-span-3 glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">AI reasoning</h3>
            <span className="chip">Multi-agent consensus</span>
          </div>
          <ul className="space-y-3.5">
            {[
              {
                tone: "good" as const,
                text: "CloudScale offers a 15% lower base platform rate (€67k) compared to the median competitor quote (€79k) across an equivalent 50-seat tier.",
              },
              {
                tone: "good" as const,
                text: "SLA commits to 99.95% uptime with bilateral service credits — the strongest SLA among the three proposals.",
              },
              {
                tone: "warn" as const,
                text: "Contract §4.2 contains an aggressive 12-month auto-renewal clause requiring certified mail notice 60 days before expiration.",
              },
              {
                tone: "warn" as const,
                text: "API overages priced at €0.05 / request with no cap — projected exposure of €3,200/yr at current usage.",
              },
              {
                tone: "good" as const,
                text: "Data residency matches EU policy. SOC 2 Type II and ISO 27001 verified within last 90 days.",
              },
            ].map((r, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className={`mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full ring-1 shrink-0 ${
                    r.tone === "good"
                      ? "bg-emerald/15 ring-emerald/30 text-emerald"
                      : "bg-amber/15 ring-amber/30 text-amber"
                  }`}
                >
                  {r.tone === "good" ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
                </span>
                <p className="text-sm text-foreground/90 leading-relaxed">{r.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2 glass-card p-6">
          <h3 className="font-semibold mb-4">Vendor comparison</h3>
          <div className="space-y-3">
            <VendorRow name="CloudScale Metrics Inc." score={94} price="€67,000" winner />
            <VendorRow name="DataPulse Analytics" score={81} price="€74,500" />
            <VendorRow name="Insight Hub Pro" score={72} price="€81,500" />
          </div>
          <div className="mt-6 pt-5 border-t border-border/60 text-xs text-muted-foreground">
            Scoring weighted 40% price · 30% risk · 30% capability fit.
          </div>
        </div>
      </div>
    </div>
  );
}

function VendorRow({
  name,
  score,
  price,
  winner = false,
}: {
  name: string;
  score: number;
  price: string;
  winner?: boolean;
}) {
  return (
    <div
      className={`rounded-lg border p-4 ${
        winner ? "border-emerald/40 bg-emerald/5" : "border-border bg-surface/40"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {winner && <Trophy className="h-3.5 w-3.5 text-emerald" />}
          <p className="text-sm font-medium">{name}</p>
        </div>
        <p className="text-sm tabular-nums text-muted-foreground">{price}</p>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <div className="flex-1 h-1.5 rounded-full bg-surface-elevated overflow-hidden">
          <div
            className={winner ? "h-full bg-emerald" : "h-full bg-muted-foreground/50"}
            style={{ width: `${score}%` }}
          />
        </div>
        <span className={`text-xs tabular-nums font-semibold ${winner ? "text-emerald" : "text-muted-foreground"}`}>
          {score}
        </span>
      </div>
    </div>
  );
}
