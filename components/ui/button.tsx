import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-bold ring-offset-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F27125] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-[#F27125] text-white hover:bg-[#E8651E] active:scale-95 shadow-lg hover:shadow-xl",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 active:scale-95",
        outline:
          "border-2 border-[#F27125] text-[#F27125] hover:bg-[#F27125]/10 active:scale-95",
        secondary:
          "bg-gray-200 text-gray-900 hover:bg-gray-300 active:scale-95",
        ghost:
          "text-[#F27125] hover:bg-[#F27125]/10 active:scale-95",
        link:
          "text-[#F27125] underline-offset-4 hover:underline active:scale-95",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 px-3 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
