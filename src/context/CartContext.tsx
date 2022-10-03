import { createContext, ReactNode, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CardProps } from "../pages/Home/components/Store";

interface CardWithAmountProps {
  card: CardProps;
  amount: number;
}

interface CloseOrderProps {
  cep: string;
  street: string;
  number: string;
  complete: string;
  district: string;
  city: string;
  uf: string;
  selectPayment: string;
}

interface CartContextType {
  order: CardWithAmountProps[];
  closeOrderInfo: CloseOrderProps | undefined;
  setCloseOrderInfo: React.Dispatch<React.SetStateAction<CloseOrderProps | undefined>>;
  totalAmount: number;
  addNewCoffee({ id, type, title, description, price, img }: CardProps, amount: number): void;
  changeAmountCoffee(id: number, amount: number): void;
  removeCoffee(id: number): void;
  clearOrder(): void;
}

export const CartContext = createContext({} as CartContextType);

interface ChildrenProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: ChildrenProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [order, setOrder] = useState<CardWithAmountProps[]>([]);
  const [closeOrderInfo, setCloseOrderInfo] = useState<CloseOrderProps>();

  function addNewCoffee({ id, type, title, description, price, img }: CardProps, amount: number) {
    const newCoffee: CardWithAmountProps = {
      card: {
        id,
        type,
        title,
        description,
        price,
        img,
      },
      amount,
    };

    setOrder((prev) => [...prev, newCoffee]);
    setTotalAmount((prev) => prev + 1);
  }

  function changeAmountCoffee(id: number, amount: number) {
    const allOrders = Array.from(order);
    const getOrderIndex = allOrders.findIndex((item) => item.card.id === id);
    const getOrder = allOrders.find((item) => item.card.id === id);
    if (getOrder) {
      getOrder.amount = amount;
      allOrders.splice(getOrderIndex, 1, getOrder);
      setOrder(allOrders);
    }
  }

  function removeCoffee(id: number) {
    const allOrders = Array.from(order);
    const getOderInex = allOrders.findIndex((item) => item.card.id === id);
    if (getOderInex !== -1) {
      allOrders.splice(getOderInex, 1);
      setOrder(allOrders);
      setTotalAmount((prev) => prev - 1);
    }
  }

  function clearOrder() {
    setOrder([]);
    setTotalAmount(0);
  }

  function redirectToHome() {
    if (location.pathname !== "/finish-order") {
      if (order.length === 0) {
        navigate("/");
      }
    } else {
      if (!closeOrderInfo) {
        navigate("/");
      }
    }
  }

  useEffect(() => {
    redirectToHome();
  }, [order, totalAmount]);

  return (
    <CartContext.Provider
      value={{
        order,
        totalAmount,
        closeOrderInfo,
        addNewCoffee,
        changeAmountCoffee,
        removeCoffee,
        setCloseOrderInfo,
        clearOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
