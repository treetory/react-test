import { action, makeObservable, observable } from "mobx";

class TaskListStore {
    tasks = [];
    constructor() {
        makeObservable(this, {
            tasks: observable,
            setTasks: action,
            onPinTask: action,
            onArchiveTask: action,
            getTask: action
        })
    }
    getTasks() {
        return [...this.tasks];
    }
    setTasks = (tasks) => {
        this.tasks = tasks;
    }
    onPinTask = (id) => {
        this.tasks = this.tasks.map(task => {
            var _task = task;
            if (task.id === id) {
                _task = task.state === 'TASK_PINNED' ? {...task, state: 'TASK_INBOX'} : {...task, state: 'TASK_PINNED'};
            } 
            return _task;
        });
    }
    onArchiveTask = (id) => {
        const _tasks = this.tasks.map(task => 
            task.id === id ? {...task, state: 'TASK_ARCHIVED'} : task
            );
        this.tasks = _tasks;
    }
    getTask(id) {
        return this.tasks.find(task => task.id === id);
    }
}

const taskListStore = new TaskListStore();
export default taskListStore;