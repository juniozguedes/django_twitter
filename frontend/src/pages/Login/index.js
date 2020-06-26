import React from 'react';
import { GrTwitter } from 'react-icons/gr';

import { Content, Input } from './styles';

function Login() {
  return (
    <Content>
      <GrTwitter size={36} color="#fff" />
      <p>Entrar no Twitter</p>
      <Input>
        <label>Celular, email ou nome de usuário</label>
        <input type="text" />
      </Input>
      <Input>
        <label>Senha</label>
        <input type="text" />
      </Input>
      <button type="button">Entrar</button>

      <span>
        <a href="#">Esqueceu sua senha?</a>
        <a href="#">Inscreva-se no Twitter</a>
      </span>
    </Content>
  );
}

export default Login;
