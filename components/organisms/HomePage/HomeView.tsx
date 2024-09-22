import React from 'react';
import Image from 'next/image';

import { Heading } from '@/components/atoms/Heading';

import wool from '@/app/wool.png';
import styles from './HomeView.module.scss';

export const HomeView: React.FC = ({}) => {
  return (
    <div className={styles.homeView}>
      <div className={styles.homeViewContainer}>
        <div className={styles.leftContainer}>
          <Heading>Aaron Yates</Heading>
          <Heading as={'h3'}>FRONT-END WEB DEVELOPER</Heading>
          <Heading as={'h6'}>
            A passionate and detail-oriented Front-End Web Developer with 3
            years of experience building
            <span className={styles.highlight}>
              &nbsp;dynamic, responsive and high-performance&nbsp;
            </span>
            web applications. Committed to continuous learning and staying
            updated with the latest technologies.
          </Heading>
        </div>
        <div className={styles.rightContainer}>
          <Image src={wool} width={300} alt={'A wool version of me'}></Image>
        </div>
      </div>
    </div>
  );
};
