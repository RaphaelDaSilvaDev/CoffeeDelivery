import styled, { css } from "styled-components";

export const CompleteOrderContainer = styled.div`
  flex: 2;
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

export const CompleteAddress = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.2rem;
  background-color: ${(props) => props.theme["gray-200"]};
  border-radius: 6px;
  padding: 4rem;
`;

export const CompleteAddressHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: ${(props) => props.theme["gray-800"]};
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      color: ${(props) => props.theme["gray-700"]};
    }
  }
`;

export const CompleteAddressInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;
`;

export const CompleteAddressStreet = styled.div`
  width: 100%;
  display: flex;
`;

export const CompleteAddressInputsSide = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.2rem;
`;

interface InputProps {
  hasError?: boolean;
}

export const BaseInput = styled.input<InputProps>`
  background-color: ${(props) => props.theme["gray-300"]};
  height: 4.2rem;
  ${(props) =>
    props.hasError
      ? css`
          border: 1px solid #ff0000;
        `
      : css`
          border: 1px solid #e6e5e5;
        `};

  border-radius: 4px;
  padding: 1.2rem;
  color: ${(props) => props.theme["gray-700"]};
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  -moz-appearance: textfield;

  &::placeholder {
    color: ${(props) => props.theme["gray-600"]};
  }
`;

export const MediumInput = styled(BaseInput)`
  width: 20rem;
`;

export const SmallInput = styled(BaseInput)`
  width: 6rem;
`;

export const FlexInput = styled(BaseInput)`
  flex: 1;
  height: 4.2rem;
`;

export const CompletePayment = styled.div<InputProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.2rem;
  background-color: ${(props) => props.theme["gray-200"]};
  border-radius: 6px;
  padding: 4rem;
  ${(props) =>
    props.hasError
      ? css`
          border: 1px solid #ff0000;
        `
      : css`
          border: 1px solid transparent;
        `};
`;

export const CompletePaymentHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    span {
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
      color: ${(props) => props.theme["gray-800"]};
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 130%;
      color: ${(props) => props.theme["gray-700"]};
    }
  }
`;

export const CompleteSelectPayment = styled.div`
  width: 100%;
  margin-top: 3.2rem;
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
`;

interface SelectPayment {
  select: boolean;
}

export const CompleteSelectPaymentCard = styled.label<SelectPayment>`
  flex: 1;
  min-width: 17.5rem;
  max-width: 18rem;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 1.6rem;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${(props) =>
    props.select ? props.theme["purple-100"] : props.theme["gray-400"]};
  border: 1px solid ${(props) => (props.select ? props.theme["purple-500"] : "transparent")};

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 12px;
    text-transform: uppercase;
    user-select: none;
  }

  input {
    display: none;
    visibility: hidden;
    user-select: none;
  }
`;
