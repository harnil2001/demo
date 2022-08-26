// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {

  const [item, setvalue] = useState(Array(9).fill(null));
  const [sow,setsow] = useState(true);

  const i = (index) => {
    item[index] = sow ? 'x':'0'
    setvalue(item);
    setsow(!sow);
    console.log(item);
  }

  return (
    <>

      <div class="main">
        <div class="parent dm">
          <input type="button" name="" class="btn left" onClick={() => i(1)} value={item[1]} />
          <input type="button" name="" class="btn" onClick={() => i(2)} value={item[2]}/>
          <input type="button" name="" class="btn" onClick={() => i(3)} value={item[3]}/>
        </div>
        <div class="parent">
          <input type="button" name="" class="btn left" onClick={() => i(4)} value={item[4]} />
          <input type="button" name="" class="btn" onClick={() => i(5)} value={item[5]}/>
          <input type="button" name="" class="btn" onClick={() => i(6)} value={item[6]}/>
        </div>
        <div class="parent">
          <input type="button" name="" class="btn left down" onClick={() => i(7)} value={item[7]}/>
          <input type="button" name="" class="btn down" onClick={() => i(8)} value={item[8]}/>
          <input type="button" name="" class="btn down" onClick={() => i(9)} value={item[9]}/>
        </div>

        <div class="new_btn">
          <input type="button" name="" class="btn_new" value="New Game" />
        </div>
      </div>


    </>
  );
}

export default App;
