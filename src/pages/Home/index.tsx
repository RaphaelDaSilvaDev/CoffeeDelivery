import { Hero } from "./components/Hero";
import { Store } from "./components/Store";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Hero />
      <Store />
    </HomeContainer>
  );
}
