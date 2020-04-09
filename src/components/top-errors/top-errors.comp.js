import React from 'react';

import { TopErrorWrapper } from './top-errors.styled';
import DataHeader from '../data-header/data-header.comp';
import DisplayData from '../display-data/display-data';

const data = [
  {
    text: 'Premium less than zero',
    mutedText: 'MARKETING WORKFLOW 1',
    badge: 'High',
    badgeColor: 'danger',
    leftText: '1500'
  },
  {
    text: 'Sum insured less than zero',
    mutedText: 'MARKETING WORKFLOW 1',
    badge: 'High',
    badgeColor: 'danger',
    leftText: '1500'
  },
  {
    text: 'Incorrect city names & address',
    mutedText: 'MARKETING WORKFLOW 1',
    badge: 'medium',
    badgeColor: 'warning',
    leftText: '1500'
  },
  {
    text: 'Discharge data before admission date',
    mutedText: 'MARKETING WORKFLOW 1',
    badge: 'high',
    badgeColor: 'danger',
    leftText: '1500'
  },
  {
    text: 'Wrong telephone numbers',
    mutedText: 'MARKETING WORKFLOW 1',
    badge: 'low',
    badgeColor: 'success',
    leftText: '1500'
  }
];

export default function TopErrors() {
  return (
    <TopErrorWrapper className='mr-5'>
      <DataHeader title='Top Errors' />

      <DisplayData data={data} />
    </TopErrorWrapper>
  );
}
