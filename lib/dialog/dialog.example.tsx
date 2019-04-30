import * as React from 'react';
import Dialog, { alert } from './dialog';
import { useState } from 'react';

export default function () {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  return (
    <div>
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
      <div>
        <button onClick={ () => setY(!y) }>click</button>
        <Dialog
          visible={ y }
          buttons={[
            <button onClick={ () => setY(false) }>1</button>,
            <button onClick={ () => setY(false) }>2</button>
          ]}
          onClose={ () => setY(false) }
        >
          你好
        </Dialog>
      </div>
      <div>
        <button onClick={ () => alert('123') }>click</button>
      </div>
    </div>
  )
}