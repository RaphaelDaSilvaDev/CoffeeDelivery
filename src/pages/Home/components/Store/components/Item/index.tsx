import { ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext } from "../../../../../../context/CartContext";
import { defaultTheme } from "../../../../../../styles/themes/default";
import {
  ItemContent,
  ItemFooter,
  ItemType,
  ItemTypes,
  QuantityInput,
  QuantityLess,
  QuantityMore,
  QuantityNumber,
  StoreItem,
} from "./styles";

interface ItemProps {
  item: {
    id: number;
    type: string[];
    title: string;
    description: string;
    price: string;
    img: string;
  };
}

export function Item({ item }: ItemProps) {
  const { addNewCoffee } = useContext(CartContext);
  const [quantity, setQuantity] = useState<number>(1);

  function decreaseQuantity() {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  }

  function increaseQuantity() {
    setQuantity((prev) => prev + 1);
  }

  function resetQuantity() {
    setQuantity(1);
  }

  return (
    <StoreItem key={item.id}>
      <img src={item.img} />

      <ItemTypes>
        {item.type.map((type) => (
          <ItemType key={type}>
            <span>{type}</span>
          </ItemType>
        ))}
      </ItemTypes>

      <ItemContent>
        <h2>{item.title}</h2>
        <span>{item.description}</span>
      </ItemContent>

      <ItemFooter>
        <span>
          R$ <strong>{Number(item.price).toFixed(2).replace(".", ",")}</strong>
        </span>

        <QuantityInput>
          <QuantityLess onClick={decreaseQuantity}>
            <span>-</span>
          </QuantityLess>
          <QuantityNumber>
            <span>{quantity}</span>
          </QuantityNumber>
          <QuantityMore onClick={increaseQuantity}>
            <span>+</span>
          </QuantityMore>
        </QuantityInput>

        <button
          onClick={() => {
            addNewCoffee(item, quantity);
            resetQuantity();
          }}
        >
          <ShoppingCart weight="fill" fill={defaultTheme["gray-100"]} size={22} />
        </button>
      </ItemFooter>
    </StoreItem>
  );
}
