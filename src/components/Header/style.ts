import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderBase = styled.div`
  width: 100%;
  position: fixed;
  z-index: 100;
  background-color: ${(props) => props.theme["gray-100"]};
`;

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 3.2rem;
`;

export const HeaderLogo = styled(NavLink)``;

export const HeaderActions = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export const HeaderLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 8px;
  border-radius: 6px;
  background-color: ${(props) => props.theme["purple-100"]};
  color: ${(props) => props.theme["purple-500"]};
`;

export const HeaderCart = styled.button`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: ${(props) => props.theme["yellow-100"]};
  position: relative;

  :disabled {
    cursor: not-allowed;
  }
`;

export const HeaderCartAmount = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-content: center;
  justify-content: center;
  border-radius: 50%;
  background-color: ${(props) => props.theme["yellow-900"]};

  right: -8.35px;
  top: -8px;

  position: absolute;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 12px;
    color: ${(props) => props.theme.white};
  }
`;
