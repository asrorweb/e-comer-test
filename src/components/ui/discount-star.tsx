import * as React from "react";
import { cn } from "@/lib/utils";

const DiscountStar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("starburst", className)} {...props} />
));
DiscountStar.displayName = "DiscountStar";

export { DiscountStar };
