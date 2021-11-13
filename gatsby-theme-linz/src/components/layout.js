import React from "react";
import Header from "./header";
import { Link } from "gatsby";
import logo from "./images/linz-logo.svg";

const Layout = ({ children }) => {
   return (
      <>
         <html lang="en">
            <Header />
            <body>
               <header class="lui-header-primary">
                  <div class="g-flex-container lui-max-width lui-header-top-section">
                  <div class="g-flex-row lui-header-cols">
                     <div class="lui-header-col-1 linz-logo-container">
                        <div class="g-flex-row">
                        <div class="lui-header-logo">
                           <Link to="/"><img class="linz-logo" src={logo} /></Link>
                        </div>
                        <div class="lui-header-title">
                           <h1>LINZ Engineering Blog</h1>
                        </div>
                        </div>
                     </div>
                  </div>
                  </div>
                  <div class="lui-header-swish"></div>
               </header>
               <div class="g-flex-container margin-top-md margin-bottom-xl">
                  <div class="g-flex-row">
                        <div class="lui-text-content-area">
                           {children}
                        </div>
                  </div>
               </div>
             </body>
         </html>
      </>
   )
}

export default Layout;