import { useRouter } from "next/router";
import clsx from "clsx";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import {
  List,
  Divider,
  Drawer,
  AppBar,
  Toolbar,
  Typography,
} from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import ClippedDrawer from "../../components/ClippedDrawer";
import ClippedPanel from "../../components/ClippedPanel";
import NavBar from "../../components/NavBar";

const drawerWidth = 200;

export default function Main() {
  const router = useRouter();
  const classes = useStyles();
  const theme = useTheme();
  console.log(router.query);
  console.log(router);
  return (
    <div>
      <div>
        {/* <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" noWrap>
              Quest
            </Typography>
          </Toolbar>
        </AppBar> */}
        {/* <ClippedDrawer /> */}
        <NavBar />
      </div>
      <div>
        <div>
          <p>asrrrrrrrrrrrrrrssfffffffffffffffsssssssrrrrrd</p>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            open={true}
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <Toolbar />
            <Divider />
            <List>
              {["Inbox", "Starred", "Send email"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Drawer>

          <p>asrrrrrrrrrrrrrrssfffffffffffffffsssssssrrrrrd</p>

          <main className={classes.content}>
            <p>asrrrrrrrrrrrrrrssfffffffffffffffsssssssrdrgrgrgrrrrrd</p>
          </main>
        </div>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerContainer: {
      overflow: "auto",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      position: "absolute",
      flexGrow: 1,
      padding: theme.spacing(4),
      marginLeft: "100px",
    },
  })
);
