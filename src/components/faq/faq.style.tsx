import styled from "styled-components";
export const FAQ = styled.article`
  position: relative;
  margin: auto;
  padding: 0;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background-color: white;
  z-index: 6000;
  box-shadow: 0 9px 20px 0 rgba(13, 33, 50, 0.29);

  & > div {
    width: 600px;
    height: 600px;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
  }

  @media (max-width: 600px) {
    display: flex;
    box-shadow: none;
    & > div {
      width: 100vw;
    }
  }

  .left {
    background-color: var(--error);
    padding: 20px;
    position: relative;
  }

  .right {
    position: relative;
    display: flex;
    flex-direction: column;
    .closeButton {
      position: absolute;
      top: 20px;
      right: 20px;
      font-size: 40px;
      color: var(--light-blue-grey);
      cursor: pointer;
      :hover {
        color: var(--battleship-grey);
      }
    }
  }
`;

export const PageNavigationItem = styled.div`
  display: inline-block;
  margin-right: 20px;
  padding-bottom: 20px;
  margin-bottom: -2px;
  cursor: pointer;
  &.active {
    border-bottom: 3px solid var(--white);
  }
  h3 {
    font-size: 14px;
    font-weight: 600;
    display: inline;
    font-stretch: normal;
    font-style: normal;
    color: var(--white);
    letter-spacing: 3.73px;
  }
`;

export const PageNavigation = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid var(--white);
  justify-content: flex-start;
`;
export const PoweredByEmpathy = styled.div`
  position: absolute;
  bottom: 20px;
  right: 30px;

  img {
    height: 12px;
  }
`;

export const CloseButton = styled.span`
  cursor: pointer;
  border-radius: 100px;
  color: var(--error);
  background-color: white;
  height: 50px;
  width: 50px;
  position: absolute;
  top: 20px;
  right: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
