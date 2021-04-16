import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import Drawer from '@material-ui/core/Drawer';
import {arrayMove} from 'react-sortable-hoc';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import toDosData from '../data/todo';
import filters from '../data/filters';
import labels from '../data/labels';
import options from '../data/options';
import todoConversationData from '../data/todoConversation';
import ToDoList from 'components/todo/ToDoList';
import ToDoDetail from 'components/todo/ToDoDetail/index';
import AppModuleHeader from 'components/AppModuleHeader/index';
import CircularProgress from '@material-ui/core/CircularProgress';
import IntlMessages from 'util/IntlMessages';
import CustomScrollbars from 'util/CustomScrollbars';


const ToDo = () => {

    const [searchTodo, setSearchTodo] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [loader, setLoader] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [drawerState, setDrawerState] = useState(false);
    const [optionName, setOptionName] = useState('None');
    const [anchorEl, setAnchorEl] = useState(null);
    const [allToDos, setAllToDos] = useState(toDosData);
    const [currentTodo, setCurrentTodo] = useState(null);
    const [user] = useState({
        name: 'Robert Johnson',
        email: 'robert.johnson@example.com',
        avatar: "https://via.placeholder.com/150x150"
    });
    const [selectedToDos, setSelectedToDos] = useState(0);
    const [labelMenuState, setLabelMenuState] = useState(false);
    const [optionMenuState, setOptionMenuState] = useState(false);
    const [toDos, setToDos] = useState(toDosData);
    const [filter, setFilter] = useState(-1);
    const [todoConversation, setTodoConversation] = useState(todoConversationData);
    const [conversation, setConversation] = useState(null);
    const [addTodo, setAddTodo] = useState(false);
    const [selectedSectionId, setSelectedSectionId] = useState("active");
    const {width} = useSelector(({settings}) => settings);


    const onSortEnd = ({oldIndex, newIndex}) => {
        setToDos(arrayMove(toDos, oldIndex, newIndex))
    };
    const onLabelSelect = event => {
        setAnchorEl(event.currentTarget);
        setLabelMenuState(!labelMenuState)
    };
    const onOptionMenuSelect = event => {
        setAnchorEl(event.currentTarget);
        setOptionMenuState(!optionMenuState);
    };
    const onOptionMenuItemSelect = (option) => {
        switch (option.title) {
            case 'All':
                handleRequestClose();
                getAllTodo();
                break;
            case 'None':
                handleRequestClose();
                getUnselectedAllTodo();
                break;
            case 'Starred':
                handleRequestClose();
                getStarredToDo();
                break;
            case 'Unstarred':
                handleRequestClose();
                getUnStarredTodo();
                break;
            case 'Important':
                handleRequestClose();
                getImportantToDo();
                break;
            case 'Unimportant':
                handleRequestClose();
                getUnimportantToDo();
                break;
            default:
                handleRequestClose();
                getAllTodo();
        }
    };
    const getAllTodo = () => {
        let updatedToDos = allToDos.map((todo) => todo ? {
            ...todo,
            selected: true
        } : todo);

        setSelectedToDos(toDos.length);
        setAllToDos(toDos);
        setOptionName('All');
        setToDos(updatedToDos);
    };
    const getUnselectedAllTodo = () => {
        let updatedToDos = allToDos.map((todo) => todo ? {
            ...todo,
            selected: false
        } : todo);

        setSelectedToDos(0);
        setAllToDos(updatedToDos);
        setOptionName('None');
        setToDos(updatedToDos);
    };
    const getStarredToDo = () => {
        let selectedToDos = 0;
        let updatedToDos = allToDos.map((todo) => {
            if (todo.starred) {
                selectedToDos++;
                return {...todo, selected: true};
            }
            return {...todo, selected: false}
        });
        setSelectedToDos(selectedToDos);
        setAllToDos(updatedToDos);
        setToDos(updatedToDos.filter(todo => !todo.deleted));
        return toDos;
    };
    const getUnStarredTodo = () => {
        let selectedToDos = 0;
        let toDos = allToDos.map((todo) => {
            if (!todo.starred) {
                selectedToDos++;
                return {...todo, selected: true};
            }
            return {...todo, selected: false}
        });
        setSelectedToDos(selectedToDos);
        setAllToDos(toDos);
        setOptionName('Unstarred');
        setToDos(toDos.filter(todo => !todo.deleted));
        return toDos;
    };
    const getImportantToDo = () => {
        let selectedToDos = 0;
        let toDos = allToDos.map((todo) => {
            if (todo.important) {
                selectedToDos++;
                return {...todo, selected: true};
            }
            return {...todo, selected: false}
        });

        setSelectedToDos(selectedToDos);
        setAllToDos(toDos);
        setOptionName('Important');
        setToDos(toDos.filter(todo => !todo.deleted));
        return toDos;
    };
    const getUnimportantToDo = () => {
        let selectedToDos = 0;
        let toDos = allToDos.map((todo) => {
            if (!todo.important) {
                selectedToDos++;
                return {...todo, selected: true};
            }
            return {...todo, selected: false}
        });
        setSelectedToDos(selectedToDos);
        setAllToDos(toDos);
        setOptionName('Unimportant');
        setToDos(toDos.filter(todo => !todo.deleted));

        return toDos;
    };
    const onLabelMenuItemSelect = (label) => {
        handleRequestClose();
        const toDos = allToDos.map(todo => {
                if (todo.selected) {
                    if (todo.labels.includes(label.id)) {
                        return {...todo, labels: removeLabel(todo, label.id)};
                    } else {
                        return {...todo, labels: addLabel(todo, label.id)};
                    }
                } else {
                    return todo;
                }
            }
        );
        setAlertMessage('Label Updated Successfully');
        setShowMessage(true);
        setAllToDos(toDos);
        setToDos(toDos);
    };
    const handleRequestClose = () => {
        setShowMessage(false);
        setAddTodo(false);
        setLabelMenuState(false);
        setOptionMenuState(false);
    };
    const onLabelUpdate = (data, label) => {
        if (data.labels.includes(label.id)) {
            data.labels = removeLabel(data, label.id);
        } else {
            data.labels = addLabel(data, label.id);
        }
        handleRequestClose();
        const toDos = allToDos.map(todo => {
                if (todo.id === data.id) {
                    return data;
                } else {
                    return todo;
                }
            }
        );
        setAlertMessage('Label Updated Successfully');
        setShowMessage(true);
        setCurrentTodo(data);
        setAllToDos(toDos);
        setToDos(toDos);

    };
    const onMarkAsStart = (data) => {
        const toDos = allToDos.map(todo => {
            if (todo.id === data.id) {
                return data;
            } else {
                return todo;
            }
        });
        setAlertMessage('ToDo Updated Successfully');
        setShowMessage(true);
        setAllToDos(toDos);
        setToDos(toDos);
    };

    const onToDoUpdate = (data) => {
        handleRequestClose();
        const toDos = allToDos.map(todo => {
            if (todo.id === data.id) {
                return data;
            } else {
                return todo;
            }
        });

        setAlertMessage('ToDo Updated Successfully');
        setShowMessage(true);
        setCurrentTodo(data);
        setAllToDos(toDos);
        setToDos(toDos);
    };


    const onDeleteToDo = (data) => {
        let selectedToDos = 0;
        const toDos = allToDos.map(todo => {
                if (todo.selected) {
                    selectedToDos++
                }
                if (data.id === todo.id) {
                    if (todo.selected) {
                        selectedToDos--
                    }
                    return {...todo, deleted: true};
                } else {
                    return todo;
                }
            }
        );

        setAlertMessage('ToDo Deleted Successfully');
        setShowMessage(true);
        setAllToDos(toDos);
        setCurrentTodo(null);
        setSelectedToDos(selectedToDos);
        setToDos(toDos.filter((todo) => !todo.deleted))

    };
    const getNavFilters = () => {
        return filters.map((filter, index) =>
                <li key={index} onClick={() => {
                    const filterMails = allToDos.filter(todo => {
                        if (filter.id === 0 && todo.starred) {
                            return todo
                        } else if (filter.id === 1 && todo.important) {
                            return todo
                        } else if (filter.id === 2 && todo.important) {
                            return todo
                        } else if (filter.id === 3 && todo.important) {
                            return todo
                        } else if (filter.id === 4 && todo.completed) {
                            return todo
                        } else if (filter.id === 5 && todo.deleted) {
                            return todo
                        } else return null;
                    });

                    setLoader(true);
                    setCurrentTodo(null);
                    setFilter(filter.id);
                    setToDos(filterMails);
                    setTimeout(() => {
                        setLoader(false);
                    }, 1500);
                }
                }>
        <span className={`jr-link ${filter.id === selectedSectionId ? 'active' : ''}`}>
          <i className={`zmdi zmdi-${filter.icon}`}/>
          <span>{filter.title}</span>
        </span>
                </li>
        )
    };
    const getNavLabels = () => {
        return labels.map((label, index) =>
                <li key={index} onClick={() => {
                    const filterMails = allToDos.filter(todo => todo.labels.includes(label.id));
                    setLoader(true);
                    setCurrentTodo(null);
                    setToDos(filterMails);
                    setTimeout(() => {
                        setLoader(false);
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
    const ToDoSideBar = () => {
        return <div className="module-side">
            <div className="module-side-header">
                <div className="module-logo">
                    <i className="zmdi zmdi-email mr-4"/>
                    <span><IntlMessages id="sidebar.appModule.toDo"/></span>
                </div>

            </div>
            <div className="module-side-content">
                <CustomScrollbars className="module-side-scroll scrollbar"
                                  style={{height: width >= 1200 ? 'calc(100vh - 200px)' : 'calc(100vh - 80px)'}}>
                    <div className="module-add-task">
                        <Button variant="contained" color="primary" className="btn btn-primary btn-block"
                                onClick={() => {
                                    setAddTodo(true);
                                }}> <IntlMessages id="todo.addTask"/> </Button>
                    </div>
                    <ul className="module-nav">

                        <li onClick={() => {
                            setCurrentTodo(null);
                            setToDos(allToDos)
                        }
            }>
              <span className="jr-link">
                <i className="zmdi zmdi-menu"/>
                <span><IntlMessages id="todo.all"/></span>
              </span>
            </li>

            <li className="module-nav-label">
              <IntlMessages id="todo.filters"/>
            </li>

                        {getNavFilters()}

            <li className="module-nav-label">
                <IntlMessages id="todo.labels"/>
            </li>

                        {getNavLabels()}

                    </ul>
                </CustomScrollbars>
            </div>
        </div>
    };
    const onSearchTodo = (searchText) => {
        if (searchText === '') {
            setToDos(allToDos.filter((todo) => !todo.deleted))
        } else {
            const searchToDos = allToDos.filter((todo) =>
                !todo.deleted && todo.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
            setToDos(searchToDos)
        }
    };
    const showToDos = () => {
        return currentTodo === null ?
            <ToDoList toDos={toDos} onSortEnd={onSortEnd}
                      onMarkAsStart={onMarkAsStart}
                      width={width}
                      onTodoSelect={onTodoSelect}
                      onTodoChecked={onTodoChecked} useDragHandle={true}/>
            :
            <ToDoDetail todo={currentTodo} user={user}
                        width={width}
                        conversation={conversation}
                        onLabelUpdate={onLabelUpdate}
                        onToDoUpdate={onToDoUpdate}
                        onDeleteToDo={onDeleteToDo}/>
  };

    const getToDoConversation = (id) => {
        return todoConversation.find((conversation) => conversation.id === id);
    };

    const onTodoChecked = (data) => {
        data.selected = !data.selected;
        let selectedToDos = 0;
        const updatedToDos = toDos.map(todo => {
                if (todo.selected) {
                    selectedToDos++;
                }
                if (todo.id === data.id) {
                    if (todo.selected) {
                        selectedToDos++;
                    }
                    return data;
                } else {
                    return todo;
                }
            }
        );
        setSelectedToDos(selectedToDos);
        setToDos(updatedToDos)
    };

    const onAllTodoSelect = () => {
        const selectAll = selectedToDos < toDos.length;
        if (selectAll) {
            getAllTodo();
        } else {
            getUnselectedAllTodo();
        }
    };

    const onTodoAdd = (data) => {
        setToDos(allToDos.concat(data));
        setAllToDos(allToDos.concat(data))
    };

    const onTodoSelect = (todo) => {
        let updatedConversationList = getToDoConversation(todo.id);
        if (updatedConversationList) {
            updatedConversationList = updatedConversationList.conversationData;
        } else {
            updatedConversationList = [];
        }

        setCurrentTodo(todo);
        setLoader(true);
        setConversation(updatedConversationList);
        setTimeout(() => {
            setLoader(true)
        }, 1500);
    };

    const removeLabel = (todo, label) => {
        todo.labels.splice(todo.labels.indexOf(label), 1);
        return todo.labels;
    };

    const addLabel = (todo, label) => {
        todo.labels = todo.labels.concat(label);
        return todo.labels
    };

    const onToggleDrawer = () => {
        setDrawerState(!drawerState);
    };

    const updateSearch = (evt) => {
        setSearchTodo(evt.target.value);
        onSearchTodo(evt.target.value)
    };


    return (
        <div className="app-wrapper">
            <div className="animated slideInUpTiny animation-duration-3">
                <div className="app-module">
                    <div className="d-block d-xl-none">
                        <Drawer
                            open={drawerState}
                            onClose={onToggleDrawer}>
                            {ToDoSideBar()}
                        </Drawer>
            </div>
            <div className="app-module-sidenav d-none d-xl-flex">
                {ToDoSideBar()}
            </div>

            <div className="module-box">
                <div className="module-box-header">

                    <IconButton className="drawer-btn d-block d-xl-none" aria-label="Menu"
                                onClick={onToggleDrawer}>
                        <i className="zmdi zmdi-menu"/>
                    </IconButton>
                    <AppModuleHeader placeholder="Search To Do" user={user}
                                     onChange={updateSearch}
                                     value={searchTodo}/>
                </div>
                <div className="module-box-content">
                    {currentTodo === null ?
                        <div className="module-box-topbar module-box-topbar-todo d-flex flex-row">
                            <Checkbox color="primary"
                                      indeterminate={selectedToDos > 0 && selectedToDos < toDos.length}
                                      checked={selectedToDos > 0}
                                      onChange={onAllTodoSelect}
                                      value="SelectMail"/>

                            <div className="d-flex align-items-center" onClick={onOptionMenuSelect}>
                                <span className="px-2"> {optionName}</span>
                                <IconButton className="icon-btn-sm">
                                    <i className="zmdi zmdi-caret-down"/>
                                </IconButton>
                            </div>

                            {(selectedToDos > 0) &&
                            <IconButton className="icon-btn"
                                        onClick={onLabelSelect}>
                                <i className="zmdi zmdi-label-alt"/>
                            </IconButton>}
                  </div>
                  :
                  <div className="module-box-topbar">
                    <IconButton className="icon-btn"
                                onClick={() => {
                                    setCurrentTodo(null);
                                }}>
                      <i className="zmdi zmdi-arrow-back"/>
                    </IconButton>
                  </div>
                }


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
                                      onClick={() => onOptionMenuItemSelect(option)}>
                                {option.title}
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
                                      onClick={() => onLabelMenuItemSelect(label)}>
                                {label.title}
                            </MenuItem>,
                  )}
                </Menu>

                {loader ?
                    <div className="loader-view"
                         style={{height: width >= 1200 ? 'calc(100vh - 259px)' : 'calc(100vh - 238px)'}}>
                        <CircularProgress/>
                    </div> :
                    showToDos()
                }
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

export default ToDo;