import styled from 'styled-components';

export const StyledHeader = styled.div`
  width: 100%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 2;
`;

export const HeaderItem = styled.div`
  margin-left: 2.2rem;
  color: ${props => (props.color ? props.color : 'rgba(0, 0, 0, 0.5)')};
  cursor: pointer;

  i.fas {
    font-size: 14px;
  }

  span {
    text-transform: capitalize;
    font-size: 14px;
    margin-left: 0.2rem;
  }
`;
