import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Heading } from '@/components/atoms/Heading';

import blob from '@/app/blob.svg';
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
          <div className={styles.homeLinks}>
            <Link
              href="https://github.com/yourlocaldeveloper"
              target={'_blank'}
            >
              GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/aaron-yates-uk/"
              target={'_blank'}
            >
              LinkedIn
            </Link>
          </div>
          <Link href="/about" className={styles.aboutLink}>
            Learn About Me &#62;
          </Link>
        </div>
        <div className={styles.rightContainer}>
          <Image
            className={styles.wool}
            src={wool}
            width={300}
            alt={'A wool version of me'}
          />
          <div className={styles.blob}>
            <Image src={blob} width={500} alt={'A blob'} />
          </div>
        </div>
      </div>
    </div>
  );
};
