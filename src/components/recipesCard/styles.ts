import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const Card = styled.article`
  width: 240px;
  height: 180px;
  cursor: pointer;
`;

export const CardImage = styled.div`
  width: 100%;
  height: 120px;
  margin-bottom: 12px;

  background: #ccc;
  overflow: hidden;
  border-radius: 12px;

  img {
    width: 240px;
    height: 120px;
  }
`;

export const CardName = styled.h1``;

export const CardInfo = styled.div`
  width: 100%;
  padding: 6px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardInfoStars = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-left: 4px;
  font-size: 1.2rem;

  svg {
    margin-right: 4px;
  }
`;

export const CardInfoAuthor = styled.p`
  color: ${({ theme }) => theme.colors.gray500};
  font-weight: 700;
`;
