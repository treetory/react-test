import React from 'react';
import TaskListWithMobx from './TaskListWithMobx';
import * as TaskStories from './Task.stories';

export default {
    component: TaskListWithMobx,
    title: 'TaskListWithMobx',
    decorators: [
        story => <div style={{ padding: '3rem' }}>{story()}</div>
    ]
}

const Template = (args) => <TaskListWithMobx {...args} />;

export const Default = Template.bind({});
Default.args = {
    // args 구성을 통해 스토리의 모양을 잡는다
    // 데이터는 task.stories.js 의 Default story 의 것을 상속 받는다
    tasks: [
        {...TaskStories.Default.args.task, id: '1', title: 'Something'},
        {...TaskStories.Default.args.task, id: '2', title: 'Something more'},
        {...TaskStories.Default.args.task, id: '3', title: 'Something else'},
        {...TaskStories.Default.args.task, id: '4', title: 'Something again'},
        {...TaskStories.Default.args.task, id: '5', title: 'Something that'},
        {...TaskStories.Default.args.task, id: '6', title: 'Something better'},
    ]
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
    // args 구성을 통해 스토리의 모양을 잡는다
    // 데이터는 바로 위에 선언한 Default 의 것을 상속 받는다
    tasks: [
        ...Default.args.tasks.slice(0, 5),
        {id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED'}
    ]
};

export const Loading = Template.bind({});
Loading.args = {
    tasks: [],
    loading: true
};

export const Empty = Template.bind({});
Empty.args = {
    ...Loading.args,
    loading: false
};