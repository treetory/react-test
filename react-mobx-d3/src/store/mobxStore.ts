import { DonutStatisticsStore } from "./donutStatisticsStore";

class MobXStore {
  readonly donutStatisticsStore: DonutStatisticsStore;

  constructor() {
    this.donutStatisticsStore = new DonutStatisticsStore(this);
  }
}

export default MobXStore;
