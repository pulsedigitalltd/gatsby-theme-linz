import React from "react";
import "@linzjs/lui/dist/fonts";
import "@linzjs/lui/dist/scss/base.scss";

/*
    LUI elements borrowed from sampl LUI site, needs to be replaced with proper NPM library 
    and matched to best practice, this is just to demonstrate gatsby theme approach
*/

const Header = ({ children }) => {
  return (
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>LINZ Engineering Blog</title>
    </head>
  );
};

export default Header;
