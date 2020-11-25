import React from 'react';
import classNames from 'classnames';
import { IFamilyExtNode } from 'relatives-tree/lib/types';
import styles from './TreeItem.module.css';

export const TreeItem = ({ node, isRoot, onSubClick, style }) => {
  return (
    <div className={styles.root} style={style}>
      <div
        className={classNames(
          styles.inner,
          styles[node.gender],
          isRoot && styles.isRoot
        )}
      >
        {node.name}
      </div>
    </div>
  );
}
