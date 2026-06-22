import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Trophy,
  AlertTriangle,
  Copy,
  Check,
  Download,
  CheckCircle2,
  RefreshCw,
  Mail,
  FileText,
  ShieldCheck,
} from "lucide-react";

export const Route = createFileRoute("/decision")({
  head: () => ({
    meta: [
      { title: "Decision · CloudScale Metrics · ProcurePilot" },
      { name: "description", content: "Deep-dive procurement decision with hidden cost flags and negotiation suggestions." },
    ],
  }),
  component: Decision,
});

const emailTemplate = `Dear CloudScale Team,

We reviewed the proposal and are pleased with the platform fit and pricing. Before proceeding, we would like to align on two contract amendments:

1. Strike clause 4.2 (auto-renewal) — replace with a 30-day rolling notice or an explicit opt-in renewal at term end.
2. Cap API overage billing at €2,500 / year, with notification at 80% utilization.

Pending these revisions, we are ready to move to signature this week.

Best regards,
Procurement, [Company]`;

function Decision() {
  const [copied, setCopied] = useState(false);
  const [approved, setApproved] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(emailTemplate);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 pb-32">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <Link to="/dashboard" className="text-xs text-muted-foreground hover:text-foreground">
          ← Back to analysis
        </Link>
      </div>

      {/* Winner highlight */}
      <div className="glass-card p-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-60 pointer-events-none"
          style={{ background: "radial-gradient(circle at 20% 0%, color-mix(in oklab, var(--emerald) 22%, transparent), transparent 60%)" }}
        />
        <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald/15 ring-1 ring-emerald/30 px-3 py-1 text-xs font-semibold text-emerald uppercase tracking-wider">
              <Trophy className="h-3 w-3" /> Top recommendation
            </div>
            <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">
              CloudScale Metrics Inc.
            </h1>
            <p className="mt-2 text-muted-foreground max-w-xl">
              Strongest balance of price, capability fit, and contractual hygiene
              across the three reviewed vendors.
            </p>
          </div>
          <div className="flex gap-4 sm:gap-6">
            <Metric value="94" suffix="/100" label="Decision score" />
            <Metric value="€14.5k" label="Annual savings" emphasis />
            <Metric value="2" label="Risk flags" warn />
          </div>
        </div>
      </div>

      {/* Hidden costs */}
      <section className="mt-6">
        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-amber" />
          Hidden costs & contract traps
        </h2>
        <div className="rounded-2xl border border-amber/40 bg-amber/5 p-6">
          <div className="flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-amber/15 ring-1 ring-amber/30 flex items-center justify-center shrink-0">
              <AlertTriangle className="h-5 w-5 text-amber" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-amber">
                Critical trap detected
              </p>
              <p className="mt-2 text-foreground leading-relaxed">
                <span className="font-semibold">Section 4.2</span> contains a{" "}
                <span className="font-semibold">12-month auto-renewal clause</span>{" "}
                requiring <span className="font-semibold">certified mail notice exactly 60 days prior to expiration</span>.
                Missed window locks in another full year at the renewal rate.
              </p>
              <p className="mt-3 text-foreground leading-relaxed">
                Additionally flags <span className="font-semibold">unexpected API overages billed at €0.05 per request</span>{" "}
                with no cap — projected exposure of €3,200/yr at current usage trajectory.
              </p>

              <div className="mt-5 grid sm:grid-cols-2 gap-3">
                <TrapCard
                  label="Auto-renewal trigger"
                  value="60-day certified notice"
                  source="§4.2 · page 11"
                />
                <TrapCard
                  label="Overage rate"
                  value="€0.05 / API request"
                  source="Appendix B · page 23"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Negotiation suggestions */}
      <section className="mt-10">
        <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
          <Mail className="h-4 w-4 text-emerald" />
          Negotiation suggestions
        </h2>
        <div className="glass-card overflow-hidden">
          <div className="flex items-center justify-between px-5 py-3 border-b border-border/70 bg-surface/40">
            <div className="flex items-center gap-2 text-sm">
              <span className="chip">AI-drafted email</span>
              <span className="text-muted-foreground">To: legal@cloudscale.com</span>
            </div>
            <button
              onClick={copy}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-elevated hover:bg-accent px-3 py-1.5 text-xs font-medium transition-colors"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald" /> Copied
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" /> Copy
                </>
              )}
            </button>
          </div>
          <pre className="px-6 py-5 text-sm leading-relaxed text-foreground/90 whitespace-pre-wrap font-sans">
{emailTemplate}
          </pre>
          <div className="px-5 py-3 border-t border-border/70 bg-surface/30 flex flex-wrap gap-2 text-xs">
            <span className="chip">Tone: professional</span>
            <span className="chip">Leverage: medium</span>
            <span className="chip">Projected acceptance: 78%</span>
          </div>
        </div>
      </section>

      {/* Action footer */}
      <div className="fixed bottom-0 inset-x-0 z-30 border-t border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-sm">
            {approved ? (
              <span className="inline-flex items-center gap-2 text-emerald font-medium">
                <CheckCircle2 className="h-4 w-4" /> Approved · Routed to finance
              </span>
            ) : (
              <span className="text-muted-foreground">
                <span className="text-foreground font-medium">Human-in-the-loop:</span> review and approve to lock in recommendation.
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 flex-wrap justify-center">
            <button className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground hover:bg-surface-elevated transition-colors">
              <Download className="h-4 w-4" /> Export PDF / Excel
            </button>
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-foreground hover:bg-surface-elevated transition-colors"
            >
              <RefreshCw className="h-4 w-4" /> Compare again
            </Link>
            <button
              onClick={() => setApproved(true)}
              className="inline-flex items-center gap-2 rounded-full bg-emerald px-5 py-2.5 text-sm font-semibold text-emerald-foreground shadow-[0_10px_30px_-10px_oklch(0.72_0.16_158/0.6)] hover:scale-[1.02] transition-transform"
            >
              <CheckCircle2 className="h-4 w-4" />
              Approve recommendation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric({
  value,
  suffix,
  label,
  emphasis,
  warn,
}: {
  value: string;
  suffix?: string;
  label: string;
  emphasis?: boolean;
  warn?: boolean;
}) {
  const tone = warn ? "text-amber" : emphasis ? "text-emerald" : "text-foreground";
  return (
    <div className="text-right">
      <p className={`text-2xl sm:text-3xl font-semibold tabular-nums ${tone}`}>
        {value}
        {suffix && <span className="text-sm text-muted-foreground font-normal">{suffix}</span>}
      </p>
      <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{label}</p>
    </div>
  );
}

function TrapCard({ label, value, source }: { label: string; value: string; source: string }) {
  return (
    <div className="rounded-xl border border-border bg-background/60 p-4">
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <FileText className="h-3.5 w-3.5" />
        {source}
      </div>
      <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm font-semibold">{value}</p>
    </div>
  );
}
