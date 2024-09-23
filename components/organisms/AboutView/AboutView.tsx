import React from 'react';
import Image from 'next/image';

import { Heading } from '@/components/atoms/Heading';

import blob from '@/app/blob.svg';
import woolHouse from '@/app/wool-house.png';
import styles from './AboutView.module.scss';

export const AboutView: React.FC = ({}) => {
  return (
    <div className={styles.aboutView}>
      <div className={styles.aboutViewContainer}>
        <div className={styles.leftContainer}>
          <Heading as={'h1'} isBold>
            About Me
          </Heading>
          <Image
            className={styles.woolHouse}
            src={woolHouse}
            width={450}
            alt={'A wool house'}
          />
          <div className={styles.blob}>
            <Image src={blob} width={500} alt={'A blob'} />
          </div>
        </div>
        <div className={styles.rightContainer}>
          <Heading as={'h6'}>
            I started my Web Developer journey in 2018 when I became a
            instructor for Code First Girls teaching basics to web developer
            using the skills I&apos;d learnt during University.
          </Heading>
          <Heading as={'h6'}>
            Since then I undertook a Full-Stack Web Development course with La
            Fosse Associates, in which I was offered a placement at Kingfisher
            plc. After my two year placement I joined them full time.
          </Heading>
          <Heading as={'h6'}>
            Out of work, I am an avid skier <span>formally a instructor!</span>,
            bit of a gamer and a curious traveler.
          </Heading>
          <Heading as={'h1'}>My Timeline</Heading>
          <ul className={styles.timeline}>
            <li>
              <div className={styles.timelineHeading}>
                <Heading as={'h6'}>University of York</Heading>
                <span>2015-2019</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus est erat, ultrices nec ullamcorper sit amet, tempor
                tempus odio. Sed ac nibh non leo feugiat efficitur ut ac ex.
                Pellentesque eu mauris elit.
              </p>
            </li>
            <li>
              <div className={styles.timelineHeading}>
                <Heading as={'h6'}>La Fosse Associates</Heading>
                <span>2021-2023</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus est erat, ultrices nec ullamcorper sit amet, tempor
                tempus odio. Sed ac nibh non leo feugiat efficitur ut ac ex.
                Pellentesque eu mauris elit.
              </p>
            </li>
            <li>
              <div className={styles.timelineHeading}>
                <Heading as={'h6'}>Kingfisher plc</Heading>
                <span>2021-PRESENT</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus est erat, ultrices nec ullamcorper sit amet, tempor
                tempus odio. Sed ac nibh non leo feugiat efficitur ut ac ex.
                Pellentesque eu mauris elit.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
