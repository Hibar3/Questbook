import Head from 'next/head'
import styles from '../styles/Home.module.css'

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar, Button, Typography, Hidden, Drawer, MenuItem } from "@material-ui/core"

// @material-ui/icons
import { Menu } from "@material-ui/icons";
// core components

// Sections for this page

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export function HomePage() {
    const classes = useStyles();
    //  const { ...rest } = props;
    return (
        <div>
            <Head>
                <title>Questbook</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AppBar position="static" style={{ backgroundColor: "#34d925" }}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
                        <Menu
                            id="fade-menu"

                        >
                            <MenuItem >Profile</MenuItem>
                            <MenuItem >My account</MenuItem>
                            <MenuItem>Logout</MenuItem>
                        </Menu>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>

            </AppBar>



        </div>
    );
}