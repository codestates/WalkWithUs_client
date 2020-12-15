import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import jihee from "../image/jihee.png"
import juyeon from "../image/juyeon.png"
import gwonyong from "../image/gwonyong.png"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img src={juyeon} width="200px"/>
            <p>
              Juyeon Lee <br/><br/>
            
              &middot; Back-end <br/>
              &middot; Email:  ju71711@gmail.com <br/>
              <br/>
              안녕하세요. 이주연입니다.<br/>
              저는 --한 개발자가 되고 싶습니다.<br/>
              감사합니다.
              
            </p>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <img src={gwonyong} width="200px"/>
            <p>
            Gwonyong Park <br/><br/>
            
              &middot; Front-end, Team leader <br/>
              &middot; Email: sejongbgy07@gmail.com<br/>
              <br/>
              안녕하세요 박권용 입니다.<br/>
              저의 기술로 세상에 조금이나마<br/>
              도움이 되고 싶습니다.
            </p>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
          <img src={jihee} width="200px"/>
          <p>
          Jihee Yoon <br/><br/>
            
              &middot; Full-stack, Translate, Design
              <br/>
              &middot; Email: yjhe333@gmail.com<br/>
              <br/>
              안녕하세요 윤지희 입니다.<br/>

              저는 사람들을 돕고 성장하는<br/> 개발자가 되고 싶습니다.


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