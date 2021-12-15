import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import DonutStatistics from "../pages/DonutStatistics";
import { action } from "@storybook/addon-actions";

export default {
  title: "PAGES/DonutStatistics",
  component: DonutStatistics,
} as ComponentMeta<typeof DonutStatistics>;

const Template: ComponentStory<typeof DonutStatistics> = (args) => {
    return (
        <MemoryRouter initialEntries={['/donutStatistics/2403?type=germline']}>
            <Routes>
                <Route path='/donutStatistics/:sampleId' element={
                    <div>
                        <DonutStatistics />
                    </div>
                }></Route>
            </Routes>
        </MemoryRouter>
    )
};

export const NoProps = Template.bind({});
NoProps.args = {
};
