import { createPortal } from 'react-dom';
import DataGrid, 
{ 
    SelectColumn, 
    TextEditor, 
    SelectCellFormatter, 
} from 'react-data-grid';
// import {TimestampFormatter} from '../components/formatters/TimestampFormatter';
// import {CurrencyFormatter} from '../components/formatters/CurrencyFormatter';
import { exportToCsv, exportToXlsx, exportToPdf } from '../utils/ExportUtils';
import { useState, useMemo } from 'react';
import { observer } from 'mobx-react';
import store from '../store';
import '../DataGrid.css';

/*
  데이터 그리드 컬럼 중, 시간형식으로 된 컬럼의 formatter
*/
const TimestampFormatter = ({ timestamp }) => {
  const dateFormatter = new Intl.DateTimeFormat(navigator.language);
  return <>{dateFormatter.format(timestamp)}</>;
}

/*
  데이터 그리드 컬럼 중, 통화형식으로 된 컬럼의 formatter
*/
const CurrencyFormatter = ({ value }) => {
  const currencyFormatter = new Intl.NumberFormat(navigator.language, {
    style: 'currency',
    currency: 'eur'
  });
  return <>{currencyFormatter.format(value)}</>;
}

/*
  이건 데이터 그리드 컬럼 중, 
  text editor 를 통해 에디팅이 지원되는 컬럼의 CSS 형식 
*/
const textEditorClassname = `
rdg-text-editor 
appearance: none;

box-sizing: border-box;
width: 100%;
height: 100%;
padding: 0px 6px 0 6px;
border: 2px solid #ccc;
vertical-align: top;
color: var(--color);
background-color: var(--background-color);

font-family: inherit;
font-size: var(--font-size);

&:focus {
  border-color: var(--selection-color);
  outline: none;
}

&::placeholder {
  color: #999;
  opacity: 1;
}
`;

/*
  이건 데이터 그리드 컬럼 중, 
  progress dialog 를 보여주는 컬럼의 CSS

const dialogContainerClassname = `
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  place-items: center;
  background: rgba(0, 0, 0, 0.1);

  > dialog {
    width: 300px;
    > input {
      width: 100%;
    }

    > menu {
      text-align: center;
    }
  }
`;
*/
/*
  그리드의 컬럼을 정의한 것 -> 여기선 미리 정의한 게 됨
  컬럼의 속성값이 무엇이 있는지를 알고 쓰면 될 것으로 보임.
*/
const getColumns = (countries) => {
    return [
        SelectColumn,
        {
          key: 'id',
          name: 'ID',
          width: 60,
          frozen: true,
          resizable: false,
          summaryFormatter() {
            return <strong>Total</strong>;
          }
        },
        {
          key: 'title',
          name: 'Task',
          width: 120,
          frozen: true,
          editor({ row, onRowChange, onClose }) {
            const before = row.title;
            return createPortal(
              <div className={'dialogContainerClassname'}>
                <dialog open>
                  <textarea
                    autoFocus
                    value={row.title}
                    onChange={(e) => {
                      onRowChange({ ...row, title: e.target.value})
                    }}
                  />
                  <menu>
                    <button onClick={() => {
                      onRowChange({ ...row, title: before});
                      onClose()
                    }}>Cancel</button>
                  </menu>
                </dialog>
              </div>,
              document.getElementsByClassName('MuiCardContent-root')[1]
            );
          },
          editorOptions: {
            createPortal: true
          },
          summaryFormatter({ row }) {
            return <>{row.totalCount} records</>;
          }
        },
        {
          key: 'client',
          name: 'Client',
          width: 220,
          editor: TextEditor
        },
        {
          key: 'area',
          name: 'Area',
          width: 120,
          editor: TextEditor
        },
        {
          key: 'country',
          name: 'Country',
          width: 180,
          editor: (p) => (
            <select
              autoFocus
              className={textEditorClassname}
              value={p.row.country}
              onChange={(e) => p.onRowChange({ ...p.row, country: e.target.value }, true)}
            >
              {countries.map((country) => (
                <option key={country}>{country}</option>
              ))}
            </select>
          ),
          editorOptions: {
            editOnClick: true
          }
        },
        {
          key: 'contact',
          name: 'Contact',
          width: 160,
          editor: TextEditor
        },
        {
          key: 'assignee',
          name: 'Assignee',
          width: 150,
          editor: TextEditor
        },
        {
          key: 'progress',
          name: 'Completion',
          width: 110,
          formatter(props) {
            const value = props.row.progress;
            return (
              <>
                <progress max={100} value={value} style={{ width: 50 }} /> {Math.round(value)}%
              </>
            );
          },
          editor({ row, onRowChange, onClose }) {
            return createPortal(
              <div className={'dialogContainerClassname'}>
                <dialog open>
                  <input
                    autoFocus
                    type="range"
                    min="0"
                    max="100"
                    value={row.progress}
                    onChange={(e) => onRowChange({ ...row, progress: e.target.valueAsNumber })}
                  />
                  <menu>
                    <button onClick={() => onClose()}>Cancel</button>
                    <button onClick={() => onClose(true)}>Save</button>
                  </menu>
                </dialog>
              </div>,
              document.getElementsByClassName('MuiCardContent-root')[1]
            );
          },
          editorOptions: {
            createPortal: true
          }
        },
        {
          key: 'startTimestamp',
          name: 'Start date',
          width: 100,
          formatter(props) {
            return <TimestampFormatter timestamp={props.row.startTimestamp} />;
          }
        },
        {
          key: 'endTimestamp',
          name: 'Deadline',
          width: 100,
          formatter(props) {
            return <TimestampFormatter timestamp={props.row.endTimestamp} />;
          }
        },
        {
          key: 'budget',
          name: 'Budget',
          width: 100,
          formatter(props) {
            return <CurrencyFormatter value={props.row.budget} />;
          }
        },
        {
          key: 'transaction',
          name: 'Transaction type'
        },
        {
          key: 'account',
          name: 'Account',
          width: 150
        },
        {
          key: 'version',
          name: 'Version',
          editor: TextEditor
        },
        {
          key: 'available',
          name: 'Available',
          width: 80,
          formatter({ row, onRowChange, isCellSelected }) {
            return (
              <SelectCellFormatter
                tabIndex={-1}
                value={row.available}
                onChange={() => {
                  onRowChange({ ...row, available: !row.available });
                }}
                onClick={(e) => e.stopPropagation()}
                isCellSelected={isCellSelected}
              />
            );
          },
          summaryFormatter({ row: { yesCount, totalCount } }) {
            return <>{`${Math.floor((100 * yesCount) / totalCount)}% ✔️`}</>;
          }
        }
    ]; 
}

/*
  참조 https://github.com/adazzle/react-data-grid/blob/main/stories/demos/CommonFeatures.tsx

  상기 tsx 예제를 jsx 로 변환하여 만든 것 + mobx 를 이용하여 상태관리 해본 것
*/
const CommonFeaturesDataGrid = observer((props) => {

    /*
      mobx 로 정의한 store 중, 이 그리드에서 사용할 store  
    */
    const {commonFeaturesDataGridStore} = store;

    const toolbarClassname = `
    text-align: right;
    margin-bottom: 8px;
    `;

    /*
      column 을 생성해 놓음
    */
    const columns = useMemo(() => getColumns(commonFeaturesDataGridStore.countries), [commonFeaturesDataGridStore.countries]);

    /*
      DataGrid React Component

      rowKeyGetter (필수)   : 선택한 row 의 key 값을 찾기 위함 (store 에 정의된 함수 사용)
      columns (필수)        : 렌더링 할 컬럼들
      rows (필수)           : 렌더링 할 데이터
      defaultColumnOptions  : 컬럼에 적용할 옵션 (정렬, 컬럼 사이즈 변경)
      selectedRows          : row 선택 시, 선택된 row 가 store 에 저장되게 함
      onSelectedRowsChange  : 선택한 row 가 체크 되게 하기 위함
      onRowsChange          : row 의 값이 변경되면 변경된 값의 상태가 store 에 반영되게 함
      sortColumns           : 정렬할 컬럼을 클릭 시, 데이터 정렬 대상의 컬럼을 저장
      onSortColumnsChange   : 정렬할 컬럼 클릭에 따른 정렬 수행 (store)
      summaryRows           : 전체 데이터 summary row 를 생성
    */
    const gridElement = (
      <DataGrid
        rowKeyGetter={commonFeaturesDataGridStore.rowKeyGetter}
        columns={columns}
        rows={commonFeaturesDataGridStore.rows}
        defaultColumnOptions={{
          sortable: true,
          resizable: true
        }}
        selectedRows={commonFeaturesDataGridStore.selectedRows}
        onSelectedRowsChange={commonFeaturesDataGridStore.setSelectedRows}
        onRowsChange={commonFeaturesDataGridStore.setRows}
        sortColumns={commonFeaturesDataGridStore.sortColumns}
        onSortColumnsChange={commonFeaturesDataGridStore.setSortColumns}
        summaryRows={commonFeaturesDataGridStore.summaryRows}
        className="fill-grid"
      />
    );

    return(
        <>
          <div className={toolbarClassname}>
              <ExportButton onExport={() => exportToCsv(gridElement, 'CommonFeatures.csv')}>
              Export to CSV
              </ExportButton>
              <ExportButton onExport={() => exportToXlsx(gridElement, 'CommonFeatures.xlsx')}>
              Export to XSLX
              </ExportButton>
              <ExportButton onExport={() => exportToPdf(gridElement, 'CommonFeatures.pdf')}>
              Export to PDF
              </ExportButton>
          </div>
          {gridElement}
        </>
    )
});

/*
  mobx 로 만들고 난 후 부터 안됨
  -> gridElement 는 잘 넘겨줌
     renderToStaticMarkup 함수로 마크업도 제대로 생성함
     단, 파일 저장 다이얼로그가 생성 전에 뜨는 게 문제임
*/
const ExportButton = ({onExport, children}) => {
    const [exporting, setExporting] = useState(false);
    return (
      <button
        disabled={exporting}
        onClick={async () => {
          setExporting(true);
          await onExport();
          setExporting(false);
        }}
      >
        {exporting ? 'Exporting' : children}
      </button>
    );
}

export default CommonFeaturesDataGrid;
