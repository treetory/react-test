// import { default as axios } from "axios";
import faker from "faker";
import { DonutData } from "../components/DonutChartWithLabel";

/**
 * LEFT 도넛 데이터의 목업 생성
 * 
 * @author treetory@gmail.com
 * @param sampleId 
 * @returns Promise<DonutData[]>
 */
export function getLeftDonutData(
    sampleId: number
  ): Promise<DonutData[]> {
    return Promise.resolve(generateData());
  }

/**
 * RIGHT 도넛 데이터의 목업 생성
 * 
 * @author treetory@gmail.com
 * @param sampleId 
 * @returns Promise<DonutData[]>
 */
export function getRightDonutData(
  sampleId: number
): Promise<DonutData[]> {
  return Promise.resolve(generateData());
  }

function generateData(): DonutData[] {

  let data = new Array<DonutData>();
  const cnt: number = Math.floor( ( Math.random() * (10 - 5) + 1 ) );
  for (let i=0; i<cnt; i++) {
    data.push({
      label: faker.address.city(),
      value: Math.floor(Math.random() * 100)
    });
  }

  return data;
}