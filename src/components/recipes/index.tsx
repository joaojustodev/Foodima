import React from "react";

import RecipesCard from "../recipesCard";
import { AiOutlineSearch, AiFillFilter } from "react-icons/ai";
import {
  Container,
  Header,
  FilterIconButton,
  SearchInputBlock,
  SearchInputIcon,
  SearchInput,
  Filter,
  Content,
} from "./styles";

const Recipes: React.FC = () => {
  const [filterIsVisible, setFilterIsVisible] = React.useState(false);
  function handleClickFilterIsVisivle() {
    setFilterIsVisible(!filterIsVisible);
  }

  return (
    <Container className="container">
      <Header>
        <SearchInputBlock>
          <SearchInputIcon>
            <AiOutlineSearch size={22} />
          </SearchInputIcon>
          <SearchInput
            type="text"
            name="search"
            placeholder="Search recopes and more..."
          />
        </SearchInputBlock>
        <FilterIconButton onClick={handleClickFilterIsVisivle}>
          <AiFillFilter color="#E1E1E6" size={22} />
        </FilterIconButton>
      </Header>
      <Filter isvisible={filterIsVisible}>
        <h1>Filter</h1>
      </Filter>
      <Content>
        <RecipesCard />
      </Content>
    </Container>
  );
};

export default Recipes;
