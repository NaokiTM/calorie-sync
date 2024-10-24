'use client'
import React from 'react'
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

export default function Caloriepie() {
  const data1 = [
    { name: 'Group A', value: 50 },
    { name: 'Group B', value: 50 },
    { name: 'Group C', value: 10 },
    { name: 'Group D', value: 47 },
  ];

  const data2 = [
    { name: 'Group A', value: 40 },
    { name: 'Group B', value: 50 },
    { name: 'Group C', value: 20 },
    { name: 'Group D', value: 47 },
  ];

  return (
    <>
      <PieChart width={730} height={250}>
        {/* First Pie chart */}
        <Pie
          data={data1}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
        />
        {/* Second Pie chart */}
        <Pie
          data={data2}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
        <Tooltip />
        <Legend />
      </PieChart>
    </>
  )
}