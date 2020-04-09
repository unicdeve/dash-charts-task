import React from 'react';

import { ActivityStreamWrapper } from './activity-stream.styled';
import DataHeader from '../data-header/data-header.comp';
import DisplayData from '../display-data/display-data';

const data = [
  {
    text: 'Premium less than zero',
    mutedText: 'MARKETING WORKFLOW 1',
    leftText: 'Today',
    icon: 'fa-server'
  },
  {
    text: 'Sum insured less than zero',
    mutedText: 'MARKETING WORKFLOW 1',
    leftText: 'Today',
    icon: 'fa-project-diagram'
  },
  {
    text: 'Incorrect city names & address',
    mutedText: 'MARKETING WORKFLOW 1',
    leftText: 'Today',
    icon: 'fa-play-circle'
  },
  {
    text: 'Discharge data before admission date',
    mutedText: 'MARKETING WORKFLOW 1',
    leftText: 'Today',
    icon: 'fa-bug'
  },
  {
    text: 'Wrong telephone numbers',
    mutedText: 'MARKETING WORKFLOW 1',
    leftText: 'Today',
    icon: 'fa-comment-dots'
  }
];

export default function ActivityStream() {
  return (
    <ActivityStreamWrapper className='mr-5'>
      <DataHeader title='Activity Stream' />

      <DisplayData data={data} />
    </ActivityStreamWrapper>
  );
}
