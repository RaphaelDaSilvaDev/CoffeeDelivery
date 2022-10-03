import styled from "styled-components";

export const ListOrderContainer = styled.div`
  width: 44.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.2rem;

  h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 130%;
  }
`;

export const CompleteOrder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 4rem;
  border-radius: 6px 44px 6px 44px;
  background-color: ${(props) => props.theme["gray-200"]};
`;

export const Order = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const OrderInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;

  img {
    width: 6.2rem;
    height: 6.2rem;
  }
`;

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

export const QuantityInput = styled.div`
  width: 7.2rem;
  height: 3.8rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["gray-400"]};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;

export const QuantityNumber = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    height: fit-content;
    font-size: 16px;
    line-height: normal;
    user-select: none;
  }
`;

export const QuantityMore = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  color: ${(props) => props.theme["purple-500"]};

  transition: all 175ms;

  :hover {
    color: ${(props) => props.theme["purple-900"]};
  }

  span {
    font-size: 20px;
    user-select: none;
  }
`;

export const QuantityLess = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  color: ${(props) => props.theme["purple-500"]};

  transition: all 175ms;

  :hover {
    color: ${(props) => props.theme["purple-900"]};
  }

  span {
    font-size: 20px;
    user-select: none;
  }
`;

export const RemoveOrder = styled.div`
  height: 3.8rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme["gray-400"]};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;

  cursor: pointer;
  transition: all 175ms;

  :hover {
    background-color: ${(props) => props.theme["gray-500"]};
  }

  & > span {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 160%;
    text-transform: uppercase;
  }
`;

export const OrderPrice = styled.div`
  span {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
  }
`;

export const Line = styled.hr`
  height: 0.1rem;
  background-color: ${(props) => props.theme["gray-400"]};
  border: none;
  outline: none;
  margin-block: 2.4rem;
`;
