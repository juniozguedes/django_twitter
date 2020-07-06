import React from 'react';

import Menu from '../../components/Menu';
import Timeline from '../../components/Timeline';
import { Container } from './styles';

function Home() {
  return (
    <Container>
      <Menu />
      <Timeline />
    </Container>
  );
}

export default Home;
