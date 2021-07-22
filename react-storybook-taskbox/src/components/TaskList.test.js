import { render } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';

import * as TaskListStories from './TaskList.stories';

/*
    composeStories 는 당 컴포넌트의 관련된 모든 정보에 대해서 진행한다. (예를들면, args)
*/
const { WithPinnedTasks } = composeStories(TaskListStories);

it ('renders pinned tasks at the start of the list', () => {

    // WithPinnedTasks 를 렌더링 해서 얻은 DOM
    const { container } = render(<WithPinnedTasks />);

    // DOM 이 내가 의도적으로 그린 놈을 가지고 있는지 확인
    expect (
        // 리스트의 첫번째가 pinned 인지 확인한다.
        container
        .querySelector('.list-item:nth-child(1) input[value="Task 6 (pinned)"]')
    ).not.toBe(null);

});