import React from "react";
import Footer from "components/Footer";
import ColorOption from "containers/Customizer/ColorOption";
import { isIOS, isMobile } from "react-device-detect";
import TopNav from "./Header/TopNav";
import AboveNavHeader from "./Header/AboveNavHeader";
import SideBar from "../../SideBar";

const AboveHeaderNav =(props)=> {

    if (isIOS && isMobile) {
      document.body.classList.add("ios-mobile-view-height");
    } else if (document.body.classList.contains("ios-mobile-view-height")) {
      document.body.classList.remove("ios-mobile-view-height");
    }

    return (
      <div className="app-container">
        <SideBar/>
        <div className="app-main-container">
          <div className="app-header app-header-horizontal">
            <TopNav styleName="app-top-header"/>

            <AboveNavHeader/>
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

export default AboveHeaderNav;
