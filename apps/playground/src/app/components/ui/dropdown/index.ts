import { DropdownContent } from './content'
import { DropdownItem } from './item'
import { DropdownRoot } from './root'
import { DropdownSubRoot } from './sub-root'
import { DropdownSubTrigger } from './sub-trigger'
import { DropdownTrigger } from './trigger'

export const Dropdown = {
  Root: DropdownRoot,
  Trigger: DropdownTrigger,
  Content: DropdownContent,
  Item: DropdownItem,
  SubRoot: DropdownSubRoot,
  SubContent: DropdownContent,
  SubTrigger: DropdownSubTrigger,
}

export { DropdownContent, DropdownItem, DropdownRoot, DropdownSubRoot, DropdownSubTrigger, DropdownTrigger }
export type { DropdownContentProps } from './content'
export { useDropdownContext } from './context'
export type { DropdownItemProps } from './item'
export type { DropdownRootProps } from './root'
export type { DropdownTriggerProps } from './trigger'
