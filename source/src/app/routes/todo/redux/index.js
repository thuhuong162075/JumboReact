import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import filters from '../data/filters';
import labels from '../data/labels';
import options from '../data/options';
import ToDoList from 'components/todo/ToDoList';
import ToDoDetail from 'components/todo/ToDoDetail/index';
import AppModuleHeader from 'components/AppModuleHeader/index';
import CircularProgress from '@material-ui/core/CircularProgress';
import {
  fetchTodo,
  fetchTodoConversation,
  getAllTodo,
  getImportantToDo,
  getNavFilters,
  getNavLabels,
  getStarredToDo,
  getUnimportantToDo,
  getUnselectedAllTodo,
  getUnStarredTodo,
  handleToDoMenuRequestClose,
  hideToDoLoader,
  onDeleteToDo,
  onLabelMenuItemSelect,
  onLabelSelect,
  onLabelUpdate,
  onMarkAsStart,
  onOptionMenuSelect,
  onSearchTodo,
  onSortEnd,
  onTodoAdd,
  onTodoChecked,
  onTodoSelect,
  onToDoUpdate,
  selectAllTodo,
  setCurrentToDoNull,
  toDoToggleDrawer,
  updateSearch
} from 'actions/ToDo';
import IntlMessages from 'util/IntlMessages';
import CustomScrollbars from 'util/CustomScrollbars';


const ToDoWithRedux =()=> {

  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedSectionId] = useState('active');

  const dispatch = useDispatch();
  const {width} = useSelector(({settings}) => settings);

  const {
    searchTodo,
    alertMessage,
    loader,
    showMessage,
    drawerState,
    optionName,
    currentTodo,
    user,
    selectedToDos,
    labelMenuState,
    optionMenuState,
    toDos,
    conversation
  } = useSelector(({toDo}) => toDo);

  useEffect(() => {
    dispatch(fetchTodo());
    dispatch(fetchTodoConversation());
  });


  const sortEnd = ({oldIndex, newIndex}) => {
    dispatch(onSortEnd({oldIndex, newIndex}));
  };
  const labelSelect = event => {
    dispatch(onLabelSelect());
    setAnchorEl(event.currentTarget);
  };

  const optionMenuSelect = event => {
   dispatch(onOptionMenuSelect());
    setAnchorEl(event.currentTarget);
  };
  const onHandleRequestClose = event => {
    dispatch(handleToDoMenuRequestClose());
  };

  const onOptionMenuItemSelect = (option) => {
    switch (option.title) {
      case 'All':
        dispatch(handleToDoMenuRequestClose());
        dispatch(selectAllTodo());
        break;
      case 'None':
        dispatch(handleToDoMenuRequestClose());
        dispatch(getUnselectedAllTodo());
        break;
      case 'Starred':
        dispatch(handleToDoMenuRequestClose());
        dispatch(getStarredToDo());
        break;
      case 'Unstarred':
        dispatch(handleToDoMenuRequestClose());
        dispatch(getUnStarredTodo());
        break;
      case 'Important':
        dispatch(handleToDoMenuRequestClose());
        dispatch(getImportantToDo());
        break;
      case 'Unimportant':
        dispatch(handleToDoMenuRequestClose());
        dispatch(getUnimportantToDo());
        break;
      default:
        dispatch(handleToDoMenuRequestClose());
        dispatch(selectAllTodo());
    }
  };
  const labelMenuItemSelect = (label) => {
    dispatch(handleToDoMenuRequestClose());
    dispatch(onLabelMenuItemSelect(label));
  };

  const labelUpdate = (data, label) => {
    dispatch(handleToDoMenuRequestClose());
    dispatch(onLabelUpdate({data, label}));
  };
  const toDoUpdate = (data) => {
    dispatch(handleToDoMenuRequestClose());
    dispatch(onToDoUpdate(data));
  };
  const markAsStart = (data) => {
   dispatch(onMarkAsStart(data));
  };


  const deleteToDo = (data) => {
    dispatch(onDeleteToDo(data));
  };

  const todoChecked = (data) => {
    dispatch(onTodoChecked(data));
  };

  const onAllTodoSelect = () => {
    const selectAll = selectedToDos < toDos.length;
    if (selectAll) {
      dispatch(selectAllTodo());
    } else {
      dispatch(getUnselectedAllTodo());
    }
  };

 const onTodoAdd = (data) => {
   dispatch(onTodoAdd(data));
  };

 const todoSelect = (todo) => {
   dispatch(onTodoSelect(todo));
    setTimeout(() => {
      dispatch(hideToDoLoader());
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
   dispatch(toDoToggleDrawer());
  };

 const onUpdateSearch = (evt) => {
    dispatch(updateSearch(evt.target.value));
    dispatch(onSearchTodo(evt.target.value));
  };

 const onGetNavFilters = () => {
    return filters.map((filter, index) =>
      <li key={index} onClick={() => {
       dispatch(getNavFilters(filter));
        setTimeout(() => {
          dispatch(hideToDoLoader());
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
 const onGetNavLabels = () => {
    return labels.map((label, index) =>
      <li key={index} onClick={() => {
        dispatch(getNavLabels(label));
        setTimeout(() => {
          dispatch(hideToDoLoader());
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
      <div className="module-side-content scrollbar">
        <CustomScrollbars className="module-side-scroll scrollbar"
                          style={{height: width >= 1200 ? 'calc(100vh - 200px)' : 'calc(100vh - 80px)'}}>
          <div className="module-add-task">
            <Button variant="contained" color="primary" className="btn btn-primary btn-block" onClick={() => {
            }}> <IntlMessages id="todo.addTask"/> </Button>
          </div>
          <ul className="module-nav">

            <li onClick={() => {
              dispatch(getAllTodo());
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

            {onGetNavFilters()}

            <li className="module-nav-label">
              <IntlMessages id="todo.labels"/>
            </li>

            {onGetNavLabels()}

          </ul>
        </CustomScrollbars>
      </div>
    </div>
  };
 const showToDos = () => {
    return currentTodo === null ?
      <ToDoList toDos={toDos} onSortEnd={sortEnd}
                onTodoSelect={todoSelect}
                width={width}
                onMarkAsStart={markAsStart}
                onTodoChecked={todoChecked} useDragHandle={true}/>
      :
      <ToDoDetail todo={currentTodo} user={user}
                  conversation={conversation}
                  onLabelUpdate={labelUpdate}
                  width={width}
                  onToDoUpdate={toDoUpdate}
                  onDeleteToDo={deleteToDo}/>;
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
                                 onChange={onUpdateSearch}
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

                    <div className="d-flex align-items-center" onClick={optionMenuSelect}>
                      <span className="px-2"> {optionName}</span>
                      <IconButton className="icon-btn-sm">
                        <i className="zmdi zmdi-caret-down"/>
                      </IconButton>
                    </div>

                    {(selectedToDos > 0) &&
                    <IconButton className="icon-btn"
                                onClick={labelSelect}>
                      <i className="zmdi zmdi-label-alt"/>
                    </IconButton>}
                  </div>
                  :
                  <div className="module-box-topbar">
                    <IconButton className="icon-btn"
                                onClick={() => {
                                  dispatch(setCurrentToDoNull());
                                }}>
                      <i className="zmdi zmdi-arrow-back"/>
                    </IconButton>
                  </div>
                }


                <Menu id="option-menu"
                      anchorEl={anchorEl}
                      open={optionMenuState}
                      onClose={()=>dispatch(handleToDoMenuRequestClose)}
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

                <Menu id="label-menu"
                      anchorEl={anchorEl}
                      open={labelMenuState}
                      onClose={()=>dispatch(handleToDoMenuRequestClose)}
                      MenuListProps={{
                        style: {
                          width: 150,
                        },
                      }}>
                  {labels.map(label =>
                    <MenuItem key={label.id}
                              onClick={()=>labelMenuItemSelect(label)}>
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
            onClose={onHandleRequestClose}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{alertMessage}</span>}
          />
        </div>
      </div>
    )
  };

export default ToDoWithRedux;