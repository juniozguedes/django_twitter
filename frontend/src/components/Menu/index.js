import React from 'react';

import { GrTwitter } from 'react-icons/gr';
import {
  Bookmarks,
  Explore,
  Home,
  Lists,
  Profile,
  Notifications,
  More,
  Messages,
} from '../../assets';

import { Container } from './styles';

function Menu() {
  return (
    <Container>
      <section>
        <span>
          <GrTwitter size={30} color="#fff" />
        </span>
        <div>
          <Home color="#fff" size={26} />
          <p>Pagina Inicial</p>
        </div>
        <div>
          <Explore color="#fff" size={26} />
          <p>Explorar</p>
        </div>
        <div>
          <Notifications color="#fff" size={26} />
          <p>Notificações</p>
        </div>
        <div>
          <Messages color="#fff" size={26} />
          <p>Mensagens</p>
        </div>
        <div>
          <Bookmarks color="#fff" size={26} />
          <p>Itens Salvos</p>
        </div>
        <div>
          <Lists color="#fff" size={26} />
          <p>Listas</p>
        </div>
        <div>
          <Profile color="#fff" size={26} />
          <p>Perfil</p>
        </div>
        <div>
          <More color="#fff" size={26} />
          <p>Mais</p>
        </div>
        <button type="button">Tweetar</button>
      </section>
    </Container>
  );
}

export default Menu;
