import React from 'react';

import { StyledButton } from './custom-button.styled';

export default function CustomButton({ children }) {
  return <StyledButton>{children}</StyledButton>;
}
