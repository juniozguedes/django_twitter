import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 15px;
  padding-right: 15px;
  max-width: 600px;

  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 23px;
    margin: 30px 10px;
    color: #fff;
    font-weight: bold;
  }

  button {
    background-color: #1da1f2;
    color: #fff;
    font-size: 15px;
    border: 0;
    border-radius: 20px;
    width: 550px;
    height: 48px;
    margin: 15px 0 20px 0;
    transition: background 0.25s;
    font-weight: bolder;

    &:hover:not(:disabled) {
      background: #1b95e0;
    }
    &:disabled {
      cursor: inherit;
      opacity: 0.5;
    }
  }

  span {
    a {
      color: #1b95e0;
      font-size: 15px;
      text-decoration: none;
      margin-top: 20px;
      margin-right: 10px;
      &:hover {
        color: #1da1f2;
      }
    }
  }
`;

export const Input = styled.div`
  margin: 10px;
  border: 0;
  width: 540px;
  height: 50px;
  background-color: #192734;
  color: #8899a6;
  border-bottom: 1px solid #b9c1c8;
  border-radius: 2px;

  &:focus-within {
    border-bottom: 1px solid #1b95e0;
    color: #1b95e0;
  }

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    font-size: 14px;
    padding: 5px 10px 0;
  }

  input {
    color: #fff;
    background: 0;
    border: 0;
    font-size: 15px;
    padding: 2px 10px 5px;
  }
`;
