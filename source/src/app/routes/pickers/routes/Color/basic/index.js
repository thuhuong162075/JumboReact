import React, {useState} from 'react'
import {SketchPicker} from 'react-color'

const Basic = () => {

  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const [color, setColor] = useState({
    r: '241',
    g: '112',
    b: '19',
    a: '1',
  });

  const handleClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  const handleClose = () => {
    setDisplayColorPicker(false);
  };

  const handleChange = (color) => {
    setColor(color.rgb);
  };

  const background = `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
  return (
    <div>
      <div className="cp-swatch" onClick={handleClick}>
        <div className="cp-color"
             style={{backgroundColor: background}}/>
      </div>
      {displayColorPicker ? <div className="cp-popover">
        <div className="cp-cover" onClick={handleClose}/>
        <SketchPicker color={color} onChange={handleChange}/>
      </div> : null}

    </div>
  )
};

export default Basic