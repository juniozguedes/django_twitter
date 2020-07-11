import styled from 'styled-components';

export const Container = styled.div`
  width: 348px;
  display: flex;
  align-items: start;
  flex-direction: column;
  margin-left: 25px;

  color: white;

  section {
    position: sticky;
    top: -250px;
    left: 0;
    background: #192734;
    margin-top: 5px;

    width: 100%;

    padding: 0;
    border-radius: 15px;
    display: flex;
    flex-direction: column;

    h3 {
      font-weight: 900;
    }
    header {
      border-bottom: 1px solid rgb(56, 68, 77);
      width: 100%;
      padding: 9px 14px;
    }
    > div:last-child {
      border: 0;
      padding: 14px;
      border-radius: 0 0 15px 15px;
    }
    > div {
      border-bottom: 1px solid rgb(56, 68, 77);
      width: 100%;
      padding: 9px 14px;
      display: flex;
      justify-content: space-between;
      transition: 0.2s;
      cursor: pointer;
      &:hover {
        background-color: rgba(255, 255, 255, 0.03);
      }
      div {
        display: flex;
        flex-direction: column;
        padding: 0;
      }
      img {
        width: 75px;
        height: 75px;
        border-radius: 11px;
      }
      line-height: 1.6em;
      p {
        color: rgb(136, 153, 166);
        font-size: 13px;
      }
      span {
        color: rgb(136, 153, 166);
        font-size: 13px;
      }
      strong {
        font-size: 14px;
      }
    }
  }
`;

export const Search = styled.span`
  display: flex;
  background-color: rgb(21, 32, 43);
  margin: 0;
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 1;
  height: 49px;
  align-self: start;
  width: 100%;

  text-align: center;
  div {
    background-color: rgb(37, 51, 65);
    border-radius: 20px;
    width: 100%;
    height: 37px;
    margin: 5px;
    margin: 5px 0;
    border: 1px solid rgb(37, 51, 65);
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 5px 10px;

    transition: 0.1s;

    &:focus-within {
      border: 1px solid rgba(29, 161, 242);
      svg {
        stroke: rgba(29, 161, 242);
      }
    }
    svg {
      margin-right: 15px;
    }
    input {
      background: 0;
      border: 0;
      color: white;
      &::placeholder {
        color: rgb(136, 153, 166);
      }
    }
  }
`;
