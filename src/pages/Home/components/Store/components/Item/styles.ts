import { defaultTheme } from "./../../../../../../styles/themes/default";
import styled from "styled-components";

export const StoreItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 2rem;

  background-color: ${defaultTheme["gray-200"]};
  border-radius: 6px 36px 6px 36px;

  position: relative;

  img {
    width: 12rem;
    height: 12rem;
    top: -2rem;
    position: absolute;
  }
`;

export const ItemTypes = styled.div`
  margin-top: 9rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const ItemType = styled.div`
  background-color: ${(props) => props.theme["yellow-100"]};
  border-radius: 100px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  span {
    font-weight: 700;
    font-size: 10px;
    line-height: 130%;

    text-transform: uppercase;

    color: #c47f17;
  }
`;

export const ItemContent = styled.div`
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;

  h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
    text-align: center;
  }

  span {
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
  }
`;

export const ItemFooter = styled.div`
  width: 100%;
  margin-top: 3.2rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;

  & > span {
    margin-right: 1.8rem;
    font-size: 1.4rem;
    line-height: 130%;

    strong {
      font-weight: 800;
      font-size: 24px;
      line-height: 130%;
    }
  }

  & > button {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 6px;
    background-color: ${(props) => props.theme["purple-900"]};

    transition: all 175ms;

    :hover {
      background-color: ${(props) => props.theme["purple-500"]};
    }
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
