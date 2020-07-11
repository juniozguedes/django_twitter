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
  ComposeTweet,
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
          <Home color="#fff" size={24} />
          <p>Pagina Inicial</p>
        </div>
        <div>
          <Explore color="#fff" size={24} />
          <p>Explorar</p>
        </div>
        <div>
          <Notifications color="#fff" size={24} />
          <p>Notificações</p>
        </div>
        <div>
          <Messages color="#fff" size={24} />
          <p>Mensagens</p>
        </div>
        <div>
          <Bookmarks color="#fff" size={24} />
          <p>Itens Salvos</p>
        </div>
        <div>
          <Lists color="#fff" size={24} />
          <p>Listas</p>
        </div>
        <div>
          <Profile color="#fff" size={24} />
          <p>Perfil</p>
        </div>
        <div>
          <More color="#fff" size={24} />
          <p>Mais</p>
        </div>
        <button type="button">
          <ComposeTweet color="#fff" size={24} /> <em>Tweetar</em>
        </button>
      </section>
    </Container>
  );
}

export default Menu;
