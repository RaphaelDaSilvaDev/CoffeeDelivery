import styled from "styled-components";
import BackgroundImage from "../../../../assets/Background-hero.svg";

export const HeroBackground = styled.div`
  width: 100%;
  padding-block: 12rem;
  display: flex;
  align-items: center;
  background: url(${BackgroundImage}) no-repeat center;
  background-size: 100% auto;
`;

export const HeroContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 5.6rem;
`;

export const HeroLeft = styled.div`
  width: 60rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 6.6rem;
`;

export const HeroLeftTitle = styled.div`
  width: 100%;

  h1 {
    font-weight: 800;
    font-size: 4.8rem;
    line-height: 130%;
  }
  span {
    font-style: normal;
    font-weight: 400;
    font-size: 2rem;
    line-height: 130%;
  }
`;

export const HeroLeftDetails = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  gap: 2rem;
`;

export const HeroLeftDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  span {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 130%;
  }
`;

interface IconColor {
  color: string;
}

export const HeroLeftDetailIcon = styled.div<IconColor>`
  display: flex;
  align-items: center;

  padding: 0.8rem;
  border-radius: 50%;

  background-color: ${(props) => props.color};
`;

export const HeroRight = styled.div`
  width: 40rem;
  min-width: 20 rem;
  display: flex;
  align-items: center;
`;

export const HeroRightImage = styled.img`
  width: 100%;
  object-fit: cover;
`;
