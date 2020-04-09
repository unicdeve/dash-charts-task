import React from 'react';

import DataHeader from '../data-header/data-header.comp';
import { AssignedToMeWrapper } from './assigned-to-me.styled';
import DisplayData from '../display-data/display-data';

const data = [
  {
    text: 'Premium less than zero',
    mutedText: 'MARKETING WORKFLOW 1',
    badge: 'High',
    badgeColor: 'danger'
  },
  {
    text: 'Sum insured less than zero',
    mutedText: 'MARKETING WORKFLOW 1',
    badge: 'High',
    badgeColor: 'danger'
  },
  {
    text: 'Incorrect city names & address',
    mutedText: 'MARKETING WORKFLOW 1',
    badge: 'medium',
    badgeColor: 'warning'
  },
  {
    text: 'Discharge data before admission date',
    mutedText: 'MARKETING WORKFLOW 1',
    badge: 'high',
    badgeColor: 'danger'
  },
  {
    text: 'Wrong telephone numbers',
    mutedText: 'MARKETING WORKFLOW 1',
    badge: 'low',
    badgeColor: 'success'
  }
];

export default function AssignedToMe() {
  return (
    <AssignedToMeWrapper>
      <DataHeader title='Assigned to Me' />

      <DisplayData data={data} />
    </AssignedToMeWrapper>
  );
}
