import { useFormContext } from "react-hook-form";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { defaultTheme } from "../../../../styles/themes/default";
import {
  CompleteAddress,
  CompleteAddressHeader,
  CompleteAddressInputs,
  CompleteAddressInputsSide,
  CompleteAddressStreet,
  CompleteOrderContainer,
  CompletePayment,
  CompletePaymentHeader,
  CompleteSelectPayment,
  CompleteSelectPaymentCard,
  FlexInput,
  MediumInput,
  SmallInput,
} from "./styles";
import { useState } from "react";

export function CompleteOrder() {
  const { register } = useFormContext();
  const [selectPayment, setSelectPayment] = useState<string>("");
  const { formState } = useFormContext();

  return (
    <CompleteOrderContainer>
      <h2>Complete seu pedido</h2>
      <CompleteAddress>
        <CompleteAddressHeader>
          <MapPinLine color={defaultTheme["yellow-900"]} size={22} />
          <div>
            <span>Endereço de Entrega</span>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </CompleteAddressHeader>
        <CompleteAddressInputs>
          <MediumInput
            id="cep"
            hasError={formState.errors.cep ? true : false}
            type="number"
            placeholder="CEP"
            {...register("cep")}
          />
          <CompleteAddressStreet>
            <FlexInput
              id="street"
              hasError={formState.errors.street ? true : false}
              placeholder="Rua"
              {...register("street")}
            />
          </CompleteAddressStreet>
          <CompleteAddressInputsSide>
            <MediumInput
              id="number"
              hasError={formState.errors.number ? true : false}
              type="number"
              placeholder="Número"
              {...register("number")}
            />
            <FlexInput id="complement" placeholder="Complemento" {...register("complement")} />
          </CompleteAddressInputsSide>
          <CompleteAddressInputsSide>
            <MediumInput
              id="district"
              hasError={formState.errors.district ? true : false}
              placeholder="Bairro"
              {...register("district")}
            />
            <FlexInput
              id="city"
              hasError={formState.errors.city ? true : false}
              placeholder="Cidade"
              {...register("city")}
            />
            <SmallInput
              id="uf"
              hasError={formState.errors.uf ? true : false}
              placeholder="UF"
              maxLength={2}
              {...register("uf")}
            />
          </CompleteAddressInputsSide>
        </CompleteAddressInputs>
      </CompleteAddress>

      <CompletePayment hasError={formState.errors.selectPayment ? true : false}>
        <CompletePaymentHeader>
          <CurrencyDollar color={defaultTheme["purple-500"]} size={22} />
          <div>
            <span>Pagamento</span>
            <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
          </div>
        </CompletePaymentHeader>

        <CompleteSelectPayment>
          <CompleteSelectPaymentCard
            htmlFor="creditCard"
            onClick={() => setSelectPayment("Cartão de Crédito")}
            select={selectPayment === "Cartão de Crédito" ? true : false}
          >
            <CreditCard color={defaultTheme["purple-500"]} />
            <span>Cartão de Crédito</span>
            <input
              type="radio"
              value="Cartão de Crédito"
              id="creditCard"
              {...register("selectPayment")}
            />
          </CompleteSelectPaymentCard>

          <CompleteSelectPaymentCard
            htmlFor="debitCard"
            onClick={() => setSelectPayment("Cartão de Débito")}
            select={selectPayment === "Cartão de Débito" ? true : false}
          >
            <Bank color={defaultTheme["purple-500"]} />
            <span>cartão de débito</span>
            <input
              type="radio"
              value="Catão de Débito"
              id="debitCard"
              {...register("selectPayment")}
            />
          </CompleteSelectPaymentCard>

          <CompleteSelectPaymentCard
            htmlFor="money"
            onClick={() => setSelectPayment("Dinheiro")}
            select={selectPayment === "Dinheiro" ? true : false}
          >
            <Money color={defaultTheme["purple-500"]} />
            <span>dinheiro</span>
            <input type="radio" value="Dinheiro" id="money" {...register("selectPayment")} />
          </CompleteSelectPaymentCard>
        </CompleteSelectPayment>
      </CompletePayment>
    </CompleteOrderContainer>
  );
}
