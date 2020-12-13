import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import image1 from "../image/image1.jpg";
import image2 from "../image/image2.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={6} className="grid">
          <Paper className={classes.paper}>
            <img src={image1} width="300px" height="300px" />
            <p>
              누군가와 함께 나눌때 우울함을 극복 할수 있습니다.
              <br />
              walk with us 가 당신과 함께 하겠습니다
            </p>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <img src={image2} width="500px" />
            <p>
              누군가와 함께 나눌때 우울함을 극복 할수 있습니다.
              <br />
              walk with us 가 당신과 함께 하겠습니다
            </p>
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
