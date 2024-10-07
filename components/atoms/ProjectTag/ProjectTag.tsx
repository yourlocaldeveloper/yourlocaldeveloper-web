import React from 'react';

import styles from './ProjectTag.module.scss';

interface ProjectTagProps {
  children: React.ReactNode;
}

export const ProjectTag: React.FC<ProjectTagProps> = (props) => {
  const { children } = props;

  return <div className={styles.projectTag}>{children}</div>;
};
