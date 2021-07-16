import Chart from "react-apexcharts";

const ChartComponent = (props) => {
    console.warn(props);
    return (
        <div>
            <Chart
                height={props.height}
                options={props.options}
                series={props.series}
                type={props.type}
            ></Chart>
        </div>
    )
}

export default ChartComponent;