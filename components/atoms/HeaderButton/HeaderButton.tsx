import React from 'react';
import cn from 'classnames';

import styles from './HeaderButton.module.scss';

interface HeaderButton {
  text: string;
  link?: string;
  isSelected?: boolean;
}

export const HeaderButton: React.FC<HeaderButton> = (props) => {
  const { text, link, isSelected } = props;

  return (
    <a
      className={cn(styles.headerButton, { [styles.selected]: isSelected })}
      href={link}
    >
      {text}
    </a>
  );
};
