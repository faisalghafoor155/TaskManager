/** @format */

import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from "recharts";
import { useGetDasboardStatsQuery } from "../redux/slices/api/taskApiSlice";

const Chart = () => {
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
    { _id: "4", label: "TODOS", total: totals["todo"] || 0, bg: "#be185d" },
  ];

  return (
    <ResponsiveContainer
      width="50%"
      height={500}
      style={{
        fontSize: "7px",
        fontWeight: "semi-bold",
      }}
    >
      <BarChart data={stats}>
        <XAxis
          data={stats}
          dataKey="total"
          nameKey="label"
          label={({ name, percent }) =>
            `${name}: ${(percent * 100).toFixed(0)}%`
          }
        />
        <YAxis />
        <Tooltip
          cursor={false}
          contentStyle={{ textTransform: "capitalize" }}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="total">
          {stats.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.bg} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
