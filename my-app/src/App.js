import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://skillkamp-api.com/v1/api/images/landing');
      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>My App</h1>
      <ul>
        {data.map((item) => (
          <li key={item.detail}></li>
        ))}
      </ul>
    </div>
  );
}

export default App;
