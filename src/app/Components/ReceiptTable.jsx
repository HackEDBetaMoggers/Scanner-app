"use client"

import React from 'react';

const dataCallback = (data) => {
  const generateTable = () => {
    return (
      <table className='container text-black text-center'>
        <thead>
        <tr>Your Receipt</tr>
          <tr>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([item, price]) => (
            <tr key={item}>
              <td contentEditable>{item}</td>
              <td contentEditable>{price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return generateTable();
};

// Example usage in a React component
const ReceiptTable = ({data}) => {
  return (
    <div style={{ textAlign: 'center' }}>
      {dataCallback(data)}
    </div>
  );
};

export default ReceiptTable;