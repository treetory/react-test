import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import MobXContext from "../store/mobXContext";
import DonutChartWithLabel from "../components/DonutChartWithLabel";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

const HrdStatistics: React.FC = observer((props) => {
  
  // store 사용을 위해 rootStore 로부터 얻어오기
  const store = useContext(MobXContext).donutStatisticsStore;
  
  const { pathname } = useLocation();           // location 에 지정된 URL 을 읽을 때
  const { sampleId } = useParams();             // URL path 에 지정된 파라미터를 읽을 때
  const [ searchParams ] = useSearchParams();   // URL query string 을 읽을 때
  
  /**
   *  React Router V6 에서는 
   *    - URL location 은 useLocation() hook 으로
   *    - path parameter 은 useParams() hook 으로
   *    - URL query string 은 useSearchParams() hook 으로
   *  받는다.
   * 
   *  V5 는 props 로 전달이 가능했으나 V6 는 금지되었다.
   */
  const params = Object.fromEntries(searchParams.entries());
  store.setParam(Number.parseInt(sampleId!), params['type']);
  
  const chartContainerStyle = {
    display: 'inline-flex',
    flexFlow: 'inherit',
    justifyContent: 'space-around',
    marginTop: '10px',
  } as React.CSSProperties;

  const chartDivStyle = {
    display:'flex',
    //width: '400px',
    alignItems: 'end',
  } as React.CSSProperties;
  
  const colors: any = {
    0: "#CC0066",
    1: "#6600CC",
    2: "#0080FF",
    3: "#F6545C",
    4: "#FF9482",
    5: "#70ACF5",
    6: "#1F2D87",
    7: "#5a64a5",
  };

  const buttonDivStyle = {
    display: 'flex',
    flexFlow: 'inherit',
    justifyContent: 'end',
    margin: '10px',
  } as React.CSSProperties;

  if (
    store.getLeftDonutData().length > 0 && 
    store.getRightDonutData().length > 0
    ) {
    return (
      <>
        <div style={buttonDivStyle}>
          <button onClick={() => store.reloadDonutData()}>REFRESH</button>
        </div>
        <div style={chartContainerStyle} id={"statistics"}>
          <div style={chartDivStyle}>
              <DonutChartWithLabel 
                data={store.cnt_LEFT} 
                type={store.type}  
                colors={colors} />
          </div>
          <div style={chartDivStyle}>
              <DonutChartWithLabel 
                data={store.cnt_RIGHT} 
                type={store.type} 
                colors={colors} />
          </div>
        </div>
      </>
    );
  }
  return (
    <div style={chartContainerStyle}>
      <h1>Nothing</h1>
    </div>
  );
});
export default HrdStatistics;
