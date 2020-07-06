import React from 'react';

import { GrTwitter } from 'react-icons/gr';

import { Container } from './styles'


function Menu(){
  return(
    <Container>
      <span><GrTwitter size={30} color="#fff" /></span>
      <div>Pagina Inicial</div>
      <div>Explorar</div>
      <div>Notificações</div>
      <div>Mensagens</div>
      <div>Itens Salvos</div>
      <div>Listas</div>
      <div>Perfil</div>
      <div>Mais</div>
      <button>Tweetar</button>
    </Container>
  )
}

export default Menu;
