import React from 'react';
import PropTypes from 'prop-types';

import TaskListWithMobx from './TaskListWithMobx';

const InboxScreen = ({error}) => {

    if (error) {
        return (
            <div className="page lists-show">
                <div className="wrapper-message">
                    <span className="icon-face-sad"></span>
                    <div className="title-message">Oh no!</div>
                    <div className="subtitle-message">Something went wrong</div>
                </div>
            </div>
        )
    }
    return (
        <div className="page lists-show">
            <nav>
                <h1 className="title-page">
                    <span className="title-wrapper">Taskbox</span>
                </h1>
            </nav>
            <TaskListWithMobx></TaskListWithMobx>
        </div>
    )
}

InboxScreen.prototype = {
    error: PropTypes.string
}

InboxScreen.defaultProps = {
    error: null
}

export default InboxScreen;