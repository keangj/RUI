import * as React from 'react';
import Dialog from './dialog';
import { useState } from 'react';

export default function () {
  const [x, setX] = useState(true);
  return (
    <div>
      <button onClick={ () => setX(!x) }>click</button>
      <Dialog
        visible={ x }
        buttons={[
          <button onClick={ () => setX(false) }>1</button>,
          <button onClick={ () => setX(false) }>2</button>
        ]}
        onClose={ () => setX(false) }
        clickCloseMask={ true }
      >
        你好
      </Dialog>
    </div>
  )
}