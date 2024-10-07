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
          <HeaderButton text={'Projects'} link={'/projects'} />
          <HeaderButton
            text={'My CV'}
            link={
              'https://drive.google.com/file/d/1MTbWUNQbnIXRXWgb0d8FKFiGNfn51Sye/view?usp=sharing'
            }
            isExternal
          />
        </div>
        <div className={styles.languageContainer}>
          <select className={styles.languageSelector}>
            <option value="EN">EN</option>
            <option value="LT">LT</option>
          </select>
        </div>
      </div>
    </div>
  );
};
