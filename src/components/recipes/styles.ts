import styled from "styled-components";

interface FilterProps {
  isvisible: boolean;
}

export const Container = styled.section`
  position: relative;
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-columns: 240px 1fr;
  grid-template-areas:
    "filter  header"
    "filter content";

  margin-top: 25px;

  @media screen and (max-width: 867px) {
    grid-template-rows: 100px 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      "header  header"
      "content content";

    justify-content: center;
    align-items: center;
  }
`;

export const Header = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;

  @media screen and (max-width: 867px) {
    justify-content: center;
    div + div {
      margin-left: 12px;
    }
  }
`;

export const FilterIconButton = styled.div`
  display: none;
  cursor: pointer;
  @media screen and (max-width: 867px) {
    display: block;
    width: 46px;
    height: 46px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.colors.black};
    border-radius: 8px;
  }
`;

export const SearchInputBlock = styled.div`
  position: relative;
  width: 100%;
`;

export const SearchInputIcon = styled.div`
  position: absolute;
  top: 12px;
  left: 8px;
  z-index: 100;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 14px 14px 14px 44px;

  background: ${({ theme }) => theme.colors.gray};
  border: none;
  border-radius: 12px;

  opacity: 0.9;

  font-weight: 500;
`;

export const Filter = styled.div<FilterProps>`
  grid-area: filter;

  width: 100%;
  height: 250px;
  padding: 12px;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 867px) {
    position: absolute;
    z-index: ${({ isvisible }) => (isvisible ? 10 : -10)};
    background: #fff;
    box-shadow: 0 0 5px 2.5px rgba(0, 0, 0, 0.12);
    top: 80px;
    opacity: ${({ isvisible }) => (isvisible ? "1" : "0")};
    transition: opacity 0.2s ease;
  }
`;

export const Content = styled.div`
  grid-area: content;
  width: 100%;
`;
