import { action, makeObservable, observable } from "mobx";

class SimpleDataGridStore {
    columns = [];
    rows = [];
    constructor(columns, rows) {
        makeObservable(this, {
            columns: observable,
            rows: observable,
            getRow: action,
            getRowsCount: action
        });
        this.columns = columns;
        this.rows = rows;
    }

    getRow = (i) => {
        const _rows = this.row.find((row, index) => index === i);
        return _rows;
    }

    getRowsCount = () => {
        return this.rows.length;
    }
}

const simpleDataGridStore = new SimpleDataGridStore(
    [
        { key: 'id', name: 'ID' },
        { key: 'title', name: 'Title' },
        { key: 'count', name: 'Count' } 
    ],
    [
        {id: 0, title: 'row1', count: 20}, 
        {id: 1, title: 'row1', count: 40}, 
        {id: 2, title: 'row1', count: 60}
    ]
);
export default simpleDataGridStore;