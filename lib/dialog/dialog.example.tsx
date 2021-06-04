import React, {useState} from 'react';
import Dialog from './dialog';

export default function () {
  const [x, setX] = useState(false);
  const [y, setY] = useState(false);
  return (
    <div>
      <div style={{position:'relative',zIndex:10,border:'1px solid red',color:'red'}}>
        <h1>example 1</h1>
        {/*点击后取反*/}
        <button onClick={() => setX(!x)}>click</button>

        <Dialog visible={x} buttons={
          [
            <button onClick={() => {setX(false);}}>ok</button>,
            <button>2</button>
          ]
        } onClose={() => {setX(false);}}>
          <strong>ha</strong>
        </Dialog>
      </div>
      {/*分割线------------------------*/}

      <div>
        <div style={{position:'relative',zIndex:9,border:'1px solid pink',color:'pink'}}>
        <h1>example 2</h1>
        {/*点击后取反*/}
        <button onClick={() => setY(!y)}>click</button>

        <Dialog visible={y} onMask={true} buttons={
          [
            <button onClick={() => {setY(false);}}>ok</button>,
            <button>2</button>
          ]
        } onClose={() => {setY(false);}}>
          <strong>ha</strong>
        </Dialog>
      </div>
      </div>
    </div>

  );
}
