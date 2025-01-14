import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import React from "react"

export const typographyVariants = cva("text-xl", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-6xl font-semibold tracking-wide lg:text-[80px]",
      h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      span: "text-sm lg:text-base font-semibold leading-7",
    },
    affects: {
      default: "",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
      removePMargin: "[&:not(:first-child)]:mt-0",
    },
  },
  defaultVariants: {
    variant: "h1",
    affects: "default",
  },
})

export interface TypographyProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
  VariantProps<typeof typographyVariants> { }

const Typography = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  ({ className, variant, affects, ...props }, ref) => {
    const Comp = variant || "p"
    return (
      <Comp
        className={cn(typographyVariants({ variant, affects, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Typography.displayName = "Typography"

export default Typography