import React from 'react';
import {Cell, Pie, PieChart, ResponsiveContainer} from 'recharts';
import data from './data';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartWithPaddingAngle = () => {

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie dataKey="value"
             data={data}
             cx="35%"
             cy="50%"
             innerRadius={60}
             outerRadius={80}
             fill="#3367d6"
             paddingAngle={5}
        >
          {
            data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
        <Pie dataKey="value"
             data={data}
             cx="70%"
             cy="50%"
             startAngle={180}
             endAngle={0}
             innerRadius={60}
             outerRadius={80}
             fill="#3367d6"
             paddingAngle={5}
        >
          {
            data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}

export default PieChartWithPaddingAngle;
