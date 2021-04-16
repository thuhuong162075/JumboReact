import React, {useState} from 'react';
import {DatePicker} from '@material-ui/pickers';

const DatePickers = () => {

  const [selectedDate, handleDateChange] = useState(new Date());

  return (
    <div key="basic_day" className="picker">
      <DatePicker
        label="Basic example"
        value={selectedDate}
        onChange={handleDateChange}
        animateYearScrolling={false}
      />
    </div>
  )
};

export default DatePickers;
