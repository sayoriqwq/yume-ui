'use client'

import type { ReactNode } from 'react'
import { PopoverRoot } from '@yume-ui/primitives'
import { TooltipProvider } from './context'

export interface TooltipRootProps {
  children: ReactNode
  className?: string
}

export function TooltipRoot({ children, className }: TooltipRootProps) {
  return (
    <PopoverRoot className={className} mode="hover">
      <TooltipProvider>{children}</TooltipProvider>
    </PopoverRoot>
  )
}
