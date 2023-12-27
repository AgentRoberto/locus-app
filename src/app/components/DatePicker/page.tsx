'use client'
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CustomDatePicker from './CustomDatePicker';
import styles from './styles.module.css';
import DatePickerLayout from './layout';
import SearchList from '../../listings/page';

function SearchSpaces() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [location, setLocation] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [services, setServices] = useState([]);
  
  const handleDateSelect = (ranges: { selection: { startDate: React.SetStateAction<null>; }; }) => {
    setStartDate(ranges.selection.startDate);
  };
  
  const handleLocationSelect = (event: any, value: React.SetStateAction<string>) => {
    setLocation(value);
  };

  const handleServiceSelect = (event: any, values: React.SetStateAction<never[]>) => {
    setSelectedServices(values);
    setServices(values)
  };

  const handleSearch = () => {
    setShowSearchResults(true);
  };

  const servicesOptions = ['Bartender', 'DJ', 'Event Planner', 'Catering'];

  return (
    <DatePickerLayout>
      <div className="mx-auto max-w-screen-lg">
        <div className="flex flex-col md:flex-row items-center justify-between p-6">
          <div className="w-full md:w-1/4 p-6 border-b md:border-b-0 md:border-r">
            <p className='text-sm font-bold mb-2 md:mb-0'>Where?</p>
            <Autocomplete
              disablePortal
              style={{width: '175px'}}
              id="location-search"
              options={['New York', 'Los Angeles', 'San Francisco', 'Miami', 'Chicago']}
              onChange={handleLocationSelect}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
          <div className="w-full md:w-1/4 p-6 border-b md:border-b-0 md:border-r">
            <p className='text-sm font-bold mb-2 md:mb-0'>When?</p>
            <CustomDatePicker onSelect={handleDateSelect} />
          </div>
          <div className="w-full md:w-1/4 p-6 border-b md:border-b-0 md:border-r">
            <p className='text-sm font-bold mb-2 md:mb-0'>What?</p>
            <Autocomplete
              style={{width: '175px'}}
              disablePortal
              multiple
              id="services-search"
              options={servicesOptions}
              onChange={handleServiceSelect}
              renderInput={(params) => (
                <TextField {...params} />
              )}
            />
          </div>
          <div className="w-full md:w-1/4 p-6">
            <button onClick={handleSearch} className={styles.btn}>SEARCH</button>
          </div>
        </div>
      </div>
      {showSearchResults && (
        <SearchList location={location} dateRange={startDate} services={selectedServices} />
      )}
    </DatePickerLayout>
  );
}

export default SearchSpaces;
