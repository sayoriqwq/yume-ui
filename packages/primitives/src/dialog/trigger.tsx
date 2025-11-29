'use client'

import type { ButtonHTMLAttributes, MouseEvent as ReactMouseEvent, ReactNode } from 'react'
import { useCallback } from 'react'
import { withAsChild } from '../hoc/as-child'
import { useDialogContext } from './context'

export interface DialogTriggerBaseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode
}

function DialogTriggerBase({ children, onClick, ...rest }: DialogTriggerBaseProps) {
  const { setOpen } = useDialogContext()

  const triggerClick = useCallback(
    (event: ReactMouseEvent<HTMLButtonElement>) => {
      onClick?.(event)
      if (event.defaultPrevented)
        return
      setOpen(true)
    },
    [onClick, setOpen],
  )

  return (
    <button
      type="button"
      {...rest}
      onClick={triggerClick}
    >
      {children ?? 'Open dialog'}
    </button>
  )
}

export const DialogTrigger = withAsChild<DialogTriggerBaseProps>(DialogTriggerBase, {
  handlerProps: ['onClick'],
})

export type DialogTriggerProps = Parameters<typeof DialogTrigger>[0]
