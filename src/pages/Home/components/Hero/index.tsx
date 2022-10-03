import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { Wrapper } from "../../../../layout/Wrapper";
import { defaultTheme } from "../../../../styles/themes/default";

import CoffeeHero from "../../../../assets/Coffee-hero.png";
import {
  HeroBackground,
  HeroContent,
  HeroLeft,
  HeroLeftDetail,
  HeroLeftDetailIcon,
  HeroLeftDetails,
  HeroLeftTitle,
  HeroRight,
  HeroRightImage,
} from "./styles";

export function Hero() {
  return (
    <HeroBackground>
      <Wrapper>
        <HeroContent>
          <HeroLeft>
            <HeroLeftTitle>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
            </HeroLeftTitle>

            <HeroLeftDetails>
              <HeroLeftDetail>
                <HeroLeftDetailIcon color={defaultTheme["yellow-900"]}>
                  <ShoppingCart weight="fill" fill={defaultTheme["gray-100"]} />
                </HeroLeftDetailIcon>
                <span>Compra simples e segura</span>
              </HeroLeftDetail>

              <HeroLeftDetail>
                <HeroLeftDetailIcon color={defaultTheme["gray-700"]}>
                  <Package weight="fill" fill={defaultTheme["gray-100"]} />
                </HeroLeftDetailIcon>
                <span>Embalagem mantém o café intacto</span>
              </HeroLeftDetail>

              <HeroLeftDetail>
                <HeroLeftDetailIcon color={defaultTheme["yellow-500"]}>
                  <Timer weight="fill" fill={defaultTheme["gray-100"]} />
                </HeroLeftDetailIcon>
                <span>Entrega rápida e rastreada</span>
              </HeroLeftDetail>

              <HeroLeftDetail>
                <HeroLeftDetailIcon color={defaultTheme["purple-500"]}>
                  <Coffee weight="fill" fill={defaultTheme["gray-100"]} />
                </HeroLeftDetailIcon>
                <span>O café chega fresquinho até você</span>
              </HeroLeftDetail>
            </HeroLeftDetails>
          </HeroLeft>

          <HeroRight>
            <HeroRightImage src={CoffeeHero} />
          </HeroRight>
        </HeroContent>
      </Wrapper>
    </HeroBackground>
  );
}
