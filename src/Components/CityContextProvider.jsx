import React, { useState } from 'react';
import { CityContext } from './CityContext';

const CityContextProvider = ({ children }) => {
  const [city, setCity] = useState('');
  const [name, setName] = useState('Cairo');
  return (
    <CityContext.Provider value={{ city, setCity, name, setName }}>
      {children}
    </CityContext.Provider>
  );
};

export default CityContextProvider;
