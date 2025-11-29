import { DialogClose } from './close'
import { DialogContent } from './content'
import { DialogDescription } from './description'
import { DialogRoot } from './root'
import { DialogTitle } from './title'
import { DialogTrigger } from './trigger'

export const Dialog = {
  Root: DialogRoot,
  Content: DialogContent,
  Trigger: DialogTrigger,
  Title: DialogTitle,
  Description: DialogDescription,
  Close: DialogClose,
}

export { DialogRoot, DialogContent, DialogTrigger, DialogTitle, DialogDescription, DialogClose }
export { useDialogContext } from './context'
export type { DialogTriggerProps } from './trigger'
export type { DialogContentProps } from './content'
export type { TitleProps as DialogTitleProps } from './title'
export type { DescriptionProps as DialogDescriptionProps } from './description'
