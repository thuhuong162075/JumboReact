import React from 'react';
import {Bar, BarChart, ResponsiveContainer} from 'recharts';

import {
  announcementsNotification,
  appNotification,
  article,
  authors,
  chartData,
  marketingData,
  newArticlesData
} from './data';
import PopularArticles from 'components/dashboard/news/PopularArticals';
import MarketingTable from 'components/dashboard/Common/MarketingTable';
import StoryOfTheDay from 'components/dashboard/news/StoryOfTheDay';
import Comments from 'components/dashboard/news/CommentsTable';
import LatestNotifications from 'components/dashboard/Common/LatestNotifications';
import ReportBox from 'components/ReportBox/index';
import ContainerHeader from 'components/ContainerHeader/index';
import SiteTraffic from 'components/dashboard/news/SiteTraffic';
import YourDailyFeed from 'components/dashboard/news/YourDailyFeed';
import CardHeader from 'components/dashboard/Common/CardHeader/index';
import UserDetailTable from 'components/dashboard/Common/UserDetailTable';
import IntlMessages from 'util/IntlMessages';
import YearlyProfitChart from "components/dashboard/eCommerce/YearlyProfitChart";
import CustomLineChart from "components/CustomLineChart/index";

const News =(props)=> {

    return (
      <div className="dashboard animated slideInUpTiny animation-duration-3">
        <ContainerHeader match={props.match} title={<IntlMessages id="sidebar.dashboard.news"/>}/>

        <div className="row">
          <div className="col-lg-3 col-sm-6 col-12">
            <ReportBox
              styleName="bg-primary text-white p-3"
              price="85K+"
              icon="email-open"
              detail={<IntlMessages id="dashboard.newSubscriber"/>}
              subHeadingColor="text-white"
            >
              <ResponsiveContainer width="100%" height={100}>
                <BarChart data={chartData} maxBarSize={4}
                          margin={{left: 0, right: 0, top: 10, bottom: 10}}>
                  <Bar dataKey='amt' fill='white'/>
                </BarChart>
              </ResponsiveContainer>
            </ReportBox>
          </div>

          <div className="col-lg-3 col-sm-6 col-12">
            <ReportBox
              styleName="bg-cyan text-white p-3"
              icon="file"
              price="526"
              detail={<IntlMessages id="dashboard.newArticles"/>}
              subHeadingColor="text-white">
              <CustomLineChart
                chartData={newArticlesData.chartData}
                labels={newArticlesData.labels}
                borderColor="#FFF"
                borderWidth={5}
                pointBackgroundColor="#FFF"
                pointBorderWidth={2}
                pointRadius={0}
                height={100}
                pointHoverBorderColor="#00BBD4"
                lineTension={0.40}
                gridLinesDisplay={true}
                gridLineWidth={3}
                shadowColor="rgba(0,0,0,0.6)"
              />
            </ReportBox>
          </div>

          <div className="col-lg-3 col-sm-6 col-12">
            <ReportBox
              styleName="bg-pink text-white p-3"
              icon="accounts-alt"
              price="232"
              detail={<IntlMessages id="dashboard.newAuthors"/>}
              subHeadingColor="text-white">

              <YearlyProfitChart
                centerText="1800"
                height={100}
                chartType="newsDoughnut"
                backgroundColor={['#A9204F', '#FFF']}
                borderColor={['#A9204F', '#FFF']}
                hoverBorderColor={['#A9204F', '#FFF']}
                hoverBorderWidth={[2, 2]}
                textColor="#fff"
                rotation={50}/>
            </ReportBox>
          </div>

          <div className="col-lg-3 col-sm-6 col-12">
            <ReportBox
              styleName="bg-orange text-white p-3"
              icon="arrow-split"
              price="756+"
              detail={<IntlMessages id="dashboard.avgDailyTraffic"/>}
              subHeadingColor="text-white">
              <CustomLineChart
                chartData={newArticlesData.chartData}
                labels={newArticlesData.labels}
                borderColor="#FFF"
                borderWidth={3}
                pointBackgroundColor="#FFF"
                pointBorderWidth={2}
                pointRadius={0}
                height={100}
                pointHoverBorderColor="#F29100"
                lineTension={0}
                gridLinesDisplay={true}
                gridLineWidth={3}
                shadowColor="rgba(0,0,0,0.6)"
              />
            </ReportBox>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-4 col-lg-5 col-12">
            <div className="jr-card jr-full-card">
              <CardHeader heading={<IntlMessages id="dashboard.popularAuthors"/>}
                          subHeading={<IntlMessages id="dashboard.authorsWith"/>}/>

              <div className="jr-card-body">
                <UserDetailTable data={authors}/>
              </div>
            </div>
          </div>

          <div className="col-xl-8 col-lg-7 col-12">
            <div className="jr-card pb-2">
              <CardHeader heading={<IntlMessages id="dashboard.popularArticles"/>}
                          subHeading={<IntlMessages
                            id="dashboard.loremIpsum"/>}
                          styleName="mb-4"/>

              <div className="jr-card-body">
                <div className="row">
                  {article.map((article, index) => <PopularArticles key={index} article={article}/>)}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <LatestNotifications appNotification={appNotification}
                                 announcementsNotification={announcementsNotification}/>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <StoryOfTheDay/>
          </div>
          <div className="col-lg-4 col-md-12 col-12">
            <div className="jr-card jr-full-card">
              <div className="jr-card-header d-flex align-items-center">
                <h3 className="card-heading mb-0"><i
                  className="zmdi zmdi-chart-donut zmdi-hc-fw mr-2"/>Marketing Campaign
                </h3>
                <span className="badge badge-pink ml-auto">Today</span>
              </div>
              <div className='mt-n2'>
                <MarketingTable data={marketingData}/>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-7 col-12">
            <div className="jr-card jr-full-card overflow-hiden">
              <CardHeader heading={<IntlMessages id="dashboard.comments"/>}
                          styleName="pb-2"/>
              <Comments/>
            </div>
          </div>

          <div className="col-lg-5 col-12">
            <div className="jr-card jr-full-card">
              <CardHeader heading={<IntlMessages id="dashboard.yourDailyFeed"/>} styleName="pb-2"/>
              <YourDailyFeed/>
            </div>
          </div>
        </div>
        <SiteTraffic/>
      </div>

    );
  }

export default News;
