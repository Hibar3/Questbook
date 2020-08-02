import PropTypes from 'prop-types';
import Link from 'next/link';
import {
    AppBar, Divider, IconButton, Toolbar, Button, Typography, Hidden,
    Drawer, MenuItem, List, ListItem, ListItemIcon, ListItemText
} from "@material-ui/core";

import CssBaseline from '@material-ui/core/CssBaseline';

import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const drawerWidth = 240;

const toRoute = () => {

};

export default function SidePanel() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className={classes.toolbar} />
            <Divider />
            <List>
                {['Home', 'Quest', 'Handbook', 'Message'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />} </ListItemIcon>

                        <Link as={'/' + [text] + '/main'} href={'/[' + [text] + ']/[main]'}>
                            <ListItemText primary={text} />
                        </Link>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Status', 'Settings'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>

    )
}


const useStyles = makeStyles((theme) => ({

    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },

    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));