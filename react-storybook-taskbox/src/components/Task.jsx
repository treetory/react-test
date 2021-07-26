import React from 'react';
import PropTypes from 'prop-types';

const Task = ({task: {id, title, state}, onArchiveTask, onPinTask}) => {
    console.warn(id, title, state);
    return (
        <div className={`list-item ${state}`}>
            <label className="checkbox">
                <input
                    type="checkbox"
                    defaultChecked={state === 'TASK_ARCHIVED'}
                    disabled={true}
                    name="checked"
                    checked={state === 'TASK_ARCHIVED' ? true : false}
                >
                </input>
                <span
                    className="checkbox-custom"
                    onClick={(e) => onArchiveTask(id)}
                >
                </span>
            </label>
            <div className="title">
                <input
                    type="text"
                    value={title}
                    readOnly={true}
                    placeholder="Input Title"
                >
                </input>
            </div>
            <div
                className="actions"
                onClick={e => e.stopPropagation()}
            >
                {
                    state !== 'TASK_ARCHIVED' && (
                        // eslint-disable-next-line jsx-a11y/anchor-is-valid
                        <a
                            onClick={e => onPinTask(id)}
                        >
                            <span className={`icon-star`}></span>
                        </a>
                    )
                }
            </div>
        </div>
    )
}

/*
    컴포넌트에 기대되는 데이터 모양을 특정 지어주기 위해
    React 의 PropTypes 를 사용하는 것이 좋다.
*/
Task.prototype = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired
    }),
    onArchiveTask: PropTypes.func,
    onPinTask: PropTypes.func
}

export default Task;