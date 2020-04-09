import React from 'react';

import DataQualityPie from '../data-quality-pie/data-quality-pie.comp';
import TopErrors from '../top-errors/top-errors.comp';
import AssignedToMe from '../assigned-to-me/assigned-to-me.comp';

import { Wrapper, ChatsContainer } from './second-chart.styled';

export default function SecondChart() {
  return (
    <Wrapper className='mt-5'>
      <ChatsContainer>
        <DataQualityPie />
        <TopErrors />
        <AssignedToMe />
      </ChatsContainer>
    </Wrapper>
  );
}
