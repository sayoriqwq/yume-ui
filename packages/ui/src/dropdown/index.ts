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

export { DropdownRoot, DropdownTrigger, DropdownContent, DropdownItem, DropdownSubRoot, DropdownSubTrigger }
export { useDropdownContext } from './context'
export type { DropdownRootProps } from './root'
export type { DropdownTriggerProps } from './trigger'
export type { DropdownContentProps } from './content'
export type { DropdownItemProps } from './item'
