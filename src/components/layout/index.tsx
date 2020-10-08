import React from "react";

import Header from "../header";
import { Container } from "./styles";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
    </Container>
  );
};

export default Layout;
