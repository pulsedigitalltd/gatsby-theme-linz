import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "@linzjs/lui/dist/fonts";
import "@linzjs/lui/dist/scss/base.scss";
import { Link } from "gatsby";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <html lang="en">
        <body>
          <Header />
            <div id="root" class="sb-show-main sb-main-padded">
                <div class="lui-pading-bottom-xl"> 
                  <h1 class="demo-type">Posts</h1> 
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
