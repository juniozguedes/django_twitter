import styled from 'styled-components'

export const Container = styled.div`
  font-size: 19px;
  color: #fff;
  font-weight: bold;
  width: 275px;
  margin-left: 60px;

  span{
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 49px;
    height: 49px;
    border-radius: 50%;


  }
  span:hover{
    background: rgba(29, 161, 242, 0.1);
  }
  div{
    max-width: 100%;
    cursor: pointer;
    padding: 10px;
    margin-bottom: 10px;
  }
  div:hover{
    color: rgba(29,161,242,1.00);
    border-radius: 50px;
    background: rgba(29, 161, 242, 0.1);
  }
  button{
    background: rgb(29, 161, 242);
    font-size: 15px;
    font-family: inherit;
    font-weight: bold;
    color: inherit;
    width: 212px;
    height: 46px;
    border: 0;
    border-radius: 20px;

  }
`
