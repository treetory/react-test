import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import MobXContext from "../store/mobXContext";
import DonutChartWithLabel from "../components/DonutChartWithLabel";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

const HrdStatistics: React.FC = observer((props) => {
  
  // store 사용을 위해 rootStore 로부터 얻어오기
  const store = useContext(MobXContext).donutStatisticsStore;
  // router 에서 전달된 parameter 추출
  const { pathname } = useLocation();           // location 에 지정된 URL 을 읽을 때
  const { sampleId } = useParams();             // URL path 에 지정된 파라미터를 읽을 때
  const [ searchParams ] = useSearchParams();   // URL query string 을 읽을 때
  console.warn(pathname, searchParams.toString(), sampleId);
  store.setParam(2403, 'a');
  
  const chartContainerStyle = {
    display: 'inline-flex',
    flexFlow: 'inherit',
    justifyContent: 'space-around',
    marginTop: '10px',
  } as React.CSSProperties;

  const chartDiv = {
    display:'flex',
    width: '400px',
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

  if (
    store.getLeftDonutData().length > 0 && 
    store.getRightDonutData().length > 0
    ) {
    return (
      <div style={chartContainerStyle} id={"hrdStatistics"}>
        <div style={chartDiv}>
            <DonutChartWithLabel 
              data={store.getDonutData('LEFT')} 
              type={store.type} 
              donutType={'LEFT'} 
              colors={colors} />
        </div>
        <div style={chartDiv}>
            <DonutChartWithLabel 
              data={store.getDonutData('cnt_TIER_PATHOGENICITY')} 
              type={store.type} 
              donutType={'cnt_TIER_PATHOGENICITY'} 
              colors={colors} />
        </div>
      </div>
    );
  }
  return (
    <div style={chartContainerStyle}>
      <h1>Nothing</h1>
    </div>
  );
});
export default HrdStatistics;
