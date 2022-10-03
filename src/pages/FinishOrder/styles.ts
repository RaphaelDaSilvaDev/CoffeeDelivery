import styled from "styled-components";

export const FinishOrderContainer = styled.div`
  width: 100%;
  margin-top: 14rem;
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 3.2rem;
`;

export const OrderDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4rem;

  & > div {
    & > h1 {
      font-style: normal;
      font-weight: 800;
      font-size: 32px;
      line-height: 130%;
      color: #c47f17;
    }

    & > span {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 130%;
    }
  }
`;

export const OrderDetails = styled.div`
  border-radius: 6px 36px;
  padding: 0.2rem;
  background: linear-gradient(to right, #dbac2c, #8047f8);

  & > div {
    background-color: ${(props) => props.theme["gray-100"]};
    padding: 4rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    border-radius: 6px 36px;
  }
`;

export const CardOrderDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

interface DetaislIcon {
  color: string;
}

export const CardOrderDetaislIcon = styled.div<DetaislIcon>`
  display: flex;
  align-items: center;

  padding: 0.8rem;
  border-radius: 50%;

  background-color: ${(props) => props.color};
`;

export const CardOrderDetailsText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & > span {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 130%;
  }

  & > strong {
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 130%;
  }
`;

export const OrderArt = styled.div`
  flex: 1;
  height: 28rem;
  min-width: 20rem;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
`;
