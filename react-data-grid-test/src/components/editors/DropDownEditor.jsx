import {textEditorClassname, EditorProps} from 'react-data-grid';
import {observer} from 'mobx-react';
import store from '../../store';

const DropDownEditor = observer(({row, onRowChange}) => {
    const { titles } = store;
    return (
        <select
            className={textEditorClassname}
            value={row.title}
            onChange={(e) => {
                onRowChange({...row, title: e.target.value}, true);
            }}
        >
            {titles.map((title) => (
                <option key={title} value={title}>
                    {title}
                </option>
            ))}
        </select>
    )
});

export default DropDownEditor;