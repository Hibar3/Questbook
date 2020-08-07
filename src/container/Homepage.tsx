import Head from "next/head";
import clsx from "clsx";
import styles from "../styles/Home.module.css";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  AppBar,
  IconButton,
  Toolbar,
  Button
} from "@material-ui/core";

// @material-ui/icons
import { Menu } from "@material-ui/icons";
// core components
import NavBar from "../components/NavBar";

// Sections for this page


export function HomePage() {
  const classes = useStyles();
  //  const { ...rest } = props;
  return (
    <div>
      <Head>
        <title>Questbook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <div>
        <p>Sub-components and content here</p>
        
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  customTitle: {
    textAlign: "center",
  },

  login: {
    display: "flex",
    color: "red",
  },
}));
