import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@dev-ribeiro-rocketseat-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum ratione
          veritatis magnam odio. Accusantium animi eos omnis reiciendis delectus
          suscipit sed hic distinctio repellat? Hic, unde ipsum. Quasi,
          perspiciatis unde.
        </Text>
      </>
    ),
  },
  argTypes: {
    children: {
      control: { type: null },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
