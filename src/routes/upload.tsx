import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  UploadCloud,
  FileText,
  FileSpreadsheet,
  FileType2,
  Loader2,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/upload")({
  head: () => ({
    meta: [
      { title: "Upload documents · ProcurePilot" },
      { name: "description", content: "Drop vendor quotes and contracts to start an AI procurement analysis." },
    ],
  }),
  component: UploadPage,
});

const steps = [
  "Parsing PDF structure...",
  "AI extracting line items...",
  "Benchmarking vendor pricing...",
  "Running risk-check multi-agents...",
  "Compiling decision dossier...",
];

function UploadPage() {
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const [stepIdx, setStepIdx] = useState(0);
  const [dragOver, setDragOver] = useState(false);

  useEffect(() => {
    if (!processing) return;
    const interval = setInterval(() => {
      setStepIdx((i) => Math.min(i + 1, steps.length - 1));
    }, 380);
    const t = setTimeout(() => navigate({ to: "/dashboard" }), 2000);
    return () => {
      clearInterval(interval);
      clearTimeout(t);
    };
  }, [processing, navigate]);

  const start = () => setProcessing(true);

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="text-center mb-10">
        <p className="chip mb-4">Step 1 of 3</p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Upload your procurement documents
        </h1>
        <p className="mt-3 text-muted-foreground">
          Quotes, RFP responses, contracts, comparison sheets. We handle the rest.
        </p>
      </div>

      {!processing ? (
        <div
          onClick={start}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            start();
          }}
          className={`group relative cursor-pointer rounded-2xl border-2 border-dashed transition-all p-12 sm:p-16 text-center bg-surface/40 hover:bg-surface/70 ${
            dragOver ? "border-emerald bg-emerald/5 scale-[1.01]" : "border-border"
          }`}
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald/10 ring-1 ring-emerald/25 mb-5 group-hover:scale-105 transition-transform">
            <UploadCloud className="h-7 w-7 text-emerald" />
          </div>
          <h2 className="text-lg font-semibold">Drop files here or click to browse</h2>
          <p className="mt-1.5 text-sm text-muted-foreground">
            Maximum 25MB per file · Encrypted in transit and at rest
          </p>

          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
            <FileChip icon={FileText} label=".pdf" color="text-rose-400" />
            <FileChip icon={FileType2} label=".docx" color="text-sky-400" />
            <FileChip icon={FileSpreadsheet} label=".xlsx" color="text-emerald" />
          </div>

          <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-emerald px-5 py-2.5 text-sm font-semibold text-emerald-foreground shadow-[0_10px_30px_-10px_oklch(0.72_0.16_158/0.6)]">
            Select files
          </button>
        </div>
      ) : (
        <ProcessingPanel stepIdx={stepIdx} />
      )}

      <p className="mt-8 text-center text-xs text-muted-foreground">
        By uploading you agree to ProcurePilot's data handling policy. Documents are never used to train models.
      </p>
    </div>
  );
}

function FileChip({
  icon: Icon,
  label,
  color,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  color: string;
}) {
  return (
    <div className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-elevated/70 px-3 py-1.5 text-xs font-medium">
      <Icon className={`h-4 w-4 ${color}`} />
      {label}
    </div>
  );
}

function ProcessingPanel({ stepIdx }: { stepIdx: number }) {
  return (
    <div className="glass-card p-8 sm:p-10">
      <div className="flex items-center gap-4 mb-8">
        <div className="relative">
          <div className="h-12 w-12 rounded-xl bg-emerald/10 ring-1 ring-emerald/25 flex items-center justify-center">
            <Loader2 className="h-5 w-5 text-emerald animate-spin" />
          </div>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Analyzing</p>
          <p className="font-semibold">CloudScale_Proposal_v3.pdf · 2 more files</p>
        </div>
      </div>

      <div className="space-y-3">
        {steps.map((s, i) => {
          const done = i < stepIdx;
          const active = i === stepIdx;
          return (
            <div
              key={s}
              className={`flex items-center gap-3 rounded-lg border px-4 py-3 transition-colors ${
                active
                  ? "border-emerald/40 bg-emerald/5"
                  : done
                    ? "border-border bg-surface/50"
                    : "border-border/60 bg-transparent"
              }`}
            >
              {done ? (
                <CheckCircle2 className="h-4 w-4 text-emerald shrink-0" />
              ) : active ? (
                <Loader2 className="h-4 w-4 text-emerald animate-spin shrink-0" />
              ) : (
                <span className="h-4 w-4 rounded-full border border-border shrink-0" />
              )}
              <span
                className={`text-sm ${
                  done ? "text-muted-foreground line-through" : active ? "text-foreground font-medium" : "text-muted-foreground"
                }`}
              >
                {s}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-8">
        <div className="h-1.5 w-full rounded-full bg-surface-elevated overflow-hidden">
          <div
            className="h-full bg-emerald transition-all duration-300 ease-out"
            style={{ width: `${((stepIdx + 1) / steps.length) * 100}%` }}
          />
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Redirecting to your analysis dashboard...
        </p>
      </div>
    </div>
  );
}
