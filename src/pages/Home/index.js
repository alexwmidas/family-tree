import React, { useState, useCallback } from 'react';
import nodes from '../../common/data.json';
import ReactFamilyTree from 'react-family-tree';
import { TreeItem } from '../../components/TreeItem/TreeItem';
import { PinchZoomPan } from '../../components/PinchZoomPan/PinchZoomPan';

import styles from './home.module.css';

const myID = 'kuVISwh7w';

const WIDTH = 70;
const HEIGHT = 80;

const Home = () => {
  const [rootId, setRootId] = useState(myID);
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          Family
        </h1>
      </header>
      <PinchZoomPan
        min={0.5}
        max={2.5}
        captureWheel
        className={styles.wrapper}
      >
        <ReactFamilyTree
          nodes={nodes}
          rootId={rootId}
          width={WIDTH}
          height={HEIGHT}
          className={styles.tree}
          renderNode={(node) => (
            <TreeItem
              key={node.id}
              node={node}
              isRoot={node.id === rootId}
              onSubClick={setRootId}
              style={{
                width: WIDTH,
                height: HEIGHT,
                transform: `translate(${node.left * (WIDTH / 2)}px, ${node.top * (HEIGHT / 2)}px)`,
              }}
            />
          )}
        />
      </PinchZoomPan>
    </div>
  );
}

export default Home;