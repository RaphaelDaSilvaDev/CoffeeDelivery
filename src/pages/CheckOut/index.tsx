import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";
import { Wrapper } from "../../layout/Wrapper";
import { CompleteOrder } from "./components/CompleteOrder";
import { ListOrder } from "./components/ListOrder";
import { CheckOutContainer } from "./styles";

const completeOrderValidationsSchema = zod.object({
  cep: zod.string().min(8, "Coloque um CEP válido").max(8, "Coloque um CEP válido"),
  street: zod.string().min(1, "Digite uma rua válida"),
  number: zod.string().min(1, "Digite um Número válido"),
  complete: zod.string().optional(),
  district: zod.string().min(1, "Digite um Bairro válido"),
  city: zod.string().min(1, "Digite uma Cidade válida"),
  uf: zod.string().min(2, "Digite um Estádo válido").max(2),
  selectPayment: zod.string().min(1, "Selecione o meio de pagamento"),
});

type CompleteOrderData = zod.infer<typeof completeOrderValidationsSchema>;

export function CheckOut() {
  const completOrderForm = useForm<CompleteOrderData>({
    resolver: zodResolver(completeOrderValidationsSchema),
    defaultValues: {},
  });

  return (
    <Wrapper>
      <CheckOutContainer>
        <FormProvider {...completOrderForm}>
          <CompleteOrder />
          <ListOrder />
        </FormProvider>
      </CheckOutContainer>
    </Wrapper>
  );
}
