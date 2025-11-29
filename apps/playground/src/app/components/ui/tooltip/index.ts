import { TooltipContent } from './content'
import { TooltipRoot } from './root'
import { TooltipTrigger } from './trigger'

export const Tooltip = {
  Root: TooltipRoot,
  Content: TooltipContent,
  Trigger: TooltipTrigger,
}

export { TooltipContent, TooltipRoot, TooltipTrigger }
export type { TooltipContentProps } from './content'
export { useTooltipContext } from './context'
export type { TooltipRootProps } from './root'
export type { TooltipTriggerProps } from './trigger'
