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
            isProjectLinkExternal={false}
            link={'https://www.screwfix.com/'}
            linkText={'screwfix.com'}
            projectLabel={'Work'}
            projectLink={'/projects/screwfix'}
            tags={['TypeScript', 'React', 'Next.JS', 'Node.JS']}
          />
          <ProjectTile
            title={'RFID Poker Table'}
            projectLabel={'Personal'}
            isProjectLinkExternal={false}
            projectLink={'/projects/rfid'}
            tags={[
              'TypeScript',
              'React',
              'React Native',
              'Express',
              'Socket.io',
              'RFID Technology',
              'OBS',
            ]}
          />
          <ProjectTile
            title={'yourlocaldev'}
            image={me}
            link={'#'}
            linkText={'yourlocaldev.com'}
            projectLabel={'Personal'}
            tags={['TypeScript', 'React', 'Next.JS']}
          />
          <ProjectTile
            title={'Trivia Duck'}
            image={triviaDuck}
            isProjectLinkExternal={true}
            link={'https://trivia-duck.netlify.app/'}
            linkText={'trivia-duck.netlify.app'}
            projectLabel={'Personal'}
            projectLink={'https://github.com/cwesterduin/trivia-duck'}
            tags={['JavaScript', 'React', 'Redux', 'Socket.io', 'MongoDB']}
          />
          <ProjectTile
            title={'Tipsy Treats'}
            image={tipsyTreats}
            isProjectLinkExternal={true}
            link={'https://tipsy-treats.netlify.app/'}
            linkText={'tipsy-treats.netlify.app'}
            projectLabel={'Personal'}
            projectLink={'https://github.com/yourlocaldeveloper/tipsy_treats'}
            tags={['JavaScript', 'React', 'Restful APIs']}
          />
        </div>
      </div>
    </div>
  );
};
