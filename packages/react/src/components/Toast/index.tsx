import { ComponentProps, ReactNode, useRef, useState } from 'react'
import { X } from 'phosphor-react'
import {
  ToastAction,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewPort,
} from './styles'

export interface ToastType extends ComponentProps<typeof ToastProvider> {
  trigger: ReactNode
  title: ReactNode
  description: ReactNode
}

export function Toast({ trigger, title, description }: ToastType) {
  const [open, setOpen] = useState(false)
  const timerRef = useRef(0)

  async function handleClickEvent() {
    setOpen(false)
    clearTimeout(timerRef.current)
    timerRef.current = window.setTimeout(() => {
      setOpen(true)
    }, 100)
  }

  return (
    <ToastProvider>
      <div onClick={handleClickEvent}>{trigger}</div>

      <ToastRoot open={open} onOpenChange={setOpen}>
        <ToastTitle>{title}</ToastTitle>
        <ToastDescription>{description}</ToastDescription>
        <ToastAction altText="Teste" asChild>
          <X size={20} />
        </ToastAction>
      </ToastRoot>
      <ToastViewPort />
    </ToastProvider>
  )
}
