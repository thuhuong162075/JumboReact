import React from "react";
import About from "components/profile/About/index";
import Biography from "components/profile/Biography/index";
import Events from "components/profile/Events/index";
import Contact from "components/profile/Contact/index";
import Friends from "components/profile/Friends/index";
import Photos from "components/profile/Photos/index";
import ProfileHeader from "components/profile/ProfileHeader/index";
import Auxiliary from "../../../../../util/Auxiliary";
import {friendList} from './data'
import {photoList} from "../Wall/data";

const Profile = () => {

  return (
    <Auxiliary>
      <ProfileHeader/>
      <div className="jr-profile-content">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-7 col-12">
            <About/>
            <Biography/>
            <Events/>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-5 col-12">
            <Contact/>
            <div className="row">
              <div className="col-12">
                <Friends friendList={friendList}/>
              </div>
              <div className="col-12">
                <Photos photoList={photoList}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Auxiliary>
  );
};

export default Profile;


