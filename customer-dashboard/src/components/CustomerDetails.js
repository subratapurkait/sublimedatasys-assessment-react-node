import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerDetails = (props) => {
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const customerId = props.match.params.id;

    const fetchCustomer = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/customers/${customerId}`);
        setCustomer(response.data);
      } catch (error) {
        console.error('Error fetching customer details:', error);
      }
    };

    fetchCustomer();
  }, [props.match.params.id]);

  return (
    <div>
      <h1>Customer Details</h1>
      {customer ? (
        <div>
          <p>{`Name: ${customer.first_name} ${customer.last_name}`}</p>
          <p>{`City: ${customer.city}`}</p>
          <p>{`Company: ${customer.company}`}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CustomerDetails;

