"use client"

import React from 'react';

// Example usage in a React component
const ReceiptTable = ({data}) => {
  
  if (Object.keys(data).length != 0) {
    return (
        <div>
          <h2 className='text-xl'>Here is a table of your receipt</h2>
          <table className='container text-black text-center my-10 py-10'>
            <thead>
                <tr>
                <th>Item</th>
                  <th>Price</th>
                </tr>
              </thead>
            <tbody>
              {Object.entries(data).map(([item, price]) => (
                <tr key={item}>
                  <td>{item}</td>
                  <td>{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center my-10"
              onClick={() => {
                
              }}
            >
              Export data to csv
            </button>
        </div>
    );
  }
};

export default ReceiptTable;