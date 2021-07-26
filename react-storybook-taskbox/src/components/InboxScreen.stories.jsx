import React from 'react';
import { Provider } from 'mobx-react';
import store from '../store';

import InboxScreen from './InboxScreen';

import * as TaskListStories from './TaskListWithMobx.stories';

/*
    Provider 에 전달하기 위한 store 를 구성한다
    store 에 목업 데이터를 전달하는 것이 목적이므로,
    args 로 목업 데이터 만들어 놓은 것을 store 의 setTasks 함수를 이용하여
    데이터를 세팅한다.
*/
const {taskListStore} = store;
taskListStore.setTasks(TaskListStories.Default.args.tasks);

export default {
    component: InboxScreen,
    /*
        story 데코레이션은 Provider 로 감싸는 것이다.
    */
    decorators: [story => <Provider store={store}>{story()}</Provider>],
    title: 'InboxScreen'
}

const Template = (args) => <InboxScreen {...args}></InboxScreen>;

export const Default = Template.bind({});

export const Error = Template.bind({});
Error.args = {
    error: 'Something'
};