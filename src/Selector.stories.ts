import type { Meta, StoryObj } from "@storybook/react";

import { Selector } from "./Selector";

const meta = {
	title: "Selector",
	component: Selector,
} satisfies Meta<typeof Selector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "Selector",
	},
};
