import type { Meta, StoryObj } from '@storybook/react'
import { Box, Button, Text, Tooltip } from '@dev-ribeiro-rocketseat-ui/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
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
    trigger: (
      <Button>
        <Text>Trigger</Text>
      </Button>
    ),
    content: <Text>Conteúdo do tooltip</Text>,
  },
}
