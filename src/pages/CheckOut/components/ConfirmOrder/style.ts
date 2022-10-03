import styled from "styled-components";

export const ConfirmOrderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`;

export const OrderInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

export const Info = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 130%;
  }

  strong {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
  }
`;

export const OrderConfirmButton = styled.button`
  width: 100%;
  border-radius: 6px;
  padding-block: 1.2rem;

  outline: none;
  border: none;
  background-color: ${(props) => props.theme["yellow-500"]};

  cursor: pointer;
  transition: all 175ms;

  :not(:disabled):hover {
    background-color: ${(props) => props.theme["yellow-900"]};
  }

  :disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 160%;
    color: ${(props) => props.theme.white};

    text-transform: uppercase;
  }
`;
