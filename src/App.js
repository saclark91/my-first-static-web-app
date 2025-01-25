import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function fetchData() {
      try {
        const response = await fetch(`/api/message`);
        const contentType = response.headers.get("content-type");
        let result;
        if (contentType && contentType.includes("application/json")) {
          result = await response.json(); // Parse the JSON response
          setData(result.message); // Access the "message" property
        } else {
          result = await response.text(); // Parse the text response
          setData(result); // Use the plain text response
        }
      } catch (error) {
        console.error('Error fetching data:', error); // Handle fetch errors
        setData('Error loading message'); // Fallback message for UI
      }
    })();
  }, []); // Add an empty dependency array to run this effect only once

  return <div><strong>{data}</strong></div>;
}

export default App;