import { TooltipContent } from './content'
import { TooltipRoot } from './root'
import { TooltipTrigger } from './trigger'

export const Tooltip = {
  Root: TooltipRoot,
  Content: TooltipContent,
  Trigger: TooltipTrigger,
}

export { TooltipRoot, TooltipContent, TooltipTrigger }
export { useTooltipContext } from './context'
export type { TooltipRootProps } from './root'
export type { TooltipTriggerProps } from './trigger'
export type { TooltipContentProps } from './content'
