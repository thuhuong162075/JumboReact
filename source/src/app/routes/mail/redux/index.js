import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Checkbox from '@material-ui/core/Checkbox';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import folders from '../data/folders';
import filters from '../data/filters';
import labels from '../data/labels';
import options from '../data/options';
import MailList from 'components/mail/MailList';

import ComposeMail from 'components/mail/Compose/index';
import AppModuleHeader from 'components/AppModuleHeader/index';
import MailDetail from 'components/mail/MailDetail/index';
import {
  fetchMails,
  getAllMail,
  getImportantMail,
  getMailNavFilters,
  getMailNavLabels,
  getNavFolders,
  getReadMail,
  getStarredMail,
  getUnimportantMail,
  getUnreadMail,
  getUnselectedAllMail,
  getUnStarredMail,
  handleMailRequestClose,
  hideMailLoader,
  onComposeMail,
  onDeleteMail,
  onFolderMenuItemSelect,
  onFolderSelect,
  onImportantSelect,
  onMailChecked,
  onMailLabelMenuItemSelect,
  onMailLabelSelect,
  onMailOptionMenuSelect,
  onMailSelect,
  onMailSend,
  onMailToggleDrawer,
  onSearchMail,
  onStartSelect,
  setCurrentMailNull,
  updateMailSearch
} from 'actions/Mail';
import IntlMessages from 'util/IntlMessages';
import CustomScrollbars from 'util/CustomScrollbars';


const MailWithRedux =()=> {

  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const {width} = useSelector(({settings}) => settings);

  const {
    searchMail,
    noContentFoundMessage,
    alertMessage,
    showMessage,
    drawerState,
    optionName,
    loader,
    currentMail,
    user,
    selectedMails,
    selectedFolder,
    composeMail,
    labelMenuState,
    folderMenuState,
    optionMenuState,
    folderMails
  } = useSelector(({mail}) => mail);


  const MailSideBar = () => {
    return <div className="module-side">

      <div className="module-side-header">
        <div className="module-logo">
          <i className="zmdi zmdi-email mr-4"/>
          <span><IntlMessages id="mail.mailbox"/></span>
        </div>

      </div>

      <div className="module-side-content">
        <CustomScrollbars className="module-side-scroll scrollbar"
                          style={{height: width >= 1200 ? 'calc(100vh - 200px)' : 'calc(100vh - 80px)'}}>
          <div className="module-add-task">
            <Button variant="contained" color="primary" className="btn-block"
                    onClick={() => {
                      dispatch(onComposeMail());
                    }}>
              <i className="zmdi zmdi-edit mr-3"/>
              <IntlMessages id="mail.compose"/> </Button>
          </div>

          <ul className="module-nav">

            {handleGetNavFolders()}

            <li className="module-nav-label">
              <IntlMessages id="mail.filters"/>
            </li>

            {getNavFilters()}

            <li className="module-nav-label">
              <IntlMessages id="mail.labels"/>
            </li>

            {getNavLabels()}

          </ul>
        </CustomScrollbars>
      </div>
    </div>
  };

  const handleDeleteMail = () => {
    dispatch(onDeleteMail());
  };

 const handleGetNavFolders = () => {
    return folders.map((folder, index) =>
      <li key={index} onClick={() => {
        dispatch(getNavFolders(folder));
        setTimeout(() => {
          dispatch(hideMailLoader());
        }, 1500);
      }
      }>
        <span className={`jr-link ${selectedFolder === folder.id ? 'active' : ''}`}>
          <i className={`zmdi zmdi-${folder.icon}`}/>
          <span>{folder.title}</span>
        </span>
      </li>
    )
  };
 const handleFolderMenuItemSelect = (folderId) => {
   dispatch(handleMailRequestClose());
   dispatch(onFolderMenuItemSelect(folderId));
  };
 const handleLabelMenuItemSelect = (label) => {
   dispatch(handleMailRequestClose());
   dispatch(onMailLabelMenuItemSelect(label));
  };
 const handleRequestClose = () => {
   dispatch(handleMailRequestClose());
  };
 const getNavFilters = () => {
    return filters.map((filter, index) =>
      <li key={index} onClick={() => {
        dispatch(getMailNavFilters(filter));
        setTimeout(() => {
          dispatch(hideMailLoader());
        }, 1500);
      }
      }>
        <span className="jr-link">
          <i className={`zmdi zmdi-${filter.icon}`}/>
          <span>{filter.title}</span>
        </span>
      </li>
    )
  };

 const handleFolderSelect = event => {
   dispatch(onFolderSelect());
   setAnchorEl(event.currentTarget)
  };
 const onLabelSelect = event => {
   dispatch(onMailLabelSelect());
   setAnchorEl(event.currentTarget)
  };
 const onOptionMenuSelect = event => {
   dispatch(onMailOptionMenuSelect());
   setAnchorEl(event.currentTarget)
  };
 const handleOptionMenuItemSelect = (option) => {
    switch (option.title) {
      case 'All':
       dispatch(handleMailRequestClose());
        dispatch(getAllMail());
        break;
      case 'None':
        dispatch(handleMailRequestClose());
        dispatch(getUnselectedAllMail());
        break;
      case 'Read':
        dispatch(handleMailRequestClose());
        dispatch(getReadMail());
        break;
      case 'Unread':
        dispatch(handleMailRequestClose());
        dispatch(getUnreadMail());
        break;
      case 'Starred':
        dispatch(handleMailRequestClose());
        dispatch(getStarredMail());
        break;
      case 'Unstarred':
        dispatch(handleMailRequestClose());
        dispatch(getUnStarredMail());
        break;
      case 'Important':
        dispatch(handleMailRequestClose());
        dispatch(getImportantMail());
        break;
      case 'Unimportant':
        dispatch(handleMailRequestClose());
        dispatch(getUnimportantMail());
        break;
      default:
        dispatch(handleMailRequestClose());
        dispatch(getAllMail());
    }
  };
 const handleGetAllMail = () => {
   dispatch(getAllMail());
  };
 const handleGetUnselectedAllMail = () => {
   dispatch(getUnselectedAllMail());
  };

 const getNavLabels = () => {
    return labels.map((label, index) =>
      <li key={index} onClick={() => {
        dispatch(getMailNavLabels(label));
        setTimeout(() => {
          dispatch(hideMailLoader());
        }, 1500);
      }
      }>
        <span className="jr-link">
          <i className={`zmdi zmdi-label-alt text-${label.color}`}/>
          <span>{label.title}</span>
        </span>
      </li>
    )
  };

 const displayMail = (currentMail, folderMails, noContentFoundMessage) => {
    return (<div className="module-box-column">
      {currentMail === null ?
        folderMails.length === 0 ?
          <div className="d-flex align-items-center justify-content-center"
               style={{height: width >= 1200 ? 'calc(100vh - 259px)' : 'calc(100vh - 238px)'}}>
            {noContentFoundMessage}
          </div>
          :
          <MailList mails={folderMails} onStartSelect={handleStartSelect}
                    onMailSelect={handleMailSelect}
                    width={width}
                    onMailChecked={handleMailChecked}/>
        :
        <MailDetail mail={currentMail} onStartSelect={handleStartSelect}
                    width={width}
                    onImportantSelect={handleImportantSelect}/>}
    </div>)
  };
 const handleGetMailActions = () => {
    return <div>
      <IconButton onClick={handleFolderSelect} className="icon-btn">
        <i className="zmdi zmdi-folder"/>
      </IconButton>

      <IconButton onClick={handleDeleteMail} className="icon-btn">
        <i className="zmdi zmdi-delete"/>
      </IconButton>

      <IconButton
        onClick={onLabelSelect} className="icon-btn">
        <i className="zmdi zmdi-label-alt"/>
      </IconButton>
    </div>
  };

 const handleMailChecked =(data)=> {
   dispatch(onMailChecked(data));
  };

 const handleAllMailSelect =()=> {
    const selectAll = selectedMails <= folderMails.length;
    if (selectAll) {
      handleGetAllMail();
    } else {
      handleGetUnselectedAllMail();
    }
  };

 const handleStartSelect =(data)=> {
    dispatch(onStartSelect(data));
  };

 const handleImportantSelect =(data)=> {
   dispatch(onImportantSelect(data));
  };

 const handleMailSend =(data)=> {
   dispatch(onMailSend(data));
  };

 const handleMailSelect =(mail)=> {
   dispatch(onMailSelect(mail));
    setTimeout(() => {
      dispatch(hideMailLoader());
    }, 1500);
  };

 const updateSearch =(evt)=> {
   dispatch(updateMailSearch(evt.target.value));
   dispatch(onSearchMail(evt.target.value));
  };

 const handleToggleDrawer =()=> {
   dispatch(onMailToggleDrawer());
  };
console.log("stared mails",folderMails)
    return (
      <div className="app-wrapper">
        <div className="animated slideInUpTiny animation-duration-3">
          <div className="app-module">

            <div className="d-block d-xl-none">
              <Drawer
                open={drawerState}
                onClose={handleToggleDrawer}>
                {MailSideBar()}
              </Drawer>
            </div>
            <div className="app-module-sidenav d-none d-xl-flex">
              {MailSideBar()}
            </div>

            <div className="module-box">

              <div className="module-box-header">

                <IconButton className="drawer-btn d-block d-xl-none" aria-label="Menu"
                            onClick={handleToggleDrawer}>
                  <i className="zmdi zmdi-menu"/>
                </IconButton>
                <AppModuleHeader placeholder="Search mails" user={user}
                                 onChange={updateSearch}
                                 value={searchMail}/>

              </div>

              <div className="module-box-content">
                <div className="module-box-topbar">
                  {currentMail === null ?
                    <div className="d-flex">
                      <Checkbox color="primary"
                                indeterminate={selectedMails > 0 && selectedMails < folderMails.length}
                                checked={selectedMails > 0}
                                onChange={handleAllMailSelect}
                                value="SelectMail"/>

                      <div className="d-flex align-items-center" onClick={onOptionMenuSelect}>
                        <span className="px-2"> {optionName}</span>
                        <IconButton className="icon-btn-sm">

                          <i className="zmdi zmdi-caret-down"/>
                        </IconButton>
                      </div>
                    </div>
                    :
                    <IconButton className="icon-btn"
                                onClick={() => {
                                  dispatch(setCurrentMailNull());
                                }}>
                      <i className="zmdi zmdi-arrow-back"/>
                    </IconButton>
                  }

                  {(selectedMails > 0) && handleGetMailActions()}

                  <Menu id="option-menu"
                        anchorEl={anchorEl}
                        open={optionMenuState}
                        onClose={handleRequestClose}

                        MenuListProps={{
                          style: {
                            width: 150,
                          },
                        }}>
                    {options.map(option =>
                      <MenuItem key={option.title}
                                onClick={()=>handleOptionMenuItemSelect(option)}>
                        {option.title}
                      </MenuItem>,
                    )}
                  </Menu>

                  <Menu id="folder-menu"
                        anchorEl={anchorEl}
                        open={folderMenuState}
                        onClose={handleRequestClose}

                        MenuListProps={{
                          style: {
                            width: 150,
                          },
                        }}>
                    {folders.map(folder =>
                      <MenuItem key={folder.id}
                                onClick={()=>handleFolderMenuItemSelect(folder.id)}>
                        {folder.title}
                      </MenuItem>,
                    )}
                  </Menu>
                  <Menu id="label-menu"
                        anchorEl={anchorEl}
                        open={labelMenuState}
                        onClose={handleRequestClose}

                        MenuListProps={{
                          style: {
                            width: 150,
                          },
                        }}>
                    {labels.map(label =>
                      <MenuItem key={label.id}
                                onClick={()=>handleLabelMenuItemSelect(label)}>
                        {label.title}
                      </MenuItem>,
                    )}
                  </Menu>
                </div>

                {loader ?
                  <div className="loader-view"
                       style={{height: width >= 1200 ? 'calc(100vh - 259px)' : 'calc(100vh - 238px)'}}>
                    <CircularProgress/>
                  </div> : displayMail(currentMail, folderMails, noContentFoundMessage)}

                <ComposeMail open={composeMail} user={user}
                             onClose={handleRequestClose}
                             onMailSend={handleMailSend}/>

              </div>
            </div>
          </div>
          <Snackbar
            anchorOrigin={{vertical: 'top', horizontal: 'center'}}
            open={showMessage}
            autoHideDuration={3000}
            onClose={handleRequestClose}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{alertMessage}</span>}
          />
        </div>
      </div>
    )
  };

export default MailWithRedux;