import styled from 'styled-components';

export const DisplayDataContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.11);
  padding: 8px;
`;

export const DataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  line-height: 1;
`;

export const RightContent = styled.div`
  display: flex;

  i {
    color: #51b0f1;
    margin-right: 0.6rem;
  }
`;

export const MainText = styled.div`
  font-weight: bold;

  span {
    font-size: 55%;
  }
`;

export const MutedText = styled.div`
  font-size: 70%;
  color: #ccc !important;
`;

export const LeftContent = styled.div``;
