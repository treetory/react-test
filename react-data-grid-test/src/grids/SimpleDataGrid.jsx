import DataGrid from 'react-data-grid';
import {observer} from 'mobx-react';
import store from '../store';

const SimpleDataGrid = observer((props) => {
    const {simpleDataGridStore} = store;
    return (
        <DataGrid
            columns={simpleDataGridStore.columns}
            rows={simpleDataGridStore.rows}
            rowGetter={i => simpleDataGridStore.getRow(i)}
            rowsCount={simpleDataGridStore.getRowsCount()}
            minHeight={150}
        />
    )
});

export default SimpleDataGrid;