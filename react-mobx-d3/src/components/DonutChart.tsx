import React, { useEffect, useRef } from "react";
import styled from "styled-components";
// import { select, Selection } from 'd3-selection'
import * as d3 from "d3";
import { observer } from "mobx-react-lite";

const Donut = styled.svg`
  font-family: "Roboto", sans-serif;
  .textTop {
    font-size: 18px;
  }
  .textBottom {
    font-size: 30px;
    font-weight: bolder;
  }
  .annotation {
    font-family: "Roboto", sans-serif;
    font-size: 12px;
  }
`;

const Legend = styled.svg`
  font-size: 12px;
  width: inherit;
  height: inherit;
`;

const ChartDiv = styled.div`
  width: auto;
  height: 100%;
`;

const LegendDiv = styled.div`
  width: 150px;
`;

export interface IDonutChartProps {
  data: Array<DonutData>;
  type: string;
}

export interface DonutData {
  label: string;
  value: number;
}

const DonutChart = observer((props: IDonutChartProps) => {
  console.warn(props);

  const _data = props.data;

  const svgRef = useRef<SVGSVGElement | null>(null);
  const margin = {
    top: 5,
    right: 5,
    bottom: 12.5,
    left: 2.5,
  };
  const width = 300;
  const height = 300;
  const graphWidth = width - margin.left - margin.right;
  const graphHeight = height - margin.top - margin.bottom;

  // The radius of the pieplot is half the width or half the height (smallest one). and substract the size of margin
  const radius = Math.min(graphWidth, graphHeight) / 2 - 50;
  const innerRadius = 50;

  const colorExtent = d3.extent(_data, (data) => data.value) as [
    number,
    number
  ];
  const colorScale = d3.scaleLinear().domain(colorExtent).range([0, 1]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const colored = (t: number) => d3.interpolatePuBu(colorScale(t));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const arcLabel = () => {
    return d3.arc().innerRadius(innerRadius).outerRadius(radius);
  };

  useEffect(() => {
    // append the svg object to the SVGSVGElement
    const svg = d3.select(svgRef.current);

    // const textTop = svg
    //   .append('text')
    //   .style('text-anchor', 'middle')
    //   .attr('class', 'textTop')
    //   .text('TOTAL')
    //   .attr('y', -10);

    // const textBottom = svg
    //   .append('text')
    //   .attr('dy', '0.3em')
    //   .style('text-anchor', 'middle')
    //   .attr('class', 'textBottom')
    //   .text(total + 'm')
    //   .attr('y', 10);

    const arc: any = d3.arc().innerRadius(innerRadius).outerRadius(radius);

    const arcOver: any = d3
      .arc()
      .innerRadius(innerRadius + 5)
      .outerRadius(radius + 5);

    // Compute the position of each group on the pie
    const pie: any = d3
      .pie()
      .value((d: any) => d.value)
      .padAngle(0.01);

    // add pie
    svg
      .append("g")
      .selectAll(".slice")
      .data(pie(_data))
      .join("path")
      .attr("fill", (d: any) => colored(d.value))
      .attr("d", arc)
      .on("mouseover", function (event) {
        // const currentTarget: any = d3.select(event.currentTarget);
        d3.select(this).transition().duration(200).attr("d", arcOver);
        // textTop
        //    .text(currentTarget.datum().data.label)
        //   .attr("y", -10)
        // textBottom
        //   .text(currentTarget.datum().data.value + 'm')
        //   .attr("y", 10)
      })
      .on("mouseout", function () {
        d3.select(this).transition().duration(100).attr("d", arc);
        // textTop
        //   .text("TOTAL")
        //   .attr('y', -10)
        // textBottom
        //   .text(total + 'm');
      })
      .transition()
      .duration(1000)
      .attrTween("d", (d: any) => {
        // return an interpolater
        const interpolate = d3.interpolate(
          {
            startAngle: 0,
            endAngle: 0,
          },
          d
        );
        return function (t: number) {
          return arc(interpolate(t));
        };
      });

    // add annotation
    svg
      .append("g")
      .attr("font-size", 12)
      .attr("text-anchor", "middle")
      .selectAll(".annotation")
      .data(pie(_data))
      .join("text")
      .transition()
      .duration(800)
      .text((d: any) => d.data.label + " [" + d.data.value + "]")
      .attr("transform", (d: any) => `translate(${arcLabel().centroid(d)})`)
      .attr("dy", "0.4em")
      .attr("text-anchor", "middle")
      .attr("fill", "black")
      .transition();
  }, [arcLabel, colored, radius, _data]);

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
            transform={`translate(${graphWidth / 2}, ${graphHeight / 2})`}
          />
        </Donut>
      </ChartDiv>
      <LegendDiv>
        <Legend>
          {_data.map(({ label, value }, index) => (
            <g key={index}>
              <rect
                y={index * 20}
                width={20}
                height={15}
                fill={colored(value)}
              />
              <text x={35} y={12 + index * 20} fill="black" textAnchor="left">
                {label}
              </text>
            </g>
          ))}
        </Legend>
      </LegendDiv>
    </>
  );
});

export default DonutChart;
