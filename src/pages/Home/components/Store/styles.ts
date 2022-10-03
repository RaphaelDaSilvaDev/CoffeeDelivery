import styled from "styled-components";

export const StoreContainer = styled.div`
  width: 100%;
  margin-top: 3.2rem;
  margin-bottom: 12rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
  }
`;

export const StoreItens = styled.div`
  width: 100%;
  margin-top: 5.4rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
  gap: 3.2rem;
`;
