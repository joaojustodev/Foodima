import React from "react";
import { Formik, FormikValues } from "formik";

import RecipesCard from "../recipesCard";
import Filter from "../filter";
import { AiOutlineSearch, AiFillFilter } from "react-icons/ai";
import {
  Container,
  Header,
  FilterIconButton,
  SearchInputForm,
  SearchInputIcon,
  SearchInput,
  Content,
} from "./styles";

const Recipes: React.FC<{ id: string }> = ({ id }) => {
  const [filterIsVisible, setFilterIsVisible] = React.useState(false);
  function handleClickFilterIsVisivle() {
    setFilterIsVisible(!filterIsVisible);
  }

  function handleSubmit(data: FormikValues) {
    console.log(data);
  }

  return (
    <Container className="container" id={id}>
      <Header>
        <Formik
          initialValues={{ recipe: "" }}
          onSubmit={handleSubmit}
          validate={({ recipe }) => {
            const errors = { recipe: "" };
            if (!recipe) {
              errors.recipe = "Insira dados no campo para busca";
              return errors;
            }
          }}
        >
          {({ values, handleChange, handleSubmit }) => (
            <>
              <SearchInputForm onSubmit={handleSubmit}>
                <SearchInputIcon>
                  <AiOutlineSearch size={22} />
                </SearchInputIcon>
                <SearchInput
                  type="text"
                  name="recipe"
                  placeholder="Pesquise sua receita.."
                  value={values.recipe}
                  onChange={handleChange}
                />
              </SearchInputForm>
            </>
          )}
        </Formik>
        <FilterIconButton
          onClick={handleClickFilterIsVisivle}
          className="filter-btn"
        >
          <AiFillFilter color="#E1E1E6" size={22} />
        </FilterIconButton>
      </Header>
      <Filter isvisible={filterIsVisible} />
      <Content>
        <RecipesCard />
      </Content>
    </Container>
  );
};

export default Recipes;
