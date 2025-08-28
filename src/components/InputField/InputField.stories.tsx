import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
  args: {
    label: "Username",
    placeholder: "Enter text...",
    helperText: "This is helper text",
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {};
export const Filled: Story = { args: { variant: "filled" } };
export const Ghost: Story = { args: { variant: "ghost" } };
export const Password: Story = {
  args: { label: "Password", type: "password", placeholder: "Enter password" },
};
export const Error: Story = {
  args: { invalid: true, errorMessage: "Invalid input" },
};
export const Disabled: Story = { args: { disabled: true } };
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <InputField label="Small" size="sm" placeholder="Small input" />
      <InputField label="Medium" size="md" placeholder="Medium input" />
      <InputField label="Large" size="lg" placeholder="Large input" />
    </div>
  ),
};
