import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const Separator = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    role="separator"
    className={cn("bg-border h-px w-full", className)}
    {...props}
  />
);

export { Separator };
