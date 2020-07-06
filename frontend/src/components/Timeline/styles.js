import styled from 'styled-components';

export const Container = styled.div`
  font-weight: bolder;
  width: 100%;
  max-width: 600px;
  border: 1px solid rgb(56, 68, 77);
  border-top: 0;
  color: #fff;
  font-size: 18px;
`;

export const Home = styled.div`
  position: sticky;
  top: 0;
  height: 50px;
  border-bottom: 1px solid rgb(56, 68, 77);
  width: 100%;
  max-width: 600px;
  background-color: rgb(21, 32, 43);

  display: flex;
  align-items: center;
  padding: 0 14px;
`;
export const WhatsHappening = styled.div`
  height: auto;
  min-height: 116px;
  max-height: 716px;
  border-bottom: 9px solid #253341;
  padding: 10px 15px;
  display: flex;

  div:first-child {
    margin-right: 9px;
    padding-top: 5px;
    img {
      width: 46px;
      height: 46px;
      border-radius: 50%;
      flex-basis: 46px;
    }
  }
`;

export const TweetContent = styled.div`
  width: 100%;

  > div:nth-child(1) {
    height: 50px;
    display: flex;
    max-width: 500px;
    height: auto;
    span {
      max-height: 516px;

      width: 100%;
      overflow: auto;
      padding: 10px 0;
      line-height: 20px;
      font-size: 16px;
      color: #fff;

      font-weight: normal;
    }
    span[contentEditable]:empty::before {
      content: "What's happening?";
      font-size: 16px;
      color: rgb(145, 151, 163);
      cursor: text;
    }
  }
  > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    > div {
      align-self: center;
      svg {
        margin-right: 16px;
      }
    }
    button {
      background: rgb(29, 161, 242);
      font-size: 14px;
      font-family: inherit;
      font-weight: bold;
      color: inherit;
      width: 70px;
      height: 37px;
      border: 0;
      border-radius: 20px;
    }
  }
`;
