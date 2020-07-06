import React from 'react';

import { GrTwitter } from 'react-icons/gr';
import { IoMdHome } from 'react-icons/io';

import { Container } from './styles';

function Menu() {
  return (
    <Container>
      <span>
        <GrTwitter size={30} color="#fff" />
      </span>
      <div>
        <IoMdHome size={26} />
        <p>Pagina Inicial</p>
      </div>
      <div>
        <IoMdHome size={26} />
        <p>Explorar</p>
      </div>
      <div>
        <IoMdHome size={26} />
        <p>Notificações</p>
      </div>
      <div>
        <IoMdHome size={26} />
        <p>Mensagens</p>
      </div>
      <div>
        <IoMdHome size={26} />
        <p>Itens Salvos</p>
      </div>
      <div>
        <IoMdHome size={26} />
        <p>Listas</p>
      </div>
      <div>
        <IoMdHome size={26} />
        <p>Perfil</p>
      </div>
      <div>
        <IoMdHome size={26} />
        <p>Mais</p>
      </div>
      <button type="button">Tweetar</button>
    </Container>
  );
}

export default Menu;
