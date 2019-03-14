import React from 'react';

import ProductsList from 'containers/ProductsList';
import Main from 'UI/Main';

import styles from './PageProducts.scss';

const PageHome = () => (
  <Main className={styles.page}>
    <ProductsList />
  </Main>
);

export default PageHome;
