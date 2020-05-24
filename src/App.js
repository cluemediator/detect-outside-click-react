import React, { useState } from 'react';
import { SketchPicker } from 'react-color';

import useVisible from './useVisible';

function App() {
  const [colorHexCode, setColorHexCode] = useState('#000000');
  const { ref, isVisible, setIsVisible } = useVisible(false);

  return (
    <div className="App">
      <h3>Detect click outside a react component - <a href="https://www.cluemediator.com">Clue Mediator</a></h3>

      <div>
        <b>Selected Hex Color: </b>
        <span className="color-box" style={{ background: colorHexCode }}></span>
        {colorHexCode}
      </div>
      <br />

      <input type="text" readOnly value={colorHexCode} onClick={e => setIsVisible(!isVisible)} />
      {isVisible && <div style={{ position: 'absolute' }} ref={ref}>
        <SketchPicker
          color={colorHexCode}
          onChange={e => setColorHexCode(e.hex)} />
      </div>}
    </div>
  );
}

export default App;
