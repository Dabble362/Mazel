import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
      <h2>Message from Express server:</h2>
      {data ? <p>{data}</p> : <p>Loading...</p>}
    </div>
  );
};

export default FetchData;
