import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const [name, setName] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/greeting?name=${name}`);
  };

  return (
    <div className="page">
      <div className="card">
        <h1>Welcome</h1>
        <p>Please enter your name to receive a greeting.</p>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button onClick={handleSubmit}>Get Greeting</button>
      </div>
    </div>
  );
}

export default Welcome;
