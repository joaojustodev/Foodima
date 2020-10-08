import styled from "styled-components";

export const Hero = styled.section`
  background: ${({ theme }) => theme.colors.primary};
  padding: 25px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border-radius: 16px;

  @media screen and (max-width: 867px) {
    flex-direction: column;
    text-align: center;
    border-radius: 0px;

    div + div {
      margin-top: 30px;
    }
  }
`;

export const HeroContentWrapper = styled.div`
  width: 200px;
  h1 {
    font-size: 3.6rem;
    font-weight: 700;
  }

  p {
    font-size: 1.4rem;
    padding: 15px 0 15px 0;
  }

  a {
    font-size: 1.2rem;
    font-weight: 700;
    text-decoration: underline;
  }

  @media screen and (max-width: 867px) {
    width: 100%;
  }
`;

export const HeroImageWrapper = styled.div`
  img {
    width: 400px;
    height: 400px;
  }

  @media screen and (max-width: 867px) {
    img {
      width: 340px;
      height: 340px;
      border-radius: 6px;
    }
  }
`;
