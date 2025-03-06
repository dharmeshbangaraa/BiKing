import React, { useState, useEffect } from 'react';

const BadComponent = () => {
  const [userInput, setUserInput] = useState('');
  const [data, setData] = useState([]);
  
  const API_URL = 'https://example.com/api?key=123456'; 

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(response => {
        setData(response);
      })
      .catch(error => console.log("Error fetching data"));
  });

  return (
    <div>
      <h1>Bad React Component</h1>

      <div dangerouslySetInnerHTML={{ __html: userInput }} />

      <input type="text" onChange={(e) => setUserInput(e.target.value)} />
      
      <button onClick={() => alert("Clicked!")}>Click Me</button>

      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default BadComponent;
