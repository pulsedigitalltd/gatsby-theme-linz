import React from "react";
import Header from "./header";
import Footer from "./footer";
import "@linzjs/lui/dist/fonts";
import "@linzjs/lui/dist/scss/base.scss";
import { Link } from "gatsby";
import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <html lang="en">
        <body>
          <Header />
            <div id="root" class="sb-show-main sb-main-padded">
                <div class="lui-pading-bottom-xl"> 
                    {children}
                </div>              
            </div>
          <Footer />
        </body>
      </html>
    </>
  );
};

export default Layout;
