import * as Toast from '@radix-ui/react-toast'
import { styled, keyframes } from '../../styles'

export const ToastProvider = styled(Toast.Provider, {})

export const ToastViewPort = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: 25,
  gap: 10,
  //   width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

const slideIn = keyframes({
  from: {
    transform: 'translateX(calc(100% + 1.5625rem))',
  },
  to: {
    transform: 'translateX(0)',
  },
})

const swipeOut = keyframes({
  from: {
    transform: 'translateX(0)',
  },
  to: {
    transform: 'translateX(calc(100% + 1.5625rem))',
  },
})

const hide = keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
})

export const ToastRoot = styled(Toast.Root, {
  backgroundColor: '$gray800',
  borderRadius: '$sm',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: '0.9375rem',
  display: 'grid',
  gridTemplateAreas: `
    'title action'
    'description action'
  `,
  gridTemplateColumns: 'auto max-content',
  columnGap: '0.9375rem',
  alignItems: 'center',

  svg: {
    color: '$gray200',
  },

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },

  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },

  '&[data-state="cancel"]': {
    transform: 'translateX(0)',
    tranform: 'transform 200ms ease-out',
  },

  '&[data-state="end"]': {
    animation: `${swipeOut} 100ms ease-in`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  gridArea: 'title',
  lineHeight: '$base',
})

export const ToastDescription = styled(Toast.Description, {
  gridArea: 'description',
  lineHeight: '$base',
})

export const ToastAction = styled(Toast.Action, {
  gridArea: 'action',
  alignSelf: 'flex-start',
})
