import { ChevronDown, ExternalLink } from "lucide-react";

// Fictional application, presented with the Job Tracker's card layout.
export const JobTrackerPreview = () => (
  <div className="tracker-preview mt-auto w-full max-w-sm font-sans text-xs">
    <div className="border-border bg-card overflow-hidden rounded-xl border shadow-sm">
      <div className="border-border flex items-center gap-2 border-b px-3 py-2">
        <span className="tracker-company-monogram flex size-6 shrink-0 items-center justify-center rounded-md font-semibold">
          O
        </span>
        <span className="text-sm font-semibold">Orbit Labs</span>
      </div>
      <div className="space-y-2 p-3">
        <p className="text-sm font-medium">Frontend Engineer</p>
        <p className="text-muted-foreground tabular-nums">$140,000–$180,000</p>
        <p className="text-muted-foreground">Remote · United States</p>
        <div className="flex items-center justify-between gap-2">
          <span
            className="tracker-status inline-flex items-center gap-1 rounded-full border px-2 py-1 font-medium"
            data-status="interviewing"
          >
            Interviewing
            <ChevronDown aria-hidden="true" className="size-3" />
          </span>
          <ExternalLink
            aria-hidden="true"
            className="text-muted-foreground size-3"
          />
        </div>
        <p className="text-muted-foreground">Applied: Sep 12, 2026</p>
      </div>
    </div>
  </div>
);
