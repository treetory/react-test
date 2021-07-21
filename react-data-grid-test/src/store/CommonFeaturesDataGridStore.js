import { action, makeObservable, observable } from "mobx";
import faker from 'faker';

/*
    faker 를 이용하여 mock-up 데이터를 생성
*/
const createRows = () => {
    const now = Date.now();
    const rows = [];
    
    for (let i = 0; i < 1000; i++) {
        rows.push({
            id: i,
            title: `Task #${i + 1}`,
            client: faker.company.companyName(),
            area: faker.name.jobArea(),
            country: faker.address.country(),
            contact: faker.internet.exampleEmail(),
            assignee: faker.name.findName(),
            progress: Math.random() * 100,
            startTimestamp: now - Math.round(Math.random() * 1e10),
            endTimestamp: now + Math.round(Math.random() * 1e10),
            budget: 500 + Math.random() * 10500,
            transaction: faker.finance.transactionType(),
            account: faker.finance.iban(),
            version: faker.system.semver(),
            available: Math.random() > 0.5
        });
    }

    return rows;
}

/*
    컬럼 정렬 시, 비교함수 정의
*/
const getComparator = (sortColumn) => {
    switch (sortColumn) {
      case 'assignee':
      case 'title':
      case 'client':
      case 'area':
      case 'country':
      case 'contact':
      case 'transaction':
      case 'account':
      case 'version':
        return (a, b) => {
          return a[sortColumn].localeCompare(b[sortColumn]);
        };
      case 'available':
        return (a, b) => {
          return a[sortColumn] === b[sortColumn] ? 0 : a[sortColumn] ? 1 : -1;
        };
      case 'id':
      case 'progress':
      case 'startTimestamp':
      case 'endTimestamp':
      case 'budget':
        return (a, b) => {
          return a[sortColumn] - b[sortColumn];
        };
      default:
        throw new Error(`unsupported sortColumn: "${sortColumn}"`);
    }
}

/*
    CommonFeatureDataGrid 의 mobx store
*/
class CommonFeaturesDataGridStore {
    rows = [];                  // 그리드의 데이터
    countries = [];             // select box 의 option 데이터
    sortColumns = [];           // 정렬 대상 컬럼 선택된 것
    selectedRows = new Set();   // 체크된 row 의 index 저장
    summaryRows = [];           // 전체 rows 의 현황

    constructor(rows) {
        makeObservable(this, {
            rows: observable,
            countries: observable,
            // sortColumns: observable,
            selectedRows: observable,
            // summaryRow: observable,
            rowKeyGetter: action,
            setSortColumns: action,
            sortedRows: action,
            setRows: action,
            setSelectedRows: action
        });
        this.rows = rows;
        this.countries = [...new Set(rows.map(r => r.country))].sort(new Intl.Collator().compare);
        this.summaryRows = this.setSummaryRows(this.rows);
    }
    /*
        react component 의 key 생성을 위함 (row)
    */
    rowKeyGetter = (row) => {
        return row.id;
    }
    /*
        정렬 대상 클릭 -> 정렬 대상 저장
    */
    setSortColumns = (columns) => {
        this.sortColumns = columns;
        this.sortedRows();
    }
    /*
        정렬을 수행하는 함수
    */
    sortedRows= () => {
        if (this.sortColumns.length === 0) return this.rows;
        
        const _sortedRows = [...this.rows];
        _sortedRows.sort((a,b) => {
            for (const sort of this.sortColumns) {
                // 각 컬럼에 맞는 정렬 비교식을 가져옴
                const comparator = getComparator(sort.columnKey);
                // 정렬을 수행
                const compResult = comparator(a, b);
                // 정렬 결과를 확인 -> 비교 결과, 정렬이 필요할 때
                if (compResult !== 0) {
                    // ASC 이면 결과 그대로, DESC 이면 반대로
                    return sort.direction === 'ASC' ? compResult : -compResult;
                }
            }
            return 0;
        });
        this.rows = _sortedRows;
    }
    /*
        아래 처럼 this 로 접근하지 못하는... 즉, scope 의 범주가 달라지는
        호출이 일어나는 함수는 store 에 둘 필요가 없어 보인다.
        -> store 에 접근을 어차피 내부적으로 하지 못하니까...
           실제로 CommonFeatures 예제를 보면 함수형 react component 내부에
           hook 을 이용하여 처리했다. 
        -> 그래서 observable 에서 해당 변수도 제거...
    */
    /*
        rows 의 값의 변화가 있을 때, store 의 rows 에 해당 변화를 반영
    */
    setRows = (...args) => {
        const _rows = args[0];
        // const _columns = args[1];
        commonFeaturesDataGridStore.rows = _rows;
    }
    /*
        선택된 row 를 selectedRows 에 반영
    */
    setSelectedRows = (selectedRow) => {
        var _seletedRow = new Set();
        for (let v of selectedRow.values()) _seletedRow.add(v);
        commonFeaturesDataGridStore.selectedRows = _seletedRow;
    }
    /*
        summaryRows 정보를 생성
    */
    setSummaryRows = (rows) => {
        const summaryRows = {
            id: 'total_0',
            totalCount: rows.length,
            yesCount: rows.filter((r) => r.available).length
        };
        return [summaryRows];
    }
}

const commonFeaturesDataGridStore = new CommonFeaturesDataGridStore(
    createRows()
);
export default commonFeaturesDataGridStore;