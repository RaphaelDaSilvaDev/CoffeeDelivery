import { Wrapper } from "../../../../layout/Wrapper";
import { StoreContainer, StoreItens } from "./styles";
import Coffees from "./data.json";
import { useState } from "react";
import { Item } from "./components/Item";

export interface CardProps {
  id: number;
  type: string[];
  title: string;
  description: string;
  price: string;
  img: string;
}

export function Store() {
  const [coffees, setCoffees] = useState<CardProps[]>(Coffees.data);

  return (
    <Wrapper>
      <StoreContainer>
        <h1>Nossos cafés</h1>
        <StoreItens>
          {coffees.map((item) => (
            <Item item={item} key={item.id} />
          ))}
        </StoreItens>
      </StoreContainer>
    </Wrapper>
  );
}
