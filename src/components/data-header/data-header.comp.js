import React from 'react';

import { HeaderContainer } from './data-header.styled';
import CustomTitle from '../custom-title/custom-title.comp';
import CustomButton from '../custom-button/custom-button';

export default function DataHeader({ title }) {
  return (
    <HeaderContainer>
      <CustomTitle title={title} />
      <CustomButton>
        More
        <i className='fas fa-angle-right ml-1' />
      </CustomButton>
    </HeaderContainer>
  );
}
