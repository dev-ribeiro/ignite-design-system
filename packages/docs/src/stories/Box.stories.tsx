import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <h1>TESTTANDO O ELEMENTO BOX</h1>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut illum vel
          hic deleniti expedita enim molestiae pariatur tempore consequatur, ad
          totam. Earum animi modi reprehenderit atque nulla fugit maiores
          corrupti!
        </span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
