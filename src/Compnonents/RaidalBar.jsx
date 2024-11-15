/** @format */

import React from "react";
import { RadialBarChart, Legend, Tooltip } from "recharts";
import { useGetDasboardStatsQuery } from "../redux/slices/api/taskApiSlice";

function RadialBar() {
  const { data: apiData, isLoading, error } = useGetDasboardStatsQuery();
  const graphData = apiData?.graphData;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <RadialBarChart
        width={730}
        height={250}
        innerRadius="10%"
        outerRadius="80%"
        data={graphData}
        startAngle={180}
        endAngle={0}
      >
        <RadialBar
          minAngle={15}
          label={{ fill: "#666", position: "insideStart" }}
          background
          clockWise={true}
          dataKey="uv"
        />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          align="right"
          fill="#8884d8"
        />
        <Tooltip />
      </RadialBarChart>
    </div>
  );
}

export default RadialBar;
