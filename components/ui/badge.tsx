import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-bold transition-colors",
  {
    variants: {
      variant: {
        default:
          "border border-[#F27125]/30 bg-[#F27125]/10 text-[#F27125]",
        secondary:
          "border border-gray-300 bg-gray-100 text-gray-800",
        success:
          "border border-green-300 bg-green-100 text-green-800",
        warning:
          "border border-yellow-300 bg-yellow-100 text-yellow-800",
        destructive:
          "border border-red-300 bg-red-100 text-red-800",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
