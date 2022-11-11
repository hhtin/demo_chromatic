import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Button } from './stories/Button';



function App() {

    // Sets the hooks for both the label and primary props
    const [value, setValue] = useState('Secondary');
    const [isPrimary, setIsPrimary] = useState(false);
  
    // Sets a click handler to change the label's value
    const handleOnChange = () => {
      if (!isPrimary) {
        setIsPrimary(true);
        setValue('Primary');
      }
    };
  return (
    <>
    <Button primary={isPrimary} onClick={handleOnChange} label={value} />;
    </>
  );
}

export default App;
