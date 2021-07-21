/*
    CommonFeaturesDataGrid 에서 import 를 못함... 그래서 못 쓰고 있음
    -> 이유 찾아야 함.
*/
const CurrencyFormatter = ({value}) => {
    const dateFormatter = new Intl.DateTimeFormat(navigator.language);
    return <>{dateFormatter.format(value)}</>
}

export default CurrencyFormatter;