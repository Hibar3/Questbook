import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import ClippedPanel from "./ClippedPanel";

const drawerWidth = 200;

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Quest
          </Typography>
        </Toolbar>
      </AppBar>
      <div>
        {/* <Drawer
          className={classes.drawer}
          variant="persistent"
          open={true}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />
          <ClippedPanel />
        </Drawer> */}
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      [theme.breakpoints.up("xs")]: {
        width: "100%",
      },
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: "auto",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },

    toolbar: theme.mixins.toolbar,
  })
);
