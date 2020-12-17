import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import jihee from "../image/jihee.png";
import juyeon from "../image/juyeon.png";
import gwonyong from "../image/gwonyong.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid className="grid" item xs={3}>
          <Paper className={classes.paper}>
            <img className="juyeon" src={juyeon} width="150px" />
            <p className="juyeonname">
              Juyeon Lee <br />
              <br />
              &middot; Back-end <br />
              &middot; Email: ju71711@gmail.com <br />
              <br />
              안녕하세요 이주연입니다.
              <br />
              저는 재미난 일상을 만드는
              <br />
              개발자가 되고 싶습니다.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <img className="gwonyong" src={gwonyong} width="150px" />
            <p className="gwonyongname">
              Gwonyong Park <br />
              <br />
              &middot; Front-end, Team leader <br />
              &middot; Email: sejongbgy07@gmail.com
              <br />
              <br />
              안녕하세요 박권용 입니다.
              <br />
              저의 기술로 세상에 조금이나마
              <br />
              도움이 되고 싶습니다.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <img className="jihee" src={jihee} width="150px" />
            <p className="jiheename">
              Jihee Yoon <br />
              <br />
              &middot; Full-stack, Translate, Design
              <br />
              &middot; Email: yjhe333@gmail.com
              <br />
              <br />
              안녕하세요 윤지희 입니다.
              <br />
              저는 사람들을 돕고 성장하는
              <br /> 개발자가 되고 싶습니다.
            </p>
          </Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={10}>
        <Grid container justify="center" item xs={20} spacing={9}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}
