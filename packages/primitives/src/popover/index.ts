import { PopoverContent } from './content'
import { PopoverRoot } from './root'
import { PopoverTrigger } from './trigger'

export const Popover = {
  Root: PopoverRoot,
  Content: PopoverContent,
  Trigger: PopoverTrigger,
}

export { PopoverRoot, PopoverContent, PopoverTrigger }
export { usePopoverContext } from './context'
export type { PopoverRootProps } from './root'
export type { PopoverTriggerProps } from './trigger'
export type { PopoverContentProps } from './content'
export type { PopoverContextType } from './context'
