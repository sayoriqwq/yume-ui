'use client'

import type { DropdownRootProps } from './root'
import { PopoverRoot } from '@yume-ui/primitives'
import { DropdownProvider, useDropdownContext } from './context'

interface DropdownSubProps extends DropdownRootProps {}

export function DropdownSubRoot({ children, mode }: DropdownSubProps) {
  const parent = useDropdownContext()
  return (
    <PopoverRoot mode={mode ?? parent.mode} asChild>
      <DropdownProvider>{children}</DropdownProvider>
    </PopoverRoot>
  )
}
