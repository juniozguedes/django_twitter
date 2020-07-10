import styled from 'styled-components';

export const TweetContent = styled.div`
  height: auto;
  max-height: 716px;
  padding: 10px 15px 0;
  display: flex;
  width: 100%;
  max-width: 600px;
  border-bottom: 1px solid rgb(56, 68, 77);
  border-top: 0;
  cursor:pointer;
  transition:0.3s;

  &:hover{
    background-color: rgb(25,39,52);

  }
  }
`;

export const ImgContainer = styled.div`
  div {
    img {
      width: 46px;
      height: 46px;
      border-radius: 50%;
      flex-basis: 46px;
      margin-right: 10px;
    }
  }
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    font-size: 14px;

    div{
      display: flex;
      color: #fff;
      p{
        margin: 0 5px;
        color: rgb(136, 153, 166);
      }
    }

  }
`;

export const TweetBody = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: normal;
  flex-direction: column;
  width: 100%;
`;

export const Content = styled.div`
  margin-top: 5px;
  max-width: 520px;
  height: auto;
  p {
    max-height: 516px;
    width: 100%;
    overflow: auto;
    overflow-x: hidden;
    margin-bottom: 10px;
    line-break: anywhere;
  }
  > div {
    display: flex;
    justify-content: space-between;
    margin-right: 80px;
    color: #7a8a97;
    span {
      display: flex;
      align-items: center;
      font-size: 12px;

      > div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        transition: 0.4s;
      }
      em {
        font-style: normal;
      }
    }
    span:nth-child(1):hover {
      color: rgba(29, 161, 242);
      svg {
        fill: rgba(29, 161, 242);
      }
      > div {
        background: rgba(29, 161, 242, 0.1);
      }
    }
    span:nth-child(2):hover {
      color: rgba(23, 191, 99);
      svg {
        fill: rgba(23, 191, 99);
      }
      > div {
        background: rgba(23, 191, 99, 0.1);
      }
    }
    span:nth-child(3):hover {
      color: rgba(224, 36, 94);
      svg {
        fill: rgba(224, 36, 94);
      }
      > div {
        background: rgba(224, 36, 94, 0.1);
      }
    }
  }
`;
