import React from 'react';

import DataHeader from '../data-header/data-header.comp';
import { AssignedToMeWrapper } from './assigned-to-me.styled';

export default function AssignedToMe() {
  return (
    <AssignedToMeWrapper className='mr-2'>
      <DataHeader title='Assigned to Me' />
    </AssignedToMeWrapper>
  );
}
