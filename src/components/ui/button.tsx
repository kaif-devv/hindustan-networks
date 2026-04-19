import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-brand-600 text-white shadow-sm hover:bg-brand-700 focus-visible:ring-brand-500",
        destructive: "bg-red-600 text-white shadow-sm hover:bg-red-700",
        outline:
          "border-2 border-brand-300 dark:border-brand-500/40 bg-transparent text-brand-700 dark:text-brand-200 font-semibold hover:border-brand-500 hover:text-brand-700 dark:hover:text-brand-100 hover:bg-brand-50 dark:hover:bg-brand-500/10",
        secondary:
          "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700",
        ghost:
          "hover:bg-brand-50 dark:hover:bg-brand-500/10 text-slate-700 dark:text-slate-300",
        link: "text-brand-600 underline-offset-4 hover:underline",
        gradient:
          "bg-gradient-to-r from-brand-600 to-brand-400 text-white shadow-sm hover:shadow-md focus-visible:ring-brand-500",
        "outline-gradient":
          "border border-brand-300 bg-transparent text-brand-700 dark:text-brand-200 hover:bg-brand-50 dark:hover:bg-brand-500/10",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 px-3 text-xs",
        lg: "h-12 px-8 text-base",
        xl: "h-14 px-10 text-lg",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
