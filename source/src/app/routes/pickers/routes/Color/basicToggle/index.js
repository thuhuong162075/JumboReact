import React, {useState} from 'react'

import {CompactPicker} from 'react-color'

const BasicToggle = () => {

  const [pickerVisible, setPickerVisible] = useState(false);

  const handleColorChange = ({hex}) => console.log(hex);

  const onTogglePicker = () => {
    setPickerVisible(!setPickerVisible)
  };

  return (
    <div className="z-index-20">
      <button onClick={onTogglePicker}>
        Toggle Picker
      </button>

      {pickerVisible && (
        <div style={{position: 'absolute'}}>
          <CompactPicker
            color="#333"
            onChangeComplete={handleColorChange}
          />
        </div>
      )}
    </div>
  )
};

export default BasicToggle