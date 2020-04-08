import styled from 'styled-components';

export const StyledNavbar = styled.div`
  width: 100%;
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.11);
`;

export const NavbarContainer = styled.div`
  display: flex;
  padding: 10px 20px;
`;

export const BrandLogo = styled.div`
  font-size: 18px;
`;

export const NavItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 2;
  align-items: center;
  margin-left: 1.5rem;
`;

export const NavItemLeftContainer = styled.div`
  display: flex;
`;

export const NavItem = styled.div`
  width: auto;
  margin-left: 2.2rem;
  cursor: pointer;

  i.fas {
    color: #51b0f1;
    font-size: 14px;
  }

  span {
    text-transform: capitalize;
    font-size: 14px;
    margin-left: 0.1rem;
  }
`;

export const NavItemRightContainer = styled.div`
  display: flex;
  text-align: right;
`;

export const NavItemRight = styled.div`
  margin-left: 1rem;
  cursor: pointer;

  i.fas {
    color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
  }
`;
