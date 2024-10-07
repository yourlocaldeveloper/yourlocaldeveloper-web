import React from 'react';

import { Heading } from '@/components/atoms/Heading';
import { ProjectTile } from '@/components/molecules/ProjectTile';

import me from '@/app/wool.png';
import tipsyTreats from '@/app/tipsy-treats.png';
import triviaDuck from '@/app/trivia-duck.png';
import screwfixLogo from '@/app/screwfix-logo.svg';
import styles from './ProjectView.module.scss';

export const ProjectView: React.FC = ({}) => {
  return (
    <div className={styles.projectView}>
      <div className={styles.projectViewContainer}>
        <div className={styles.projectHeadings}>
          <Heading as="h1">Projects</Heading>
          <Heading as="h6">Built @ work or during my own time</Heading>
        </div>
        <div className={styles.projectContainer}>
          <ProjectTile
            title={'Screwfix'}
            image={screwfixLogo}
            link={'https://www.screwfix.com/'}
            linkText={'screwfix.com'}
          />
          <ProjectTile title={'RFID Poker Table'} />
          <ProjectTile
            title={'yourlocaldev'}
            image={me}
            link={'#'}
            linkText={'yourlocaldev.com'}
          />
          <ProjectTile
            title={'Trivia Duck'}
            image={triviaDuck}
            link={'https://trivia-duck.netlify.app/'}
            linkText={'trivia-duck.netlify.app'}
          />
          <ProjectTile
            title={'Tipsy Treats'}
            image={tipsyTreats}
            link={'https://tipsy-treats.netlify.app/'}
            linkText={'tipsy-treats.netlify.app'}
          />
        </div>
      </div>
    </div>
  );
};
