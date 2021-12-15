import { ComponentMeta, ComponentStory } from "@storybook/react";
import DonutChartWithLabel from "./DonutChartWithLabel";

export default {
  title: "D3/DonutChartWithLabel",
  component: DonutChartWithLabel,
  // decorators: [
  //   (story) => (
  //     <Box>{story}</Box>
  //   ),
  // ],
} as ComponentMeta<typeof DonutChartWithLabel>;

const Template: ComponentStory<typeof DonutChartWithLabel> = (args) => <DonutChartWithLabel {...args} />;

export const Props = Template.bind({});
Props.args = {
  // msw: [variantLogsApiMock],
  data: [
    {label: 'aaa', value: 10},
    {label: 'bbb', value: 10},
    {label: 'ccc', value: 10},
  ],
  colors: {
    0: "#CC0066",
    1: "#6600CC",
    2: "#0080FF",
    3: "#F6545C",
    4: "#FF9482",
    5: "#70ACF5",
    6: "#1F2D87",
    7: "#5a64a5",
  }
};
