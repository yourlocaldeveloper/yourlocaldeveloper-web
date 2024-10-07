import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
            alt={'A wool house'}
          />
          <div className={styles.blobContainer}>
            <Image className={styles.blob} src={blob} alt={'A blob'} />
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
            Out of work, I am an avid skier, <span>formally a instructor</span>,
            bit of a gamer and a curious traveler.
          </Heading>
          <Heading as={'h1'}>My Timeline</Heading>
          <ul className={styles.timeline}>
            <li>
              <div className={styles.timelineHeading}>
                <Heading as={'h4'}>University of York</Heading>
                <span>2015-2019</span>
              </div>
              <p>
                I attended the University of York in the UK where I undertook a
                Computer Science degree. I developed an interest in Web
                Development. From there I then joined Code First Girls as Lead
                Instructor to teach basic development and web dev skills to
                Women interested into getting into tech.
              </p>
            </li>
            <li>
              <div className={styles.timelineHeading}>
                <Heading as={'h4'}>La Fosse Associates</Heading>
                <span>2021-2023</span>
              </div>
              <p>
                I joined La Fosse Associates as a Trainee Full-Stack Web
                Developer. Over 3 months I built up my development skills.
                It&apos;s here I decided I wanted to focus primarily on
                Front-end Development. From there, I was placed with Kingfisher
                plc as a Front-End developer.
              </p>
            </li>
            <li>
              <div className={styles.timelineHeading}>
                <Heading as={'h4'}>Kingfisher plc</Heading>
                <span>2021-PRESENT</span>
              </div>
              <p>
                After my placement I joined Kingfisher permanently as a
                Mid-Level Front-End Developer. I continued working on
                Screwfix.com where we focused on performance, maintainence, 3rd
                party tool integreation and feature rollouts.
              </p>
            </li>
          </ul>
          <Link href="/projects" className={styles.returnLink}>
            See My Projects &#62;
          </Link>
        </div>
      </div>
    </div>
  );
};
