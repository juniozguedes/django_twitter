import React from 'react';

import Menu from '../../components/Menu';
import Trends from '../../components/Trends';
import Timeline from '../../components/Timeline';
import { Container } from './styles';

function Home() {
  return (
    <Container>
      <Menu />
      <Timeline />
      <Trends />
    </Container>
  );
}

export default Home;
