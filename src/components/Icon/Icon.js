// @flow strict
import React from 'react';
import styles from './Icon.module.scss';

type Props = {
  name: string,
  icon: {
    viewBox?: string,
    path?: string,
    transform?: string,
    fill?: string,
    stroke?: string
  }
};

const Icon = ({ name, icon }: Props) => (
  <svg className={styles['icon']} viewBox={icon.viewBox}>
    <title>{name}</title>
    <g transform={icon.transform} fill={icon.fill} stroke={icon.stroke}>
      <path d={icon.path} />)
    </g>
  </svg>
);

export default Icon;
