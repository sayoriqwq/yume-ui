'use client'

import type { ReactNode } from 'react'
import type { PopoverContextType } from '@yume-ui/primitives'
import { createComponentContext, usePopoverContext } from '@yume-ui/primitives'

const [TooltipContextProvider, useTooltipContextBase] = createComponentContext<PopoverContextType>({
  name: 'Tooltip',
  errorMessage: 'Tooltip 组件必须在 <Tooltip.Root> 内部使用',
})

interface TooltipProviderProps {
  children: ReactNode
}

export function TooltipProvider({ children }: TooltipProviderProps) {
  const popover = usePopoverContext()
  return <TooltipContextProvider value={popover}>{children}</TooltipContextProvider>
}

export const useTooltipContext = useTooltipContextBase
