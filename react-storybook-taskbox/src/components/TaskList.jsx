import React from 'react';
import PropTypes from 'prop-types';

import Task from './Task';

const TaskList = ({
    loading,
    tasks,
    onPinTask,
    onArchiveTask
}) => {

    const events = {
        onPinTask,
        onArchiveTask
    }

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

    if (tasks.length === 0) {
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

    /*
        order 를 변경하느라
        TASK_PINNED 를 상단에 올리고, 나머지를 그대로 아래로 내렸다.
    */
    const tasksInOrder = [
        ...tasks.filter(t => t.state === 'TASK_PINNED'),
        ...tasks.filter(t => t.state !== 'TASK_PINNED'),
    ]

    return (
        <div className="list-items">
            {
                tasksInOrder.map(task => (
                    <Task key={task.id} task={task} {...events}></Task>
                ))
            }
        </div>
    )
}

/*
    컴포넌트에 기대되는 데이터 모양을 특정 지어주기 위해
    React 의 PropTypes 를 사용하는 것이 좋다.

    tasks 의 모양을 특정 지을 때, 
    task 의 데이터 모양이 배열로 있는 것이 tasks로 선언한 것이 특징
*/
TaskList.prototype = {
    loading: PropTypes.bool,
    tasks: PropTypes.arrayOf(Task.prototype.task).isRequired,
    onPinTask: PropTypes.func,
    onArchiveTask: PropTypes.func
}

/*
    요렇게 default props 값을 설정할 수 있다.
*/
TaskList.defaultProps = {
    loading: false,
}

export default TaskList;