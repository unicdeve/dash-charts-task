import React from 'react';

import Navbar from '../navbar/navbar.comp';
import { Container } from './layout.styled';

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <Container>{children}</Container>
    </div>
  );
}
