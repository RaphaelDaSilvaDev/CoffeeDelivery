import { Outlet } from "react-router-dom";
import { WrapperConteiner } from "./styles";

interface Props {
  children: React.ReactElement;
}

export function Wrapper({ children }: Props) {
  return <WrapperConteiner>{children}</WrapperConteiner>;
}
