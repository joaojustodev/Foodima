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
          <h1>Receitas Saborosas</h1>
          <p>
            As melhores receitas para você fazer aquele almoço delicioso.
          </p>
          <a href="#recipes">Ver receitas</a>
        </HeroContentWrapper>
        <HeroImageWrapper>
          <img src={hero} alt="hero" />
        </HeroImageWrapper>
      </Hero>
      <Recipes id="recipes" />
    </Layout>
  );
};

export default Home;
