import BaseInput from '../components/BaseInput.vue'
import { expect, getElementError, userEvent, waitFor, within } from '@storybook/test'

/** Input component */
export default {
  title: 'BaseInput',
  component: BaseInput,
  tags: ['autodocs'],
}

const Template = () => ({
  components: { BaseInput },
  template: '<BaseInput />',
})

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const NumberAsyncStory = {
  args: {
    type: 'number',
    placeholder: '1234567890',
    modelValue: '',
    inputName: '',
    rules: {},
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const numberInput = canvas.getByPlaceholderText('1234567890', {
      selector: 'input',
    })
    await sleep(1000)

    await userEvent.type(numberInput, '9876543210', {
      delay: 300,
    })
  },
}

export const TextAsyncStory = {
  args: {
    type: 'text',
    placeholder: 'abcde',
    modelValue: '',
    inputName: '',
    rules: {},
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const textInput = canvas.getByPlaceholderText('abcde', {
      selector: 'input',
    })

    await sleep(1000)

    await userEvent.type(textInput, 'password', {
      delay: 300,
    })
  },
}

export const DifferentAsyncStory = {
  args: {
    type: 'text',
    placeholder: 'example-email@email.com',
    modelValue: '',
    inputName: '',
    rules: {},
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const passwordInput = canvas.getByPlaceholderText('example-email@email.com', {
      selector: 'input',
    })
    await sleep(1000)
    console.log(passwordInput)
    await userEvent.type(passwordInput, 'email@email.com', {
      delay: 300,
    })
  },
}

/**Правило ввода данных - длина может быть положительным числом с шагом 0.01 (необходимо нажать ok в спывающем окне*/
export const NumberRulesAsyncStory = {
  args: {
    type: 'number',
    placeholder: '0.00',
    modelValue: '',
    inputName: '',
    rules: { regex: /[0-9]+\.?[0-9]{0,2}/ },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const numberInputValue = canvas.getByTestId('input', {
      selector: 'input',
    })

    await sleep(1000)

    await userEvent.type(numberInputValue, '0.123', {
      delay: 200,
    })

    await sleep(2000)

    console.log(numberInputValue.value)

    await expect(numberInputValue.value).toBe('0.12')
  },
}

/**Правило ввода данных - длина может быть положительным числом с шагом 0.01*/
export const NumberRules = {
  args: {
    type: 'number',
    placeholder: '0.00',
    modelValue: '',
    inputName: '',
    rules: { regex: /[0-9]+\.?[0-9]{0,2}/ },
  },
}

export const Text = {
  args: {
    type: 'text',
    placeholder: 'abcde',
    modelValue: '',
    inputName: '',
    rules: {},
  },
}

export const Different = {
  args: {
    type: 'text',
    placeholder: 'fgdgdf',
    modelValue: '',
    inputName: '',
    rules: {},
  },
}
