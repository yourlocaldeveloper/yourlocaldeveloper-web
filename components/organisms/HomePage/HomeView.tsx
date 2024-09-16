import React from 'react';

import styles from './HomeView.module.scss';

export const HomeView: React.FC = ({}) => {
  return (
    <div className={styles.homeView}>
      <div className={styles.headingContainer}>
        <h1 className={styles.title}>Aaron Yates</h1>
        <p>FRONT-END WEB DEVELOPER</p>
        <p>
          Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
          Lorem Ipsum Lorem Ipsum Lorem Ipsum
        </p>
      </div>
    </div>
  );
};
