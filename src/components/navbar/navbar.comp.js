import React from 'react';

import {
  StyledHeader,
  HeaderContainer,
  BrandLogo,
  NavItemContainer,
  NavItem,
  NavItemRightContainer,
  NavItemRight,
  NavItemLeftContainer
} from './navbar.styled';

export default function Header() {
  return (
    <StyledHeader>
      <HeaderContainer>
        <BrandLogo>Logo</BrandLogo>

        <NavItemContainer>
          <NavItemLeftContainer>
            <NavItem>
              <i className='fas fa-server' />
              <span>data library</span>
            </NavItem>

            <NavItem>
              <i className='fas fa-project-diagram' />
              <span>Workflows</span>
            </NavItem>

            <NavItem>
              <i className='fas fa-play-circle' />
              <span>scheduler</span>
            </NavItem>

            <NavItem>
              <i className='fas fa-bug' />
              <span>error manager</span>
            </NavItem>

            <NavItem>
              <i className='fas fa-comment-dots' />
              <span>notifications</span>
            </NavItem>

            <NavItem>
              <i className='fas fa-chart-line' />
              <span>reports</span>
            </NavItem>
          </NavItemLeftContainer>

          <NavItemRightContainer>
            <NavItemRight>
              <i className='fas fa-question-circle' />
            </NavItemRight>

            <NavItemRight>
              <i className='fas fa-bullseye' />
            </NavItemRight>
          </NavItemRightContainer>
        </NavItemContainer>
      </HeaderContainer>
    </StyledHeader>
  );
}
