import React, { useEffect, useRef } from "react";
import styled from 'styled-components';
import * as d3 from 'd3';
import { observer } from "mobx-react-lite";

const Donut = styled.svg`
  font-family: 'Roboto', sans-serif;
  .textTop {
    font-size: 18px;
  }
  .textBottom {
    font-size: 30px;
    font-weight: bolder;
  }
  .annotation {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
  }
`;

const Legend = styled.svg`
  font-size: 12px;
  width: auto;
  height: auto;
`;

const ChartDiv = styled.div`
  width: auto;
  height: 100%;
`;

const LegendDiv = styled.div`
  width: inherit;
`;

export interface IDonutChartProps {
  data: DonutData[];
  type: string;
  donutType: string;
  colors: any;
}

export interface DonutData {
  label: string;
  value: number;
}

const DonutChartWithLabel = observer((props: IDonutChartProps) => {

  const data = props.data;
  const colors = props.colors;
    
  const svgRef = useRef<SVGSVGElement | null>(null);
  const margin = {
    top: 5, right: 5, bottom: 12.5, left: 2.5
  }
  const width = 230;
  const height = 230;
  const graphWidth = width - margin.left - margin.right;
  const graphHeight = height - margin.top - margin.bottom;

  // The radius of the pieplot is half the width or half the height (smallest one). and substract the size of margin
  const radius = Math.min(graphWidth, graphHeight) / 2 - 30;
  const innerRadius = 30;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const arcLabel = () => {
    return d3.arc().innerRadius(innerRadius).outerRadius(radius);
  }

  useEffect(() => {

    // append the svg object to the SVGSVGElement
    const svg = d3.select(svgRef.current);

    const arc: any = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(radius);

    const arcOver: any = d3.arc()
      .innerRadius(innerRadius * 1.05)
      .outerRadius(radius * 1.05);

    // Compute the position of each group on the pie
    const pie: any = d3.pie()
      .value((d: any) => d.value)
      .padAngle(0.01);
    
    // add pie
    svg
      .append("g")
      .selectAll(".slice")
      .data(pie(data))
      .join("path")
        .attr('fill', (d: any) => {
          return colors[d.index];
        })
        .attr('d', arc)
        .attr("stroke", "white")
        .style("stroke-width", "0.5px")
        .style("opacity", 0.7)
        .on("mouseover", function(event) {
          d3.select(this)
            .transition()
            .duration(200)
            .attr("d", arcOver)
        })
        .on("mouseout", function() {
          d3.select(this)
            .transition()
            .duration(100)
            .attr('d', arc)
        })
      .transition()
      .duration(1000)
      .attrTween('d', (d: any) => {
        // return an interpolater
        const interpolate = d3.interpolate({
          startAngle: 0,
          endAngle: 0
        }, d);
        return function(t: number) {
          return arc(interpolate(t));
        }
      })
    
    // add annotation
    svg
    .append("g")
    .attr("font-size", 12)
    .attr("text-anchor", "middle")
    .selectAll(".annotation")
    .data(pie(data.filter(d => d.value > 0)))
    .join("text")
      .transition()
      .duration(800)
      .text((d: any) => d.data.value)
      .attr("transform", (d: any) => `translate(${arcLabel().centroid(d)})`)
      .attr("dy", "0.4em")
      .attr("text-anchor", "middle")
      .attr("fill", 'black')
    .transition()

  }, [arcLabel, radius, data, colors])

  // to minify the label as a abbreviation
  const getLabel = (label: string) => {
      return label;
  }

  return (
    <>
      <ChartDiv>
        <Donut
          width={graphWidth}
          height={graphHeight}
          // pan left, pan up & zoom out and show double the content
          // viewBox={`${-graphWidth/2} ${-graphHeight/2} ${graphWidth} ${graphHeight}`}
          preserveAspectRatio="xMinYMin"
        >
          <g
            ref={svgRef}
            transform={`translate(${graphWidth/2}, ${graphHeight/2})`}
          />
        </Donut>
      </ChartDiv>
      <LegendDiv>
        <Legend>
        {data.map(({ label, value }, index) =>
          <g key={index}>
            <rect
              y={index * 20}
              width={20}
              height={15}
              fill={colors[index]}
            />
            <text
              x={35}
              y={12 + index * 20}
              fill='black'
              textAnchor='left'
            >
              {`${getLabel(label)}`}
            </text>
          </g>
        )}
        </Legend>
      </LegendDiv>
    </>
  );
})

export default DonutChartWithLabel;