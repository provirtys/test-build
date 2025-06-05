import BaseScanner from '../components/BaseScanner.vue'
import { fireEvent, within } from '@storybook/test'

/** Scanner component with customizable light, size and type code*/
export default {
  title: 'BaseScanner',
  component: BaseScanner,
  tags: ['autodocs'],
  argTypes: {
    codeType: {
      options: ['Code128', 'DataMatrix'],
      control: { type: 'radio' },
    },
  },
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const ClickExample = {
  args: {
    lightSwitcher: true,
    width: '100%',
    height: 'auto',
    codeType: 'Code128',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await sleep(1000)

    await fireEvent.click(canvas.getByTestId('button'))

    await sleep(1000)

    await fireEvent.click(canvas.getByTestId('button'))

    await sleep(1000)

    await fireEvent.click(canvas.getByTestId('button'))
  },
}

export const ClickExampleSecond = {
  args: {
    lightSwitcher: true,
    width: '100%',
    height: 'auto',
    codeType: 'Code128',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await sleep(1000)

    await fireEvent.click(canvas.getByTestId('button'))
  },
}

export const PrimaryDatamatrix = {
  args: {
    lightSwitcher: false,
    width: '100%',
    height: 'auto',
    codeType: 'DataMatrix',
  },
}

export const PrimaryCode = {
  args: {
    lightSwitcher: false,
    width: '100%',
    height: 'auto',
    codeType: 'Code128',
  },
}

export const TurnOnLampDatamatrix = {
  args: {
    lightSwitcher: true,
    width: '100%',
    height: 'auto',
    codeType: 'DataMatrix',
  },
}

export const TurnOnLampCode = {
  args: {
    lightSwitcher: true,
    width: '100%',
    height: 'auto',
    codeType: 'Code128',
  },
}
