import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import { ProjectTag } from '@/components/atoms/ProjectTag';

import styles from './SingleProjectView.module.scss';
import { Heading } from '@/components/atoms/Heading';

interface SingleProjectViewProps {
  bannerImage: StaticImageData;
  children: React.ReactNode;
  title: string;
  githubLink?: string;
  liveLink?: string;
  summary?: string;
  tags?: string[];
}

export const SingleProjectView: React.FC<SingleProjectViewProps> = (props) => {
  const { bannerImage, children, githubLink, liveLink, summary, title, tags } =
    props;

  const singleProjectTags = (
    <div className={styles.projectTags}>
      {tags && tags.map((tag) => <ProjectTag key={tag}>{tag}</ProjectTag>)}
    </div>
  );

  return (
    <div className={styles.singleProjectView}>
      <div className={styles.singleProjectViewContainer}>
        <div className={styles.bannerImageContainer}>
          <Image className={styles.bannerImage} src={bannerImage} alt={title} />
        </div>
        <div className={styles.summaryContainer}>
          <Heading as="h1">{title}</Heading>
          {summary}
          {singleProjectTags}
          <div className={styles.summaryLinks}>
            {githubLink && (
              <Link href={githubLink} target="_blank">
                Github
              </Link>
            )}
            {liveLink && (
              <Link href={liveLink} target="_blank">
                Live Link
              </Link>
            )}
          </div>
        </div>
        <div className={styles.childrenContainer}>{children}</div>
        <Link href="/projects" className={styles.returnLink}>
          &#60; See Other Projects
        </Link>
      </div>
    </div>
  );
};
