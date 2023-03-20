import React, { useState, useEffect } from 'react';

const TestEndpoint = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(props.endpoint)
      .then((response) => response.json())
      .then((data) => setData(data.message));
  }, [props.endpoint]);

  return (
    <div style={{ color: "black", outline: "1px solid black" }}>
      <h2>
        {`Express Server Connection Status (Endpoint: ${props.endpoint})`}
      </h2>
      {
        data
          ?
          <p>
            <span style={{ color: "green" }}>{`Connection live; message from the endpoint follows:`}</span>
            <br />
            <span style={{ color: "rebeccapurple" }}>{data}</span>
          </p>
          :
          <p style={{ color: "red" }}>
            {`No connection found; verify that the server is running and you are asking for a valid endpoint`}
          </p>
      }
    </div>
  );
};

export default TestEndpoint;
