'use client'

import { cn } from '@yume-ui/primitives'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

interface TimeProps {
  date: string | Date
  className?: string
}

const pattern = 'YYYY-MM-DD'

export function RelativeTime({ date, className }: TimeProps) {
  return (
    <time className={cn('whitespace-nowrap', className)} dateTime={date?.toString()}>
      {dayjs().to(dayjs(date))}
    </time>
  )
}

export function NormalTime({ date, className }: TimeProps) {
  return (
    <time className={cn('whitespace-nowrap', className)} dateTime={date?.toString()}>
      {dayjs(date).format(pattern)}
    </time>
  )
}

export type { TimeProps }
