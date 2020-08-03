import { useRouter } from "next/router";
import clsx from "clsx";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import ClippedDrawer from "../../components/ClippedDrawer";
import ClippedPanel from "../../components/ClippedPanel";

export default function Main() {
  const router = useRouter();
  const classes = useStyles();
  const theme = useTheme();
  console.log(router.query);
  console.log(router);
  return (
    <div>
      <div>
        <ClippedDrawer />
      </div>

      <p>asrrrrrrrrrrrrrrssfffffffffffffffsssssssrrrrrd</p>

      <main className={classes.content}>
        <p>asrrrrrrrrrrrrrrssfffffffffffffffsssssssrrrrrd</p>
      </main>
    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
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
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);
