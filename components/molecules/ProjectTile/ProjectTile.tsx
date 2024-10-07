import React from 'react';
import Image, { StaticImageData } from 'next/image';

import styles from './ProjectTile.module.scss';
import { ProjectTag } from '@/components/atoms/ProjectTag';

interface ProjectTile {
  title: string;
  gitHubLink?: string;
  image?: StaticImageData;
  isProjectLinkExternal?: boolean;
  link?: string;
  linkText?: string;
  projectLabel?: string;
  projectLink?: string;
  tags?: string[];
}

export const ProjectTile: React.FC<ProjectTile> = (props) => {
  const {
    title,
    image,
    isProjectLinkExternal,
    link,
    linkText,
    projectLabel,
    projectLink,
    tags,
  } = props;

  const projectTags = (
    <div className={styles.projectTags}>
      {tags && tags.map((tag) => <ProjectTag key={tag}>{tag}</ProjectTag>)}
    </div>
  );

  return (
    <div className={styles.projectTile}>
      <a href={projectLink} className={styles.projectLogo}>
        {image && <Image src={image} alt={title} width={200} />}
      </a>
      <div className={styles.projectInfo}>
        <div className={styles.projectHeader}>{title}</div>
        <div className={styles.projectLink}>
          <a href={link} target={isProjectLinkExternal ? '_blank' : '_self'}>
            {linkText}
          </a>
        </div>
        {projectTags}
        {projectLabel && (
          <div className={styles.projectLabelContainer}>
            <ProjectTag>{projectLabel}</ProjectTag>
          </div>
        )}
        {projectLink && (
          <div className={styles.projectLinkSvg}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g id="Interface / External_Link">
                <path
                  id="Vector"
                  d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};
