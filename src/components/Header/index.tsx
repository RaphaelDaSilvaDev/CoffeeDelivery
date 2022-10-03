import { MapPin, ShoppingCart } from "phosphor-react";
import {
  HeaderActions,
  HeaderBase,
  HeaderCart,
  HeaderCartAmount,
  HeaderContainer,
  HeaderLocation,
  HeaderLogo,
} from "./style";
import LogoCoffeeDelivery from "../../assets/Logo-coffee-delivery.svg";
import { defaultTheme } from "../../styles/themes/default";
import { Wrapper } from "../../layout/Wrapper";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export function Header() {
  const { totalAmount } = useContext(CartContext);
  const navigate = useNavigate();
  const disable = totalAmount === 0;

  function GoToCheckOut() {
    navigate("checkout");
  }

  return (
    <HeaderBase>
      <Wrapper>
        <HeaderContainer>
          <HeaderLogo to="/">
            <img src={LogoCoffeeDelivery} />
          </HeaderLogo>
          <HeaderActions>
            <HeaderLocation>
              <MapPin size={22} weight="fill" fill={defaultTheme["purple-500"]} />
              <span>Belo Horizonte, MG</span>
            </HeaderLocation>
            <HeaderCart disabled={disable} onClick={GoToCheckOut}>
              {totalAmount > 0 && (
                <HeaderCartAmount>
                  <span>{totalAmount}</span>
                </HeaderCartAmount>
              )}
              <ShoppingCart size={22} weight="fill" fill={defaultTheme["yellow-900"]} />
            </HeaderCart>
          </HeaderActions>
        </HeaderContainer>
      </Wrapper>
    </HeaderBase>
  );
}
