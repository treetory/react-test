import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import store from '../store';

import Task from './Task';

const TaskListWithMobx = observer(({
    loading,
    tasks
}) => {

    const {taskListStore} = store;
    /*
        초기 데이터를 store 에 setting 하기
        -> 한 번만 돌도록 구성하지 않으면, 
            Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.
            에러가 계속하여 발생한다.
    */
    if (taskListStore.tasks.length === 0) taskListStore.setTasks(tasks);
    
    const LoadingRow = (
        <div className="loading-item">
            <span className="glow-checkbox"></span>
            <span className="glow-text">
                <span>Loading</span>
                <span>cool</span>
                <span>state</span>
            </span>
        </div>
    );

    if (loading) {
        return (
            <div className="list-items">
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
                {LoadingRow}
            </div>
        )
    }

    if (taskListStore.tasks.length === 0) {
        return (
            <div className="list-items">
                <div className="wrapper-message">
                    <span className="icon-check"></span>
                    <div className="title-message">
                        You have no tasks.
                    </div>
                    <div className="subtitle-message">
                        Sit back and relax.
                    </div>
                </div>
            </div>
        )
    }

    const _taskList = taskListStore.tasks;

    return (
        <div className="list-items">
            {
                _taskList.map(task => (
                    <Task 
                        key={task.id} 
                        task={task} 
                        onPinTask={(e) => {
                            taskListStore.onPinTask(task.id);
                        }}
                        onArchiveTask={(e) => {
                            taskListStore.onArchiveTask(task.id);
                        }}    
                    ></Task>
                ))
            }
        </div>
    )
})

/*
    컴포넌트에 기대되는 데이터 모양을 특정 지어주기 위해
    React 의 PropTypes 를 사용하는 것이 좋다.

    tasks 의 모양을 특정 지을 때, 
    task 의 데이터 모양이 배열로 있는 것이 tasks로 선언한 것이 특징
*/
TaskListWithMobx.prototype = {
    loading: PropTypes.bool,
    tasks: PropTypes.arrayOf(Task.prototype.task).isRequired,
    onPinTask: PropTypes.func,
    onArchiveTask: PropTypes.func
}

/*
    요렇게 default props 값을 설정할 수 있다.
*/
TaskListWithMobx.defaultProps = {
    loading: false,
}

export default TaskListWithMobx;