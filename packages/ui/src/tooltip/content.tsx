'use client'

import type { ReactNode } from 'react'
import type { Offset, PhysicalPlacement } from '@yume-ui/primitives'
import { PopoverContent, cn } from '@yume-ui/primitives'

export interface TooltipContentProps {
  children: ReactNode
  className?: string
  placement?: PhysicalPlacement
  anchorsVisible?: 'no-overflow' | 'anchors-visible'
  duration?: number
  offset?: Offset
  withoutBg?: boolean
}

export function TooltipContent({ children, className, placement = 'bottom', anchorsVisible, duration = 200, offset, withoutBg }: TooltipContentProps) {
  return (
    <PopoverContent
      role="tooltip"
      className={cn('absolute', !withoutBg && 'bg-black text-white rounded-lg', className)}
      placement={placement}
      anchorsVisible={anchorsVisible}
      duration={duration}
      offset={offset}
    >
      {children}
    </PopoverContent>
  )
}
