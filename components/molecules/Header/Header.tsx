import React from 'react';
import Image from 'next/image';

import { Heading } from '@/components/atoms/Heading';
import { HeaderButton } from '@/components/atoms/HeaderButton';

import woolHead from '@/app/wool-head.png';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <Image src={woolHead} alt={'Little wool head'}></Image>
          </div>
          <Heading as={'h6'}>Aaron Yates</Heading>
        </div>
        <div className={styles.buttons}>
          <HeaderButton text={'About Me'} link={'/about'} />
          <HeaderButton text={'Projects'} />
          <HeaderButton text={'Contact'} />
          <HeaderButton text={'My CV'} />
        </div>
        <div className={styles.languageContainer}>
          <select className={styles.languageSelector}>
            <option value='EN'>EN</option>
            <option value='LT'>LT</option>
          </select>
        </div>
      </div>
    </div>
  );
};
