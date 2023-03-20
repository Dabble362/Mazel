import React, { useState, useEffect } from 'react';

const TEST_ROUTE = '/api/testServerConnection';

const FetchData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(TEST_ROUTE)
      .then((response) => response.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div style={{ color: "black" }}>
      <h2>
        {`Express Server Connection Status -- ${TEST_ROUTE}`}
      </h2>
      {
        data
          ?
          <p>
            <span style={{ color: "green" }}>{`Connection live; message from the server follows:`}</span>
            <br />
            <span style={{ color: "rebeccapurple" }}>{data}</span>
          </p>
          :
          <p style={{ color: "red" }}>
            {`No connection found; verify that the server is running and you are asking for the correct endpoint`}
          </p>
      }
    </div>
  );
};

export default FetchData;
