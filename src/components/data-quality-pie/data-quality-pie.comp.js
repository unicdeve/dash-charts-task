import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

import { DataPieWrapper, PieContainer } from './data-quality-pie.styled';
import DataHeader from '../data-header/data-header.comp';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group D', value: 200 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export default function DataQualityPie() {
  return (
    <DataPieWrapper className='mr-5'>
      <DataHeader title='Data Quality Index' />

      <PieContainer>
        <PieChart width={215} height={270} className='pie-chart' margin={2}>
          <Pie
            data={data}
            innerRadius={70}
            outerRadius={80}
            fill='#8884d8'
            dataKey='value'
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </PieContainer>
    </DataPieWrapper>
  );
}
