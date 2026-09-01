import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const Badge = ({ className, ...props }: ComponentProps<"span">) => (
  <span
    className={cn(
      "border-border bg-background/70 text-muted-foreground inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
      className,
    )}
    {...props}
  />
);

export { Badge };
