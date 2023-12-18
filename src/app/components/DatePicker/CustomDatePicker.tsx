// CustomDatePicker.jsx
import { SetStateAction, useEffect, useRef, useState } from 'react';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const CustomDatePicker = ({ onSelect }) => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });
  const calendarRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: { target: any; }) => {
    if (calendarRef.current && !calendarRef.current.contains(event.target)) {
      setShowCalendar(false);
    }
  };

  const handleDateSelect = (ranges: { selection: SetStateAction<{ startDate: Date; endDate: Date; key: string; }>; }) => {
    setSelectedDate(ranges.selection);
    onSelect(ranges);
    setShowCalendar(false);
  };

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const inputStyles = {
    width: '250px',
    fontSize: 'small',
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    outline: 'none',
    height: '55px',
  };

  return (
    <div className="date-input-container" ref={calendarRef}>
      <input
        type="text"
        style={inputStyles}
        placeholder="Select Date"
        onFocus={toggleCalendar}
        value={
          selectedDate
            ? `${selectedDate.startDate.toDateString()} - ${selectedDate.endDate.toDateString()}`
            : ''
        }
        readOnly
      />
      {showCalendar && (
        <div className="calendar-container">
          <DateRangePicker
            onChange={handleDateSelect}
            showSelectionPreview
            moveRangeOnFirstSelection={false}
            ranges={[selectedDate]}
          />
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
