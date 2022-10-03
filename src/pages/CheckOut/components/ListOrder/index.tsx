import { Trash } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import { defaultTheme } from "../../../../styles/themes/default";
import { ConfirmOrder } from "../ConfirmOrder";
import {
  ListOrderContainer,
  CompleteOrder,
  Order,
  OrderInfo,
  OrderDetails,
  QuantityInput,
  QuantityLess,
  QuantityNumber,
  QuantityMore,
  RemoveOrder,
  OrderPrice,
  Line,
} from "./styles";

export function ListOrder() {
  const { order, changeAmountCoffee, removeCoffee } = useContext(CartContext);

  function decreaseQuantity(id: number, amount: number) {
    if (amount > 1) {
      changeAmountCoffee(id, amount - 1);
    }
  }

  function increaseQuantity(id: number, amount: number) {
    changeAmountCoffee(id, amount + 1);
  }

  return (
    <ListOrderContainer>
      <h2>Cafés selecionados</h2>
      <CompleteOrder>
        {order.map((item) => (
          <div key={item.card.id}>
            <Order>
              <OrderInfo>
                <img src={item.card.img} />
                <OrderDetails>
                  <span>{item.card.title}</span>
                  <div>
                    <QuantityInput>
                      <QuantityLess
                        onClick={() => {
                          decreaseQuantity(item.card.id, item.amount);
                        }}
                      >
                        <span>-</span>
                      </QuantityLess>
                      <QuantityNumber>
                        <span>{item.amount}</span>
                      </QuantityNumber>
                      <QuantityMore
                        onClick={() => {
                          increaseQuantity(item.card.id, item.amount);
                        }}
                      >
                        <span>+</span>
                      </QuantityMore>
                    </QuantityInput>
                    <RemoveOrder onClick={() => removeCoffee(item.card.id)}>
                      <Trash color={defaultTheme["purple-500"]} size={16} />
                      <span>REMOVER</span>
                    </RemoveOrder>
                  </div>
                </OrderDetails>
              </OrderInfo>
              <OrderPrice>
                <span>
                  R${" "}
                  {Number(Number(item.card.price) * item.amount)
                    .toFixed(2)
                    .replace(".", ",")}
                </span>
              </OrderPrice>
            </Order>
            <Line />
          </div>
        ))}
        {order.length !== 0 && <ConfirmOrder />}
      </CompleteOrder>
    </ListOrderContainer>
  );
}
