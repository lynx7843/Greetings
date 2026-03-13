import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Request() {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const userName = searchParams.get('name');

  return (
    <div className="page">
      <div className="card">
        <h1>Hello, {userName}!</h1>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    </div>
  );
}

export default Request;
