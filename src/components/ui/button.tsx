import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-amber-500 text-gray-900 shadow hover:bg-amber-600 hover:shadow-amber-500/25 hover:shadow-lg focus-visible:ring-amber-500',
        destructive:
          'bg-red-600 text-white shadow-sm hover:bg-red-700',
        outline:
          'border-2 border-gray-900 dark:border-gray-400 bg-transparent text-gray-900 dark:text-gray-200 font-bold hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-500/10',
        secondary:
          'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700',
        ghost:
          'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300',
        link: 'text-amber-600 underline-offset-4 hover:underline',
        gradient:
          'bg-gradient-to-r from-amber-500 to-yellow-400 text-gray-900 shadow hover:shadow-amber-500/30 hover:shadow-lg hover:scale-105 focus-visible:ring-amber-500',
        'outline-gradient':
          'border border-amber-500/40 bg-transparent text-amber-600 dark:text-amber-400 hover:bg-amber-500/10',
      },
      size: {
        default: 'h-10 px-5 py-2',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-12 px-8 text-base',
        xl: 'h-14 px-10 text-lg',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
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
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
