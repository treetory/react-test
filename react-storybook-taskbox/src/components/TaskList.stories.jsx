import React from 'react';
import TaskList from './TaskList';
import * as TaskStories from './Task.stories';

export default {
    component: TaskList,
    title: 'TaskList',
    decorators: [
        story => <div style={{ padding: '3rem' }}>{story()}</div>
    ]
}

const Template = (args) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
    // args 구성을 통해 스토리의 모양을 잡는다
    // 데이터는 task.stories.js 의 Default story 의 것을 상속 받는다
    tasks: [
        {...TaskStories.Default.args.task, id: '1', title: 'Task 1'},
        {...TaskStories.Default.args.task, id: '2', title: 'Task 2'},
        {...TaskStories.Default.args.task, id: '3', title: 'Task 3'},
        {...TaskStories.Default.args.task, id: '4', title: 'Task 4'},
        {...TaskStories.Default.args.task, id: '5', title: 'Task 5'},
        {...TaskStories.Default.args.task, id: '6', title: 'Task 6'},
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