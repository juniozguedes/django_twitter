import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { GrTwitter } from 'react-icons/gr';

import { useAuth } from '../../hooks/Auth';
import { Content, Input } from './styles';

function Login() {
  const [userData, setUserData] = useState({
    username: '',
    password: '',
  });
  const [hasError, setHasError] = useState(false);
  const { signIn } = useAuth();

  const history = useHistory();
  function handleUserData(e) {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  }

  async function handleButtonSubmit() {
    try {
      const { username, password } = userData;

      await signIn({
        username,
        password,
      });
      history.push('/');
    } catch (err) {
      setHasError(true);
    }
  }
  return (
    <Content>
      <GrTwitter size={36} color="#fff" />
      <p>Entrar no Twitter</p>
      {hasError && (
        <span>
          O nome de usuário e a senha fornecidos não correspondem às informações
          em nossos registros. Verifique-as e tente novamente.
        </span>
      )}
      <Input>
        <span>Celular, email ou nome de usuário</span>
        <input
          name="username"
          type="text"
          onChange={(e) => handleUserData(e)}
        />
      </Input>
      <Input>
        <span>Senha</span>
        <input
          name="password"
          type="password"
          onChange={(e) => handleUserData(e)}
        />
      </Input>
      <button
        onClick={handleButtonSubmit}
        disabled={!(userData.username.length && userData.password.length)}
        type="button"
      >
        Entrar
      </button>

      <span>
        <a href="blank">Esqueceu sua senha?</a>
        <a href="blank">Inscreva-se no Twitter</a>
      </span>
    </Content>
  );
}

export default Login;
