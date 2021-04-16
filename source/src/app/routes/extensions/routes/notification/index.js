import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import CardBox from 'components/CardBox/index';
import ContainerHeader from 'components/ContainerHeader/index';
import IntlMessages from 'util/IntlMessages';

const Example =(props)=> {
 const createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info(<IntlMessages id="notification.infoMsg"/>);
          break;
        case 'success':
          NotificationManager.success(<IntlMessages id="notification.successMessage"/>, <IntlMessages
            id="notification.titleHere"/>);
          break;
        case 'warning':
          NotificationManager.warning(<IntlMessages id="notification.warningMessage"/>, <IntlMessages
            id="notification.closeAfter3000ms"/>, 3000);
          break;
        case 'error':
          NotificationManager.error(<IntlMessages id="notification.errorMessage"/>, <IntlMessages
            id="notification.clickMe"/>, 5000, () => {
            alert('callback');
          });
          break;
        default:
          NotificationManager.info(<IntlMessages id="notification.infoMsg"/>);
      }
    };
  };

    return (
      <div>
        <ContainerHeader title={<IntlMessages id="extension.notification"/>} match={props.match}/>
        <div className="row">
          <CardBox styleName="col-12" cardStyle='mb-0' heading="React Notification" childrenStyle="text-center">
            <div>
              <button className='btn btn-info'
                      onClick={createNotification('info')}><IntlMessages id="notification.info"/>
              </button>
              <button className='btn btn-success'
                      onClick={createNotification('success')}><IntlMessages
                id="notification.success"/>
              </button>
              <button className='btn btn-warning'
                      onClick={createNotification('warning')}><IntlMessages
                id="notification.warning"/>
              </button>
              <button className='btn btn-danger'
                      onClick={createNotification('error')}><IntlMessages id="notification.error"/>
              </button>
            </div>

          </CardBox>
        </div>

        <NotificationContainer/>
      </div>
    );
  };

export default Example;
