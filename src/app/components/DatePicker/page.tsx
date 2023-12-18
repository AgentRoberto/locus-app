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
  const [startDate, setStartDate] = useState(null); // Change to store only start date
  const [services, setServices] = useState([]);
  
  const handleDateSelect = (ranges) => {
    // Update dateRange state when the user selects a date range
    setStartDate(ranges.selection.startDate);
  };
  
  const handleLocationSelect = (event, value) => {
    // Update location state when the user selects a location
    setLocation(value);
  };

  const handleServiceSelect = (event, values) => {
    // Update selectedServices state when the user selects services
    setSelectedServices(values);
    setServices(values)
  };

  const handleSearch = () => {
    // Perform any necessary validations or API calls here based on location, dateRange, and services

    // Toggle the display of search results
    setShowSearchResults(true);
  };

  const servicesOptions = ['Bartender', 'DJ', 'Event Planner', 'Catering'];

  return (
    <DatePickerLayout>
      <div className="mx-auto max-w-screen-lg">
        <div className="flex items-center justify-between p-4">
          <div className="w-1/1 p-4">
            <p className='text-sm font-bold mb-2 md:mb-0'>Where?</p>
            <Autocomplete
              disablePortal
              style={{width: '195px'}}
              id="location-search"
              options={['New York', 'Los Angeles', 'San Francisco', 'Miami', 'Chicago']}
              onChange={handleLocationSelect}
              renderInput={(params) => <TextField {...params} />}
            />
          </div>
          <div className="w-1/1 p-4">
            <p className='text-sm font-bold mb-2 md:mb-0'>When?</p>
            <CustomDatePicker onSelect={handleDateSelect} />
          </div>
          <div className="w-1/1 p-4">
            <p className='text-sm font-bold mb-2 md:mb-0'>What?</p>
            <Autocomplete
              style={{width: '195px'}}
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
          <div className="w-1/1 p-4">
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
