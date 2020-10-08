import React from "react";

import Layout from "../../components/layout";
import Recipes from "../../components/recipes";
import hero from "../../static/hero.jpg";
import { Hero, HeroContentWrapper, HeroImageWrapper } from "./styles";

const Home: React.FC = () => {
  return (
    <Layout>
      <Hero className="container hero">
        <HeroContentWrapper>
          <h1>Recipe Contest</h1>
          <p>
            Recipe contest are like our big constantly-in-progress dinner
            party-and you're invited.
          </p>
          <a href="#">How they work</a>
        </HeroContentWrapper>
        <HeroImageWrapper>
          <img src={hero} alt="hero" />
        </HeroImageWrapper>
      </Hero>
      <Recipes />
    </Layout>
  );
};

export default Home;
