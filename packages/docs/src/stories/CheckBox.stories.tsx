import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, CheckBox, CheckBoxProps } from '@dev-ribeiro-rocketseat-ui/react'

export default {
  title: 'Form/CheckBox',
  component: CheckBox,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'row',
            gap: '$2',
          }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckBoxProps>

export const Primary: StoryObj<CheckBoxProps> = {}

// export const Disabled: StoryObj<CheckBoxProps> = {
//   args: {
//     disabled: true,
//   },
// }
