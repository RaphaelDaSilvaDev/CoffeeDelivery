import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../../context/CartContext";
import { ConfirmOrderContainer, Info, OrderConfirmButton, OrderInfo } from "./style";

export function ConfirmOrder() {
  const navigate = useNavigate();
  const { order, clearOrder, setCloseOrderInfo } = useContext(CartContext);

  const deliveryPrice = 4.5;

  const getTotalItens = order.map((item) => Number(item.card.price) * item.amount);
  const reducer = (acc: number, curr: number) => acc + curr;

  const { watch, handleSubmit } = useFormContext();

  const cep = watch("cep");
  const street = watch("street");
  const number = watch("number");
  const complete = watch("complete");
  const district = watch("district");
  const city = watch("city");
  const uf = watch("uf");
  const selectPayment = watch("selectPayment");

  const isSubmitDisable = !cep || !street || !number || !district || !city || !uf || !selectPayment;

  function handleCreateOrder() {
    setCloseOrderInfo({
      cep,
      city,
      complete,
      district,
      number,
      selectPayment,
      street,
      uf,
    });
    clearOrder();
    navigate("/finish-order");
  }

  return (
    <form action="" onClick={handleSubmit(handleCreateOrder)}>
      <ConfirmOrderContainer>
        <OrderInfo>
          <Info>
            <span>Total dos Itens</span>
            <span>R$ {getTotalItens.reduce(reducer).toFixed(2).replace(".", ",")}</span>
          </Info>

          <Info>
            <span>Entrega</span>
            <span>R$ {deliveryPrice.toFixed(2).replace(".", ",")}</span>
          </Info>

          <Info>
            <strong>Total</strong>
            <strong>
              R${" "}
              {Number(Number(getTotalItens.reduce(reducer).toFixed(2)) + deliveryPrice)
                .toFixed(2)
                .replace(".", ",")}
            </strong>
          </Info>
        </OrderInfo>
        <OrderConfirmButton type="submit" disabled={isSubmitDisable}>
          <span>Confirmar Pedido</span>
        </OrderConfirmButton>
      </ConfirmOrderContainer>
    </form>
  );
}
