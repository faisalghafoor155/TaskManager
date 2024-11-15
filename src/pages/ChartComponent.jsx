/** @format */

import React from "react";
import { Chart } from "../Compnonents";
import { useGetDasboardStatsQuery } from "../redux/slices/api/taskApiSlice";
import RaidalBar from "../Compnonents/RaidalBar";

function ChartComponent() {
  const { data, isLoading, error } = useGetDasboardStatsQuery();
  const graphData = data?.graphData;
  return (
    <div className="w-full  bg-white my-16 p-4 rounded shadow-sm">
      <h4 className="text-xl text-gray-500 font-bold mb-2">
        Chart by Priority
      </h4>
      <Chart data={graphData} />
    </div>
  );
}

export default ChartComponent;
