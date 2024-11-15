/** @format */

import React from "react";
import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import { useGetDasboardStatsQuery } from "../redux/slices/api/taskApiSlice";

function PieCharts() {
  const { data } = useGetDasboardStatsQuery();
  const totals = data?.tasks || [];

  const stats = [
    {
      _id: "1",
      label: "TOTAL TASK",
      total: data?.totalTasks || 0,
      bg: "#1d4ed8",
    },
    {
      _id: "2",
      label: "COMPLETED TASK",
      total: totals["completed"] || 0,
      bg: "#0f766e",
    },
    {
      _id: "3",
      label: "TASK IN PROGRESS",
      total: totals["in progress"] || 0,
      bg: "#f59e0b",
    },
    {
      _id: "4",
      label: "TODOS",
      total: totals["todo"] || 0,
      bg: "#be185d",
    },
  ];

  return (
    <ResponsiveContainer
      width="50%"
      height={500}
      style={{
        fontSize: "8px",
        fontWeight: "semi-bold",
      }}
    >
      <PieChart>
        <Pie
          data={stats}
          dataKey="total"
          nameKey="label"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label={({ name, percent }) =>
            `${name}: ${(percent * 100).toFixed(0)}%`
          }
          labelLine={true}
          labelPosition="outside"
        >
          {stats.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={entry.bg}
              stroke="none"
              strokeWidth={0}
            />
          ))}
        </Pie>
        <Tooltip
          cursor={false}
          contentStyle={{ textTransform: "capitalize" }}
        />
        <Legend
          wrapperStyle={{ fontSize: "12px", fontWeight: "bold" }}
          nameKey="label"
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default PieCharts;
