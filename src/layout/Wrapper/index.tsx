import { Outlet } from "react-router-dom";
import { WrapperConteiner } from "./styles";

export function Wrapper({ children }) {
  return <WrapperConteiner>{children}</WrapperConteiner>;
}
