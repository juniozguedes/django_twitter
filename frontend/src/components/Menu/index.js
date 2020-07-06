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
      <svg width="50" viewBox="0 0 24 24" class="r-13gxpu9 r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr"><g><path d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z"></path></g></svg>
    </Container>
  )
}

export default Menu;
