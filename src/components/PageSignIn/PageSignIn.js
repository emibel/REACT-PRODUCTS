import React from 'react';
import { Paper, Grid } from '@material-ui/core';

import Main from 'UI/Main';
import SignIn from 'containers/SignIn';

import styles from './PageSignIn.scss';

const PageSignIn = () => (
  <Main className={styles.page}>
    <Grid className={styles['page-container']} container spacing={24}>
      <Grid className={styles.column} item xs={12}>
        <Paper>
          <SignIn></SignIn>
        </Paper>
      </Grid>
    </Grid>
  </Main>
);

export default PageSignIn;
