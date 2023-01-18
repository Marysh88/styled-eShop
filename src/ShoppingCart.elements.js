import styled from "styled-components";

export const CartItems = styled.div`
  margin: 30px auto;
  width: 90%;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: #ffffff;
  border: 1px solid #e7e6eb;
`;

export const CartItemsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  color: aliceblue;
  font-size: 1.5rem;
`;

export const CartItemsEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  height: 50px;
`;
export const DivImage = styled.div`
  width: 25%;

  height: 258px;
  border-radius: 3px;
  border: 1px solid #e7e6eb;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 330px) {
    width: 80%;
    height: 170px;
  }
  @media (min-width: 331px) and (max-width: 440px) {
    width: 80%;
    height: 170px;
  }

  @media (min-width: 441px) and (max-width: 960px) {
    width: 80%;
    height: 260px;
  }
`;
export const CartItemsImage = styled.img`
  width: 100%;
  height: 100%;

  margin-right: 10px;
  border-radius: 3px;
`;
export const CartItemsList = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 10px;
  margin-bottom: 20px;

  @media screen and (max-width: 330px) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 331px) and (max-width: 440px) {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 441px) and (max-width: 960px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CartItemsTitle = styled.div`
  width: 35%;

  display: flex;
  justify-content: center;

  @media screen and (max-width: 330px) {
    width: 100%;
    margin-top: 20px;
  }

  @media (min-width: 331px) and (max-width: 440px) {
    width: 100%;
    margin-top: 20px;
  }

  @media (min-width: 441px) and (max-width: 960px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const CartItemsFunction = styled.div`
  width: 25%;

  display: flex;
  justify-content: center;

  @media screen and (max-width: 330px) {
    width: 100%;
    margin-top: 15px;
  }

  @media (min-width: 331px) and (max-width: 440px) {
    width: 100%;
    margin-top: 15px;
  }

  @media (min-width: 441px) and (max-width: 960px) {
    width: 100%;
    margin-top: 15px;
  }
`;

export const CartItemsPrice = styled.div`
  width: 15%;

  @media screen and (max-width: 330px) {
    width: 80%;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid red;
  }

  @media (min-width: 331px) and (max-width: 440px) {
    width: 80%;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid red;
  }

  @media (min-width: 441px) and (max-width: 960px) {
    width: 80%;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid red;
  }
`;

export const CartItemsAdd = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-weight: 700;

  font-size: 1.5rem;
  color: red;
  cursor: pointer;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  border: 1px solid #e7e6eb;
  &:active {
    transform: translateY(1.2px);
  }
`;

export const CartItemsRemove = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  font-weight: 700;

  font-size: 1.5rem;
  color: red;
  cursor: pointer;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  border: 1px solid #e7e6eb;
  margin-left: 25px;

  &:active {
    transform: translateY(1.2px);
  }
`;

export const CartItemsTotalPriceName = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 40px 0;
`;

export const CartItemsTotalPrice = styled.div`
  margin-left: 20px;
  color: red;
`;
