import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
      margin:0;
      padding:0;
      outline:0;
      box-sizing: border-box;
    }

    html {
      font-size:10px;
      scroll-behavior: smooth;
    }


    body {
      background: #FDFCFC;
      font-family: "Roboto", sans-serif;
    }

    a,
    ul {
      text-decoration: none;
      list-style:none;
    }

    button {
      cursor:pointer;
    }

    .container {
      width:100%;
      max-width:1024px;
      margin: 0 auto;
    }

`;
