import { ComponentProps, ReactNode } from 'react'
import {
  TooltipArrow,
  TooltipContainer,
  TooltipContent,
  TooltipPortal,
  TooltipTrigger,
  TooltipWrapper,
} from './styles'

export interface TooltipType extends ComponentProps<typeof TooltipContainer> {
  trigger: ReactNode
  content: ReactNode
}

export function Tooltip({ trigger, content }: TooltipType) {
  return (
    <TooltipContainer>
      <TooltipWrapper>
        <TooltipTrigger asChild>{trigger}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent sideOffset={5}>
            {content}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipWrapper>
    </TooltipContainer>
  )
}
