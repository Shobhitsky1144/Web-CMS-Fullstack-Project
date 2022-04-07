import React, { useState } from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  Divider,
  IconButton,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { useNavigate } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import TopBar from "./TopBar";
// import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  drawer: {
    width: "190px",
  },
});

const Header = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const itemsList = [
    {
      text: "Portfolio",
      icon: <InboxIcon />,
      onClick: () => navigate("/admin-portfolio"),
    },
    {
      text: "Case Study",
      icon: <MailIcon />,
      onClick: () => navigate("/admin-casestudy"),
    },
  ];
  return (
    <>
      <TopBar />
      <MUIDrawer variant="permanent" className={classes.drawer}>
        <List>
          {itemsList.map((item, index) => {
            const { text, icon, onClick } = item;
            return (
              <ListItem button key={text} onClick={onClick}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </MUIDrawer>
    </>
  );
};

export default Header;
