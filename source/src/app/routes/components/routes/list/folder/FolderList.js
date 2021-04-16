import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

function FolderList() {
  return (
    <List>

      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <i className="zmdi zmdi-folder zmdi-hc-fw zmdi-hc-lg text-white"/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Photos" secondary="Jan 9, 2016"/>
      </ListItem>

      <ListItem button><ListItemAvatar>
        <Avatar>
          <i className="zmdi zmdi-file zmdi-hc-fw zmdi-hc-lg text-white"/>
        </Avatar>
      </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2016"/>
      </ListItem>

      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <i className="zmdi zmdi-account zmdi-hc-fw zmdi-hc-lg text-white"/>
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Meetings" secondary="Jan 7, 2016"/>
      </ListItem>

    </List>
  );
}

export default FolderList;