import { observable, action, makeObservable, when } from "mobx";
import { DonutData } from "../components/DonutChartWithLabel";
import { getLeftDonutData, getRightDonutData } from "../apis/donutStatisticsApi";
import MobXStore from "./mobxStore";

export class DonutStatisticsStore {
  rootStore: MobXStore;
  sampleId: number;                         // 샘플 ID
  type: string;
  cnt_LEFT : Array<DonutData>;              // LEFT 도넛 차트 데이터
  cnt_RIGHT: Array<DonutData>;              // RIGHT 도넛 차트 데이터
  
  constructor(rootStore: MobXStore) {
    makeObservable(this, {
      sampleId: observable,
      cnt_LEFT: observable,
      cnt_RIGHT: observable,
      setParam: action,
      getLeftDonutData: action,
      addLeftDonutData: action,
      getRightDonutData: action,
      addRightDonutData: action,
      getDonutData: action
    });
    this.rootStore = rootStore;
    this.sampleId = -1;
    this.type = "";
    this.cnt_LEFT = [];
    this.cnt_RIGHT = [];
    /**
     * sampleId 가 store 에 전달되었을 때,
     * API 호출이 일어나도록 구성하기 위함
     */
    when(
      () => {
        return this.sampleId > 0;
      },
      () => {
        // 왼쪽 도넛 차트 데이터 조회
        getLeftDonutData(this.sampleId).then(data => {
          if (!data) return;
          this.addLeftDonutData(data);
        });
        // 오른쪽 도넛 차트 데이터 조회
        getRightDonutData(this.sampleId).then(data => {
          if (!data) return;
          this.addRightDonutData(data);
        });
      }
    );
  }

  /**
   * store 에 주요 파라미터 셋업
   * 
   * @param sampleId 
   * @param type 
   */
  setParam(sampleId: number, type: string | undefined) {
    this.sampleId = sampleId;
    this.type = type === undefined ? '' : type;
  }

  /**
   * LEFT | RIGHT 여부에 따라 DonutChart에 바인딩 될 데이터를 가변적으로 반환
   * 
   * @param donutType 
   * @returns Array<DonutData>
   */
  getDonutData(donutType: string) {
    return donutType === 'LEFT' ? this.getLeftDonutData() : this.getRightDonutData();
  }

  /**
   * cnt_LEFT 도넛 데이터의 getter / setter
   * 
   * @returns Array<DonutData>
   */
  getLeftDonutData() {
    return this.cnt_LEFT;
  }

  addLeftDonutData(data: DonutData[]) {
    this.cnt_LEFT.push(...data);
  }

  /**
   * cnt_RIGHT 도넛 데이터의 getter / setter
   * 
   * @returns Array<DonutData>
   */
  getRightDonutData() {
    return this.cnt_RIGHT;
  }

  addRightDonutData(data: DonutData[]) {
    this.cnt_RIGHT.push(...data);
  }

}
