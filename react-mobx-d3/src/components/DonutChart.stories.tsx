import { ComponentMeta, ComponentStory } from "@storybook/react";
import DonutChart from "./DonutChart";

export default {
  title: "D3/DonutChart",
  component: DonutChart,
} as ComponentMeta<typeof DonutChart>;

const Template: ComponentStory<typeof DonutChart> = (args) => <DonutChart {...args} />;

export const Props = Template.bind({});
Props.args = {
  // msw: [variantLogsApiMock],
  data: [
    {label: 'aaa', value: 10},
    {label: 'bbb', value: 10},
    {label: 'ccc', value: 10},
  ],
};
