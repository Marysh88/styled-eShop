import styled from "styled-components";
import { Container } from "./globalStyles";

export const Scroller = styled.div`
  ${Container}
`;

export const DivContainer = styled.div`
  display: flex;
  margin: 10px;
  background-color: #ffffff;
  margin-bottom: 40px;
  height: 670px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    overflow-x: visible;
    overflow-y: visible;
    margin: 5px;
  }
`;

export const OneProduct = styled.div`
  position: relative;
  border-radius: 8px;
  background-color: #ffffff;
  border: 1px solid #e7e6eb;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  height: 634px;
  margin: 10px;
  white-space: initial;
  flex-basis: 400px;
  flex-grow: 0;
  flex-shrink: 0;

  @media screen and (max-width: 330px) {
    margin: 3px auto;
    flex-basis: 600px;
    width: 250px;
    margin-bottom: 3px;
  }

  @media (min-width: 331px) and (max-width: 440px) {
    margin: 5px auto;
    flex-basis: 600px;
    width: 300px;
    margin-bottom: 5px;
  }
  @media (min-width: 441px) and (max-width: 960px) {
    margin: 5px auto;
    flex-basis: 634px;
    width: 500px;

    margin-bottom: 5px;
  }
`;
export const DivDetail = styled.div`
  margin: 5px auto;
  @media screen and (max-width: 330px) {
    width: 80%;
  }
  @media (min-width: 331px) and (max-width: 440px) {
    width: 80%;
  }
`;

export const DivImg = styled.div`
  width: 258px;
  height: 258px;
  top: 40px;
  left: 71px;
  position: absolute;

  @media screen and (max-width: 330px) {
    width: 250px;
    height: 250px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (min-width: 331px) and (max-width: 440px) {
    width: 250px;
  }
`;

export const TheImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const DivPrice = styled.p`
  position: absolute;
  top: 322px;
  left: 40px;
  font-size: 32px;
  font-weight: 700px;

  @media screen and (max-width: 330px) {
    top: 300px;
    left: 20px;
  }
`;

export const DivTitle = styled.p`
  position: absolute;
  top: 376px;
  left: 40px;
  font-weight: 500px;
  font-size: 24px;

  @media screen and (max-width: 330px) {
    top: 350px;
    left: 20px;
  }
`;

export const DivDescription = styled.p`
  position: absolute;
  top: 412px;
  left: 40px;
  font-size: 16px;
  @media screen and (max-width: 330px) {
    top: 390px;
    left: 20px;
    padding-right: 30px;
  }

  @media (min-width: 331px) and (max-width: 440px) {
    padding-right: 30px;
  }
`;

export const DivButton = styled.button`
  position: absolute;
  top: 500px;
  left: 40px;
  width: 320px;
  height: 55px;
  text-align: center;
  border: none;
  background-color: #fbbf23;
  border-radius: 8px;
  font-weight: 400px;
  font-size: 24px;

  @media screen and (max-width: 960px) {
    width: 220px;
    height: 50px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
