import React from 'react';

import { TopErrorWrapper } from './top-errors.styled';
import DataHeader from '../data-header/data-header.comp';

export default function TopErrors() {
  return (
    <TopErrorWrapper className='mr-2'>
      <DataHeader title='Top Errors' />
    </TopErrorWrapper>
  );
}
