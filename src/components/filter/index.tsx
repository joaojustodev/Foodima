import React from 'react';

import { Container, Heading,RecipeList,RecipeListItem } from './styles';

export interface FilterProps {
  isvisible: boolean;
}

const Filter: React.FC<FilterProps> = ({isvisible}) => {
  return (
    <Container isvisible={isvisible}>
      <div>
        <Heading>Receitas mais procuradas</Heading>
        <RecipeList>
          <RecipeListItem>Cupcake Recheado</RecipeListItem>
          <RecipeListItem>Rabada</RecipeListItem>
          <RecipeListItem>Bolo de pote</RecipeListItem>
          <RecipeListItem>Brownie de churros</RecipeListItem>
          <RecipeListItem>Veja o top 10</RecipeListItem>
        </RecipeList>
      </div>
      <div>
        <Heading>Receitas salgadas</Heading>
        <RecipeList>
          <RecipeListItem>Torta salgada</RecipeListItem>
          <RecipeListItem>Coxinhas recheadas</RecipeListItem>
          <RecipeListItem>Pancake salgado</RecipeListItem>
          <RecipeListItem>Lanche de forno</RecipeListItem>
          <RecipeListItem>+ 384...</RecipeListItem>
        </RecipeList>
      </div>
      <div>
        <Heading>Receitas doces</Heading>
        <RecipeList>
          <RecipeListItem>Churros de chocolate</RecipeListItem>
          <RecipeListItem>Flan de doce de leite</RecipeListItem>
          <RecipeListItem>Brigadeiro</RecipeListItem>
          <RecipeListItem>Bolo de milho</RecipeListItem>
          <RecipeListItem>+ 220...</RecipeListItem>
        </RecipeList>
      </div>
    </Container>
  );
};

export default Filter;
