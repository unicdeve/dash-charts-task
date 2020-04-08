import React from 'react';

import CustomTitle from '../custom-title/custom-title.comp';
import {
  StyledHeader,
  HeaderContainer,
  HeaderItemContainer,
  HeaderItem
} from './header.styled';

export default function Header() {
  return (
    <StyledHeader>
      <HeaderContainer>
        <CustomTitle title='Data Statistics' />

        <HeaderItemContainer>
          <HeaderItem color='#51b0f1'>
            <i className='fas fa-bullseye' />
            <span>data library</span>
          </HeaderItem>

          <HeaderItem color='#51b0f1'>
            <i className='fas fa-bullseye' />
            <span>No. of errors detected</span>
          </HeaderItem>

          <HeaderItem>
            <i className='fas fa-bullseye' />
            <span>No. of errors fixed</span>
          </HeaderItem>

          <HeaderItem>
            <i className='fas fa-bullseye' />
            <span>No. of errors unassigned</span>
          </HeaderItem>

          <HeaderItem>
            <i className='fas fa-bullseye' />
            <span>No. of errors assigned</span>
          </HeaderItem>
          <HeaderItem>
            <span>This month</span>
          </HeaderItem>
        </HeaderItemContainer>
      </HeaderContainer>
    </StyledHeader>
  );
}
