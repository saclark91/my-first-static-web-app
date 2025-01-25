import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function fetchData() {
      try {
        const response = await fetch(`/api/message`);
        const result = await response.json(); // Parse the JSON response
        setData(result.message); // Access the "message" property
      } catch (error) {
        console.error('Error fetching data:', error); // Handle fetch errors
        setData('Error loading message'); // Fallback message for UI
      }
    })();
  }, []); // Add an empty dependency array to run this effect only once

  return <div>{data}</div>;
}

export default App;
