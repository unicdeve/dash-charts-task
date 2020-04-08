import React from 'react';

import {
  StyledNavbar,
  NavbarContainer,
  BrandLogo,
  NavItemContainer,
  NavItem,
  NavItemRightContainer,
  NavItemRight,
  NavItemLeftContainer
} from './navbar.styled';

export default function Navbar() {
  return (
    <StyledNavbar>
      <NavbarContainer>
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
              <i className='fas fa-registered' />
            </NavItemRight>
          </NavItemRightContainer>
        </NavItemContainer>
      </NavbarContainer>
    </StyledNavbar>
  );
}
