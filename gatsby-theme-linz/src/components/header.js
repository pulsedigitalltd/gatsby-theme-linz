import React from "react";
import loadable from '@loadable/component'
import "@linzjs/lui/dist/fonts";
import "@linzjs/lui/dist/scss/base.scss";
//import { LuiHeader } from "@linzjs/lui";
import { Link } from "gatsby";
import "./header.scss";

const LuiHeader = loadable(() => import('@linzjs/lui'))

const Header = () => {
  return (
    <div className="TitlesHeader">
      <LuiHeader size="normal" headingText="Toitū Te Whenua Engineering Blog" homeLink="/" sticky={false} />
    </div>
  );
};

export default Header;
