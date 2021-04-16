import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Checkbox from '@material-ui/core/Checkbox';
import Snackbar from '@material-ui/core/Snackbar';
import {useSelector} from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import CircularProgress from '@material-ui/core/CircularProgress';
import mails from '../data/mails';
import folders from '../data/folders';
import filters from '../data/filters';
import labels from '../data/labels';
import options from '../data/options';
import MailList from 'components/mail/MailList';

import ComposeMail from 'components/mail/Compose/index';
import AppModuleHeader from 'components/AppModuleHeader/index';
import MailDetail from 'components/mail/MailDetail/index';
import IntlMessages from 'util/IntlMessages';
import CustomScrollbars from 'util/CustomScrollbars';


const Mail  =()=> {
  const [searchMail, setSearchMail] = useState("");
  const [noContentFoundMessage, setNoContentFoundMessage] = useState("No mail found in selected folder");
  const [alertMessage, setAlertMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [drawerState, setDrawerState] = useState(false);
  const [optionName, setOptionName] = useState("None");
  const [anchorEl, setAnchorEl] = useState(null);
  const [allMail, setAllMail] = useState(mails);
  const [loader, setLoader] = useState(false);
  const [currentMail, setCurrentMail] = useState(null);

  const [user, setUser] = useState({
    name: "Robert Johnson",
    email: "robert@example.com",
    avatar: "https://via.placeholder.com/150x150"
  });
  const [selectedMails, setSelectedMails] = useState(0);
  const [selectedFolder, setSelectedFolder] = useState(0);
  const [composeMail, setComposeMail] = useState(false);
  const [labelMenuState, setLabelMenuState] = useState(false);
  const [folderMenuState, setFolderMenuState] = useState(false);
  const [optionMenuState, setOptionMenuState] = useState(false);
  const [folderMails, setFolderMails] = useState(mails.filter(mail => mail.folder === 0));

  const {width} = useSelector(({settings}) => settings);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  });

 const MailSideBar = () => {
    return <div className="module-side">

      <div className="module-side-header">
        <div className="module-logo">
          <i className="zmdi zmdi-email mr-3"/>
          <span><IntlMessages id="mail.mailbox"/></span>
        </div>

      </div>

      <div className="module-side-content">
          <CustomScrollbars className="module-side-scroll scrollbar"
                            style={{height: width >= 1200 ? 'calc(100vh - 200px)' : 'calc(100vh - 80px)'}}>
              <div className="module-add-task">
                  <Button variant="contained" color="primary" className="btn-block"
                          onClick={() => {
                              setComposeMail(true);
                          }}>
                      <i className="zmdi zmdi-edit zmdi-hc-fw"/>
                      <IntlMessages id="mail.compose"/> </Button>
              </div>

              <ul className="module-nav">

                  {getNavFolders()}

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

 const onDeleteMail = () => {
     const mails = allMail.map(mail =>
         mail.selected && (mail.folder === selectedFolder) ?
             {...mail, folder: 4, selected: false,} : mail
     );
    setAlertMessage('Mail Deleted Successfully');
    setShowMessage(true);
    setSelectedMails(0);
    setAllMail(mails);
    setFolderMails(mails.filter(mail => mail.folder === selectedFolder));
  };
 const getNavFolders = () => {
    return folders.map((folder, index) =>
      <li key={index} onClick={() => {
          const filterMails = allMail.filter(mail => mail.folder === folder.id);
          setSelectedFolder(folder.id);
          setNoContentFoundMessage('No mail found in selected folder');
          setCurrentMail(null);
          setLoader(true);
          setFolderMails(filterMails);

          setTimeout(() => {
              setLoader(false)
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
 const onFolderMenuItemSelect = (folderId) => {
     handleRequestClose();
     const mails = allMail.map(mail =>
         mail.selected && (mail.folder === selectedFolder) ?
             {...mail, folder: folderId, selected: false,} : mail
     );
     setSelectedMails(0);
     setAllMail(mails);
     setNoContentFoundMessage('No mail found in selected folder');
     setAlertMessage('Mail has been moved successfully');
     setShowMessage(true);
     setFolderMails(mails.filter(mail => mail.folder === selectedFolder));
 };
 const onLabelMenuItemSelect = (label) => {
     handleRequestClose();
    const mails = allMail.map(mail => {
        if (mail.selected && (mail.folder === selectedFolder)) {
            if (mail.labels.includes(label.id)) {
                return {...mail, labels: removeLabel(mail, label.id)};
            } else {
                return {...mail, labels: addLabel(mail, label.id)};
            }
        } else {
            return mail;
        }
        }
    );
     setNoContentFoundMessage('No mail found in selected label');
     setAlertMessage('Label Updated Successfully');
     setShowMessage(true);
     setAllMail(mails);
     setFolderMails(mails.filter(mail => mail.folder === selectedFolder));
 };
 const handleRequestClose = () => {
     setComposeMail(false);
     setShowMessage(false);
     setFolderMenuState(false);
     setLabelMenuState(false);
     setOptionMenuState(false);
 };
 const getNavFilters = () => {
    return filters.map((filter, index) =>
      <li key={index} onClick={() => {
          const filterMails = allMail.filter(mail => {
              if (filter.id === 0 && mail.starred) {
                  return mail
              } else if (filter.id === 1 && mail.important) {
                  return mail
              }
              return null;
          });
          setNoContentFoundMessage('No mail found in selected filter');
          setLoader(true);
          setFolderMails(filterMails);
          setTimeout(() => {
              setLoader(false);
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
 const onFolderSelect = event => {
     setAnchorEl(event.currentTarget);
     setFolderMenuState(!folderMenuState);
 };
 const onLabelSelect = event => {
     setAnchorEl(event.currentTarget);
     setLabelMenuState(!labelMenuState);
 };
 const onOptionMenuSelect = event => {
     setAnchorEl(event.currentTarget);
     setOptionMenuState(!optionMenuState);
 };
 const onOptionMenuItemSelect = (option) => {
    switch (option.title) {
        case 'All':
            handleRequestClose();
            getAllMail();
            break;
        case 'None':
            handleRequestClose();
            getUnselectedAllMail();
            break;
        case 'Read':
            handleRequestClose();
            getReadMail();
            break;
        case 'Unread':
            handleRequestClose();
            getUnreadMail();
            break;
        case 'Starred':
            handleRequestClose();
            getStarredMail();
            break;
        case 'Unstarred':
            handleRequestClose();
            getUnStarredMail();
            break;
        case 'Important':
            handleRequestClose();
            getImportantMail();
            break;
        case 'Unimportant':
            handleRequestClose();
            getUnimportantMail();
            break;
        default:
            handleRequestClose();
            getAllMail();
    }
  };
 const getAllMail = () => {
     let mails = allMail.map((mail) => mail.folder === selectedFolder ? {
         ...mail,
         selected: true
     } : mail);
     setSelectedMails(mails.length);
     setAllMail(mails);
     setOptionName('All');
     setFolderMails(mails.filter(mail => mail.folder === selectedFolder))
 };
 const getUnselectedAllMail = () => {
     let mails = allMail.map((mail) => mail.folder === selectedFolder ? {
         ...mail,
         selected: false
     } : mail);
     setSelectedMails(0);
     setAllMail(mails);
     setOptionName('None');
     setFolderMails(mails.filter(mail => mail.folder === selectedFolder))
 };
 const getReadMail = () => {
     let selectedMail = 0;
     let mails = allMail.filter(mail => mail.folder === selectedFolder);
     mails = mails.map((mail) => {
         if (mail.read) {
             selectedMail++;
             return {...mail, selected: true};
         }
         return {...mail, selected: false}
     });

     setSelectedMails(selectedMail);
     setAllMail(mails);
     setOptionName('Read');
     setFolderMails(mails.filter(mail => mail.folder === selectedFolder));
     return mails;
 };
 const getUnreadMail = () => {
     let selectedMail = 0;
     let mails = allMail.filter(mail => mail.folder === selectedFolder);
     mails = mails.map((mail) => {
         if (!mail.read) {
             selectedMail++;
             return {...mail, selected: true};
         }
         return {...mail, selected: false}
     });
     setSelectedMails(selectedMail);
     setAllMail(mails);
     setOptionName('Unread');
     setFolderMails(mails.filter(mail => mail.folder === selectedFolder));
     return mails;
 };
 const getStarredMail = () => {
     let selectedMail = 0;
     let mails = allMail.filter(mail => mail.folder === selectedFolder);
     mails = mails.map((mail) => {
         if (mail.starred) {
             selectedMail++;
             return {...mail, selected: true};
         }
         return {...mail, selected: false}
     });
     setSelectedMails(selectedMail);
     setAllMail(mails);
     setOptionName('Starred');
     setFolderMails(mails.filter(mail => mail.folder === selectedFolder));
     return mails;
 };
 const getUnStarredMail = () => {
     let selectedMail = 0;
     let mails = allMail.filter(mail => mail.folder === selectedFolder);
     mails = mails.map((mail) => {
         if (!mail.starred) {
             selectedMail++;
             return {...mail, selected: true};
         }
         return {...mail, selected: false}
     });

     setSelectedMails(selectedMail);
     setAllMail(mails);
     setOptionName('UnStarred');
     setFolderMails(mails.filter(mail => mail.folder === selectedFolder));
     return mails;
 };
 const getImportantMail = () => {
     let selectedMail = 0;
     let mails = allMail.filter(mail => mail.folder === selectedFolder);
     mails = mails.map((mail) => {
         if (mail.important) {
             selectedMail++;
             return {...mail, selected: true};
         }
         return {...mail, selected: false}
     });

     setSelectedMails(selectedMail);
     setAllMail(mails);
     setOptionName('Important');
     setFolderMails(mails.filter(mail => mail.folder === selectedFolder));
     return mails;
 };

 const getUnimportantMail = () => {
     let selectedMail = 0;
     let mails = allMail.filter(mail => mail.folder === selectedFolder);
     mails = mails.map((mail) => {
         if (!mail.important) {
             selectedMail++;
             return {...mail, selected: true};
         }
         return {...mail, selected: false}
     });

     setSelectedMails(selectedMail);
     setOptionName('Unimportant');
     setAllMail(mails);
     setNoContentFoundMessage('No Mail found in selected Label');
     setFolderMails(mails.filter(mail => mail.folder === selectedFolder));

     return mails;
 };
 const getNavLabels = () => {
    return labels.map((label, index) =>
      <li key={index} onClick={() => {
          const filterMails = allMail.filter(mail => mail.labels.includes(label.id));

          setLoader(true);
          setNoContentFoundMessage('No mail found in selected label');
          setFolderMails(filterMails);
          setTimeout(() => {
              setLoader(false)
          }, 1500);
      }
      }>
        <span className="jr-link">
          <i className={`zmdi zmdi-circle text-${label.color}`}/>
          <span>{label.title}</span>
        </span>
      </li>
    )
  };
 const onSearchMail = (searchText) => {
    if (searchText === '') {
        setFolderMails(allMail.filter((mail) => !mail.deleted))
    } else {
      const searchMails = allMail.filter((mail) =>
        !mail.deleted && mail.subject.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
        setFolderMails(searchMails)
    }
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
              <MailList mails={folderMails} onStartSelect={onStartSelect}
                        onMailSelect={onMailSelect}
                        width={width}
                        onMailChecked={onMailChecked}/>
          :
          <MailDetail mail={currentMail} onStartSelect={onStartSelect}
                      width={width}
                      onImportantSelect={onImportantSelect}/>}
    </div>)
  };
 const getMailActions = () => {
    return <div>
        <IconButton onClick={onFolderSelect} className="icon-btn">
            <i className="zmdi zmdi-folder"/>
        </IconButton>

        <IconButton onClick={onDeleteMail} className="icon-btn">
            <i className="zmdi zmdi-delete"/>
        </IconButton>

        <IconButton
            onClick={onLabelSelect} className="icon-btn">
            <i className="zmdi zmdi-label-alt"/>
        </IconButton>
    </div>
  };


 const onMailChecked=(data)=> {
    data.selected = !data.selected;
    let selectedMail = 0;
    const mails = folderMails.map(mail => {
        if (mail.selected) {
          selectedMail++;
        }
            if (mail.id === data.id) {
                if (mail.selected) {
                    selectedMail++;
                }
                return data;
            } else {
                return mail;
            }
        }
    );
     setSelectedMails(selectedMail);
     setFolderMails(mails);
 };

    const onAllMailSelect = () => {
        const selectAll = selectedMails <= folderMails.length;
        if (selectAll) {
            getAllMail();
        } else {
            getUnselectedAllMail();
        }
    };

    const removeLabel = (mail, label) => {
        mail.labels.splice(mail.labels.indexOf(label), 1);
        if (currentMail !== null && mail.id === currentMail.id) {
            setCurrentMail({...mail, labels: mail.labels})
        }
        return mail.labels;
    };

 const onStartSelect =(data)=> {
    data.starred = !data.starred;
    setAlertMessage(data.starred ? 'Mail Mark as Star' : 'Mail Remove as Star');
    setShowMessage(true);
    setFolderMails(folderMails.map(mail => mail.id === data.id ? data : mail));
  };

 const onImportantSelect =(data)=> {
    data.important = !data.important;
   setAlertMessage(data.important ? 'Mail Mark as Important' : 'Mail Remove as Important');
   setShowMessage(true);
   setFolderMails(folderMails.map(mail => mail.id === data.id ? data : mail));
  };

 const onMailSend =(data)=> {
   setAlertMessage('Mail Sent Successfully');
   setShowMessage(true);
   setFolderMails(allMail.concat(data));
   setAllMail(allMail.concat(data))
  };

 const onMailSelect=(mail)=> {
    setLoader(false);
    setCurrentMail(mail)
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  };

 const addLabel=(mail, label)=> {
    if (currentMail !== null && mail.id === currentMail.id) {
      setCurrentMail({...mail, labels: mail.labels.concat(label)})
    }
    return mail.labels.concat(label)
  };

 const updateSearch =(evt)=> {
    setSearchMail(evt.target.value);
    onSearchMail(evt.target.value)
  };

 const onToggleDrawer =()=> {
    setDrawerState(!drawerState);
  };

    return (

      <div className="app-wrapper">
        <div className="animated slideInUpTiny animation-duration-3">
          <div className="app-module">

            <div className="d-block d-xl-none">
              <Drawer
                open={drawerState}
                onClose={onToggleDrawer}>
                  {MailSideBar()}
              </Drawer>
            </div>
            <div className="app-module-sidenav d-none d-xl-flex">
              {MailSideBar()}
            </div>

            <div className="module-box">

              <div className="module-box-header">

                <IconButton className="drawer-btn d-block d-xl-none" aria-label="Menu"
                            onClick={onToggleDrawer}>
                  <i className="zmdi zmdi-menu"/>
                </IconButton>
                <AppModuleHeader placeholder="Search mails" user={user}
                                 onChange={updateSearch}
                                 value={onSearchMail}/>

              </div>

              <div className="module-box-content">
                <div className="module-box-topbar">
                  {currentMail === null ?
                    <div className="d-flex">
                      <Checkbox color="primary"
                                indeterminate={selectedMails > 0 && selectedMails < folderMails.length}
                                checked={selectedMails > 0}
                                onChange={onAllMailSelect}
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
                                  setCurrentMail(null)
                                }}>
                      <i className="zmdi zmdi-arrow-back"/>
                    </IconButton>
                  }

                  {(selectedMails > 0) && getMailActions()}


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
                                onClick={()=>onOptionMenuItemSelect(option)}>
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
                                onClick={()=>onFolderMenuItemSelect(folder.id)}>
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
                                onClick={()=>onLabelMenuItemSelect(label)}>
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
                             onMailSend={onMailSend}/>

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
  }


export default Mail;