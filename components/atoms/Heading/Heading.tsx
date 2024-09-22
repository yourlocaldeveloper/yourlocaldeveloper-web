import React from 'react';
import cn from 'classnames';

import styles from './Heading.module.scss';

type HeadingValue = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps {
  children: React.ReactNode;
  as?: HeadingValue;
  isBold?: boolean;
}

export const Heading: React.FC<HeadingProps> = (props) => {
  const { children, as: HeadingValue = 'h1', isBold } = props;

  return (
    <HeadingValue
      className={cn(styles.heading, styles[HeadingValue], {
        [styles.bold]: isBold,
      })}
    >
      {children}
    </HeadingValue>
  );
};
