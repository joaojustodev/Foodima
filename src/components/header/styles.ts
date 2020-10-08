import styled from "styled-components";

export const Container = styled.header`
  padding: 12px;
  margin-bottom: 25px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NavHeading = styled.div`
  a {
    display:flex;
  align-items:center;
  justify-content:center;
    color: ${({ theme }) => theme.colors.black};
    font-size: 26px;
    font-weight: 700;
  }
  img {
    width:46px;
    height:46px;
    margin-right:6px;
  }
`;

export const NavButtonWrapper = styled.div`
  display: flex;
  button {
    width: 80px;
    margin-right: 6px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    border-radius: 12px;
    border: none;
  }

  button.login {
    background: transparent;
    font-weight: 700;
    text-decoration: underline;
  }

  button.singup {
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.gray};
  }
`;
