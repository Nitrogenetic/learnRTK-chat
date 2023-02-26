import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../pages/home/components/Button";

export default {
  title: "Example/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const LightThemeButton = Template.bind({});
LightThemeButton.args = {
  theme: "light",
  children: 123,
};

export const DarkThemeButton = Template.bind({});
DarkThemeButton.args = {
  theme: "dark",
  children: 456,
};
