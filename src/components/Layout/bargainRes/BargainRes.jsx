import React, { useState } from 'react';
import axios from 'axios';
import AllHeader from '../AllHeader/AllHeader/AllHeader';
import MenusFarmer from '../../Menus/MenusFarmer/MenusFarmer';

const BargainRes = ({ bargain, onRespond }) => {
  const [status, setStatus] = useState('');

  const respondToBargain = () => {
    if (!bargain || !bargain.price) {
      console.error('Bargain or price is not defined.');
      return;
    }

    axios.post(`/api/v1/bargain/respond/${bargain._id}`, { status })  // <-- Corrected route here
      .then(response => {
        alert(response.data.message);
        onRespond(); // No need to pass updated bargain to the parent component, just trigger a refetch
      })
      .catch(error => {
        console.error('Error responding to bargain:', error);
      });
  };

  return (
    <>
     
      {bargain && bargain.price && <p>Product Price: ${bargain.price}</p>}
      <label>Response: </label>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">Select Response</option>
        <option value="accepted">Accept</option>
        <option value="rejected">Reject</option>
      </select>
      {' '}
      <button onClick={respondToBargain}>Submit Response</button>
    </>
  );
};

export default BargainRes;
