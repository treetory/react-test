import React, { ComponentProps } from "react";
import { MemoryRouter, Routes, Route } from 'react-router';
import { Meta, Story } from "@storybook/react";
import DonutStatistics from "../pages/DonutStatistics";
import MobXContext from "../store/mobXContext";
import MobXStore from "../store/mobxStore";

export default {
  title: "DonutStatistics/DonutStatistics",
  component: DonutStatistics,
  decorators: [
    (story) => (
      <MobXContext.Provider value={new MobXStore()}>
        <div>{story}</div>
      </MobXContext.Provider>
    ),
  ],
} as Meta;

const Template: Story<ComponentProps<typeof DonutStatistics>> = () => {
  return (
  <MemoryRouter initialEntries={['/donutStatistics/2403?type=germline']}>
    <Routes>
      <Route element={<DonutStatistics />}/>
    </Routes>
  </MemoryRouter>
  )
};

export const NoProps = Template.bind({});
NoProps.parameters = {
  // msw: [variantLogsApiMock],
};
