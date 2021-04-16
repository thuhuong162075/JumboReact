import React from "react";

import Profile from "components/wall/Profile/index";
import PostList from "components/wall/PostList/index";
import Interests from "components/wall/Interests/index";
import Photos from "components/wall/Photos/index";
import Friends from "components/wall/Friends/index";
import CustomScrollbars from "util/CustomScrollbars";
import {communitiesList, friendList, interestList, photoList, postList, recentActivity, user, userInfo} from "./data";
import Communities from "components/wall/Communities/index";
import RecentActivity from "../../../dashboard/routes/CRM/RecentActivity";

const Wall = () => {

    return (
        <div className="jr-main-content">
            <div className="row">
                <div className="d-none d-sm-block col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                    <CustomScrollbars className="jr-wall-scroll scrollbar">
                        <div className="jr-wall-sidebar">
                            <Profile user={user} userInfo={userInfo}/>
                            <Interests interestList={interestList}/>
                            <Friends friendList={friendList}/>

                            <Photos photoList={photoList} title="Photos"/>
                            <span className="text-primary jr-fs-md pointer jr-d-block mb-1">Go to gallery <i
                                className={`zmdi zmdi-long-arrow-right jr-fs-xxl ml-2 d-inline-flex align-middle`}/></span>
                        </div>
                    </CustomScrollbars>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                    <CustomScrollbars className="jr-wall-scroll scrollbar">
                        <div className="jr-wall-postlist">
                            <PostList postList={postList} user={user}/>
                        </div>
                    </CustomScrollbars>
                </div>
                <div className="d-none d-lg-block col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                    <CustomScrollbars className="jr-wall-scroll scrollbar">
                        <div className="jr-wall-sidebar">
                            <Communities communitiesList={communitiesList}/>
                            <span className="text-primary jr-fs-md pointer d-block mb-4">See All Communities <i
                                className={`zmdi zmdi-long-arrow-right jr-fs-xxl ml-2 d-inline-flex align-middle`}/></span>
                            <RecentActivity recentList={recentActivity} shape="square"/>
                        </div>
                    </CustomScrollbars>
                </div>
            </div>
        </div>
    )
};

export default Wall
