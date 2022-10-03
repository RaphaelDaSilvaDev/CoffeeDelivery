import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Wrapper } from "../../layout/Wrapper";
import { defaultTheme } from "../../styles/themes/default";
import {
  CardOrderDetails,
  CardOrderDetailsText,
  CardOrderDetaislIcon,
  FinishOrderContainer,
  OrderArt,
  OrderDetails,
  OrderDetailsContainer,
} from "./styles";

import deliveryArt from "../../assets/Delivery-finishOrder.svg";

export function FinishOrder() {
  const { closeOrderInfo } = useContext(CartContext);

  return (
    <Wrapper>
      <FinishOrderContainer>
        <OrderDetailsContainer>
          <div>
            <h1>uhu! Pedido confirmado</h1>
            <span>Agora é só aguardar que logo o café chegará até você</span>
          </div>
          <OrderDetails>
            <div>
              <CardOrderDetails>
                <CardOrderDetaislIcon color={defaultTheme["purple-500"]}>
                  <MapPin weight="fill" size={18} fill={defaultTheme["gray-100"]} />
                </CardOrderDetaislIcon>
                <CardOrderDetailsText>
                  <span>
                    Entrega em{" "}
                    <strong>
                      Rua {closeOrderInfo?.street}, {closeOrderInfo?.number}
                    </strong>
                  </span>
                  <span>
                    {closeOrderInfo?.district} -{closeOrderInfo?.city},{closeOrderInfo?.uf}
                  </span>
                </CardOrderDetailsText>
              </CardOrderDetails>

              <CardOrderDetails>
                <CardOrderDetaislIcon color={defaultTheme["yellow-500"]}>
                  <Timer weight="fill" size={18} fill={defaultTheme["gray-100"]} />
                </CardOrderDetaislIcon>
                <CardOrderDetailsText>
                  <span>Previsão de entrega</span>
                  <strong>20 min - 30 min</strong>
                </CardOrderDetailsText>
              </CardOrderDetails>

              <CardOrderDetails>
                <CardOrderDetaislIcon color={defaultTheme["yellow-900"]}>
                  <CurrencyDollar size={18} color={defaultTheme["gray-100"]} />
                </CardOrderDetaislIcon>
                <CardOrderDetailsText>
                  <span>Pagamento na entrega</span>
                  <strong>{closeOrderInfo?.selectPayment}</strong>
                </CardOrderDetailsText>
              </CardOrderDetails>
            </div>
          </OrderDetails>
        </OrderDetailsContainer>

        <OrderArt>
          <img src={deliveryArt} />
        </OrderArt>
      </FinishOrderContainer>
    </Wrapper>
  );
}
