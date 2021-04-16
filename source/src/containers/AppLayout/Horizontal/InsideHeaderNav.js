import React from "react";
import {withRouter} from "react-router-dom";
import Footer from "components/Footer";
import ColorOption from "containers/Customizer/ColorOption";
import {isIOS, isMobile} from "react-device-detect";
import InsideNavHeader from "./Header/InsideNavHeader";
import SideBar from "../../SideBar";

const Horizontal = (props) => {

  if (isIOS && isMobile) {
    document.body.classList.add("ios-mobile-view-height");
  } else if (document.body.classList.contains("ios-mobile-view-height")) {
    document.body.classList.remove("ios-mobile-view-height");
  }

  return (
    <div className={`app-container `}>
      <SideBar/>
      <div className="app-main-container">
        <div className="app-header app-header-horizontal">
          <InsideNavHeader/>
        </div>

        <main className="app-main-content-wrapper">
          <div className="app-main-content">
            {props.children}
          </div>
          <Footer/>
        </main>
      </div>
      <ColorOption/>
    </div>
  );
};

export default withRouter(Horizontal);
