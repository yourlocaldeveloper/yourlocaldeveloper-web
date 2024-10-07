import React from 'react';
import Image, { StaticImageData } from 'next/image';

import styles from './ProjectTile.module.scss';

interface ProjectTile {
  title: string;
  gitHubLink?: string;
  image?: StaticImageData;
  link?: string;
  linkText?: string;
}

export const ProjectTile: React.FC<ProjectTile> = (props) => {
  const { title, image, link, linkText } = props;

  return (
    <div className={styles.projectTile}>
      <div className={styles.projectLogo}>
        {image && <Image src={image} alt={title} width={200} />}
      </div>
      <div className={styles.projectInfo}>
        <div className={styles.projectHeader}>{title}</div>
        <div className={styles.projectLink}>
          <a href={link}>{linkText}</a>
        </div>
        <div className={styles.projectTags}></div>
      </div>
    </div>
  );
};
