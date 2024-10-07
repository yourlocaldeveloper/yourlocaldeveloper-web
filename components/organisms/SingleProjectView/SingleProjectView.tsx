import React from 'react';
import Image, { StaticImageData } from 'next/image';

import { ProjectTag } from '@/components/atoms/ProjectTag';

import styles from './SingleProjectView.module.scss';
import { Heading } from '@/components/atoms/Heading';

interface SingleProjectViewProps {
  bannerImage: StaticImageData;
  children: React.ReactNode;
  title: string;
  summary?: string;
  tags?: string[];
}

export const SingleProjectView: React.FC<SingleProjectViewProps> = (props) => {
  const { bannerImage, children, summary, title, tags } = props;

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
        </div>
        <div className={styles.childrenContainer}>{children}</div>
      </div>
    </div>
  );
};
