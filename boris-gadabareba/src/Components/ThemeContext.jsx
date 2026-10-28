import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

function ChildComponent() {
  const { theme } = useContext(ThemeContext);
  return (
    <div style={{ 
      background: theme === 'light' ? '#f4f4f4' : '#333', 
      color: theme === 'light' ? '#000' : '#fff', 
      padding: '10px', 
      borderRadius: '5px',
      marginTop: '10px' 
    }}>
      <p>შვილი კომპონენტი იყენებს თემას: <strong>{theme}</strong> (props-ების გარეშე)</p>
    </div>
  );
}

export function ParentComponent() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ padding: '15px', border: '1px solid #ddd', marginBottom: '15px', borderRadius: '8px' }}>
        <h2>3.3 React Context</h2>
        <button onClick={toggleTheme}>თემის შეცვლა (მიმდინარე: {theme})</button>
        <ChildComponent />
      </div>
    </ThemeContext.Provider>
  );
}