import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

const Card = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    data-slot="card"
    className={cn(
      "border-border bg-card text-card-foreground rounded-[1.75rem] border shadow-[0_24px_70px_-45px_rgba(50,39,28,0.45)]",
      className,
    )}
    {...props}
  />
);

const CardHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("flex flex-col gap-2 p-6", className)} {...props} />
);

const CardTitle = ({ className, ...props }: ComponentProps<"h3">) => (
  <h3
    className={cn("font-serif text-2xl tracking-tight", className)}
    {...props}
  />
);

const CardDescription = ({ className, ...props }: ComponentProps<"p">) => (
  <p
    className={cn("text-muted-foreground text-sm leading-6", className)}
    {...props}
  />
);

const CardContent = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("px-6 pb-6", className)} {...props} />
);

const CardFooter = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn("flex items-center px-6 pb-6", className)} {...props} />
);

export {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
