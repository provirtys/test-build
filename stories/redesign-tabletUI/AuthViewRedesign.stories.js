import {expect, fireEvent, userEvent, within} from "@storybook/test";
import AuthViewRedesign from "../../views/AuthViewRedesign.vue";

/** AuthView component*/
export default {
    title: "TabletUI-redesign/AuthView",
    component: AuthViewRedesign,
    tags: ["autodocs"],
};

/** Окно авторизации */
export const Primary = {

};

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export const ClickExample = {
    // args: {
    // },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await sleep(1000)

        await userEvent.click(canvas.getByTestId('button-one'));

        await sleep(1000)

        await userEvent.click(canvas.getByTestId('button-two'));

        await sleep(1000)

        await userEvent.click(canvas.getByTestId('button-nine') );

        await sleep(1000)

        await userEvent.click(canvas.getByTestId('button-nine') );

        await sleep(1000)

        await userEvent.click(canvas.getByTestId('button-five') );

        await sleep(2000)

        // console.log(getComputedStyle(canvas.getByTestId('indicator-one')).backgroundColor)
        await expect(getComputedStyle(canvas.getByTestId('indicator-three')).backgroundColor).toBe('rgb(210, 25, 25)')

        await sleep(2000)

        await userEvent.click(canvas.getByTestId('button-back'));

        await sleep(2000)

        await expect(getComputedStyle(canvas.getByTestId('indicator-three')).backgroundColor).toBe('rgb(177, 184, 199)')

    },
};
