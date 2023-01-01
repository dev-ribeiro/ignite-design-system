import type { Meta, StoryObj } from '@storybook/react'
import { Box, Button, Text, Toast } from '@dev-ribeiro-rocketseat-ui/react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  decorators: [
    (Story) => {
      return (
        <Box
          as="div"
          css={{
            minHeight: 300,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '$2',
          }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta

export const Primary: StoryObj = {
  args: {
    trigger: <Button>Trigger</Button>,
    title: (
      <Text as="h2" size="xl">
        Agendamento realizado
      </Text>
    ),
    description: <Text>Quarta-feira, 23 de Outubro às 16h</Text>,
  },
}
