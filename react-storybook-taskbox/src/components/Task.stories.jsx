import React from 'react';
import Task from './Task';
/*
    스토리 북에 컴포넌트에 대한 문서화를 위해 default 로
    component 가 어떤 것이며
    title 에 대한 정보를 
    객체에 담아 export 한다.
*/
export default {
    component: Task,
    title: 'Task'
};

/*
    Template 은 인자로 넘겨받은 props 를 
    Task Component 에 바인딩하여 생성된 새로운 컴포넌트를 반환하는
    함수다.
*/
const Template = (args) => <Task {...args} />;

/*
    Template.bind({}) 는 표준 자바스크립트 테크닉으로
    함수의 복제본을 만드는데 쓰인다.
    
    동일한 구현을 사용하면서, 각각의 고유한 프로퍼티를
    각각의 exported 스토리에 설정하는 것을 허용하기 위해
    Template.bind({}) 를 사용한다.
*/
export const Default = Template.bind({});
Default.args = {
    task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_INBOX',
        updateAt: new Date(2021, 0, 1, 9, 0)
    }
}

export const Pinned = Template.bind({});
Pinned.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_PINNED'
    }
}

export const Archived = Template.bind({});
Archived.args = {
    task: {
        ...Default.args.task,
        state: 'TASK_ARCHIVED'
    }
}