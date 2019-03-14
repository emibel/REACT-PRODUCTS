import React from 'react';
import { Paper, Grid } from '@material-ui/core';

import Main from 'UI/Main';
import SignUp from 'containers/SignUp';

import styles from './PageSignUp.scss';

const PageSignUp = () => (
  <Main className={styles.page}>
    <Grid className={styles['page-container']} container spacing={24}>
      <Grid className={styles.column} item xs={12}>
        <Paper>
          <SignUp></SignUp>
        </Paper>
      </Grid>
    </Grid>
  </Main>
);

export default PageSignUp;
