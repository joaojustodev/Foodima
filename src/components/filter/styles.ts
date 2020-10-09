import styled from "styled-components";
import { FilterProps } from "./";

export const Container = styled.div<FilterProps>`
  grid-area: filter;

  width: 100%;
  padding: 12px;

  display: flex;
  flex-direction: column;

  div + div {
    margin-top: 15px;
  }

  @media screen and (max-width: 867px) {
    position: absolute;
    flex-direction: row;
    justify-content: space-around;
    z-index: ${({ isvisible }) => (isvisible ? 10 : -10)};
    background: #fff;
    box-shadow: ${({ theme }) => theme.shadow};
    top: 80px;
    opacity: ${({ isvisible }) => (isvisible ? "1" : "0")};
    transition: opacity 0.2s ease;

    div + div {
      margin-top: 0px;
    }
  }

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`;

export const Heading = styled.h1`
  font-size: 1.8rem;
  &::after {
    content: "";
    display: block;
    width: 36px;
    height: 4px;
    background: ${({ theme }) => theme.colors.black};
  }
`;

export const RecipeList = styled.ul`
  padding: 15px 0;
`;

export const RecipeListItem = styled.li`
  padding: 8px;
  font-size: 1.4rem;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    font-weight: 700;
  }

  & + & {
    margin-top: 5px;
  }
`;
