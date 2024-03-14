import React, { useState, useEffect } from 'react';
import './App.css';
import { GoArrowSwitch } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { Title } from "./components/Title/Title";
import { ConversionSelect } from "./components/ConversionSelect/ConversionSelect";
import { InputFieldConversion } from "./components/InputFieldConversion/InputFieldConversion";
import { ResultConversion } from "./components/ResultConversion/ResultConversion";
import { SavedConversions } from "./components/SavedConversions/SavedConversions";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [conversionType, setConversionType] = useState('kmToMiles');
  const [savedConversions, setSavedConversions] = useState(() => {
    const savedData = localStorage.getItem('savedConversions');
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem('savedConversions', JSON.stringify(savedConversions));
  }, [savedConversions]);

  useEffect(() => {
    localStorage.setItem('savedConversions', JSON.stringify(savedConversions));
  }, [savedConversions]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSelectChange = (event) => {
    setConversionType(event.target.value);
  };

  const convert = (value, type) => {
    switch (type) {
      case 'kmToMiles':
        return parseFloat(value) * 0.621371;
      case 'milesToKm':
        return parseFloat(value) * 1.60934;
      case 'ftToM':
        return parseFloat(value) * 0.3048;
      case 'mToft':
        return parseFloat(value) * 3.28084;
      case 'cmToIn':
        return parseFloat(value) * 0.393701;
      case 'inToCm':
        return parseFloat(value) * 2.54;
      default:
        return '';
    }
  };

  const formatConversion = (value, type) => {
    const convertedValue = convert(value, type).toFixed(2);
    const units = {
      kmToMiles: { from: 'km', to: 'miles' },
      milesToKm: { from: 'miles', to: 'km' },
      ftToM: { from: 'feet', to: 'meters' },
      mToft: { from: 'meters', to: 'feet' },
      cmToIn: { from: 'cm', to: 'inches' },
      inToCm: { from: 'inches', to: 'cm' }
    };
    return `${value} ${units[type].from} → ${convertedValue} ${units[type].to}`;
  };

  const handleSwapClick = () => {
    let newConversionType;
    switch (conversionType) {
      case 'kmToMiles':
        newConversionType = 'milesToKm';
        break;
      case 'milesToKm':
        newConversionType = 'kmToMiles';
        break;
      case 'ftToM':
        newConversionType = 'mToft';
        break;
      case 'mToft':
        newConversionType = 'ftToM';
        break;
      case 'cmToIn':
        newConversionType = 'inToCm';
        break;
      case 'inToCm':
        newConversionType = 'cmToIn';
        break;
      default:
        break;
    }
    setInputValue(convert(inputValue, conversionType).toFixed(2));
    setConversionType(newConversionType);
  };

  const handleSaveClick = () => {
    if (inputValue && parseFloat(inputValue) !== 0) {
      const newConversion = {
        value: inputValue,
        type: conversionType === 'kmToMiles' ? 'kilometers to miles' : 'miles to kilometers',
        formatted: formatConversion(inputValue, conversionType)
      };
      setSavedConversions([...savedConversions, newConversion]);
      setInputValue('');
    } else {
      alert('Por favor, ingrese un valor válido mayor que 0.');
    }
  };

  const handleDeleteClick = (index) => {
    const updatedConversions = [...savedConversions];
    updatedConversions.splice(index, 1);
    setSavedConversions(updatedConversions);
  };

  return (
    <div className="App">
  <Title />
  <div className="main">
    <h2>Convert</h2>
    <div className="input-container">
      <div className='divSelect'>
        <ConversionSelect value={conversionType} onChange={handleSelectChange} />
      <button onClick={handleSwapClick} className="switch">
        <GoArrowSwitch className="white-icon" />
      </button>
      </div>
      <InputFieldConversion value={inputValue} onChange={handleInputChange} unit={conversionType} />
    </div>
    <div className="results">
      <FaRegHeart onClick={handleSaveClick} className="heart-icon" />
      <ResultConversion value={convert(inputValue, conversionType)} conversionType={conversionType} />
    </div>
  </div>
  <SavedConversions savedConversions={savedConversions} onDeleteClick={handleDeleteClick} />
  <footer className="footer">
    <div className="footer-content">
      <span>Terms Of Service</span>
      <span>Privacy Policy</span>
    </div>
  </footer>
</div>

  );
}

export default App;
