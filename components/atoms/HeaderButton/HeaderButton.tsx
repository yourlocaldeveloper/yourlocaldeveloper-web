import React from 'react';
import cn from 'classnames';

import styles from './HeaderButton.module.scss';

interface HeaderButton {
  text: string;
  link?: string;
  isExternal?: boolean;
  isSelected?: boolean;
}

export const HeaderButton: React.FC<HeaderButton> = (props) => {
  const { text, link, isExternal, isSelected } = props;

  return (
    <a
      className={cn(styles.headerButton, { [styles.selected]: isSelected })}
      href={link}
      target={isExternal ? '_blank' : '_self'}
    >
      {text}
    </a>
  );
};
