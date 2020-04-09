import React from 'react';

import { DataPieWrapper, PieContainer } from './data-quality-pie.styled';
import DataHeader from '../data-header/data-header.comp';

export default function DataQualityPie() {
  return (
    <DataPieWrapper className='mr-2'>
      <DataHeader title='Data Quality Index' />

      <PieContainer>pie chart here</PieContainer>
    </DataPieWrapper>
  );
}
