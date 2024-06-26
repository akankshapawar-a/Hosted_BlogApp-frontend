import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Country", "Popularity"],
  ["Germany", 200],
  ["United States", 800],
  ["Brazil", 400],
  ["Canada", 500],
  ["France", 600],
  ["India", 1100],
];

const Geochart: React.FC = () => {
  const handleChartSelect = ({ chartWrapper }: { chartWrapper: any }) => {
    const chart = chartWrapper.getChart();
    const selection = chart.getSelection();
    if (selection.length === 0) return;
    const region = data[selection[0].row + 1];
    console.log("Selected : " + region);
  };

  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: handleChartSelect,
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={data}
    />
  );
};

export default Geochart;
