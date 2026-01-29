import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/data') // Use backend-service URL in Kubernetes
      .then(res => res.json())
      .then(json => setData(json.message))
      .catch(err => setData('Error fetching data'));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Frontend</h1>
      <p>{data}</p>
    </div>
  );
}

export default App;
