import styled from 'styled-components';

export const Container = styled.div`
  font-size: 18px;
  color: #fff;
  font-weight: bold;
  margin-right: 23px;
  margin-left: 77px;

  span {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 49px;
    height: 49px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  span:hover {
    background: rgba(29, 161, 242, 0.1);
  }
  div {
    width: max-content;
    display: flex;
    cursor: pointer;
    padding: 10px;
    margin-bottom: 16px;
    margin-top: 4px;
    transition-duration: 0.2s;

    p {
      margin-top: 6px;
      margin-left: 15px;
      margin-right: 15px;
    }
    svg {
      transition: fill 0.2s;
    }
  }
  div:hover {
    color: rgba(29, 161, 242, 1);
    border-radius: 50px;
    background: rgba(29, 161, 242, 0.1);
    svg {
      fill: rgba(29, 161, 242, 1);
    }
  }
  button {
    background: rgb(29, 161, 242);
    font-size: 15px;
    font-family: inherit;
    font-weight: bold;
    color: inherit;
    width: 212px;
    height: 44px;
    border: 0;
    border-radius: 20px;
    margin-top: 9px;
  }
  button:hover {
    background: #1b95e0;
  }
`;
