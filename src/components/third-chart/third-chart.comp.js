import React from 'react';

import DataQualityPie from '../data-quality-pie/data-quality-pie.comp';
import HighestBusinessImpact from '../highest-business-impact/highest-business-impact.comp';
import ActivityStream from '../activity-stream/activity-stream';

import { Wrapper, ChatsContainer } from './third-chart.styled';

export default function SecondChart() {
  return (
    <Wrapper className='mt-5'>
      <ChatsContainer>
        <DataQualityPie />
        <HighestBusinessImpact />
        <ActivityStream />
      </ChatsContainer>
    </Wrapper>
  );
}
