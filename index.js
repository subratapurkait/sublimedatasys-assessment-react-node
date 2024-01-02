const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Load customer data from JSON file
let customers = require('./customers.json');

// API to list customers with search and pagination
app.get('/api/customers', (req, res) => {
  const { page = 1, limit = 10, search } = req.query;
  
  // Apply search filter
  let filteredCustomers = customers;
  if (search) {
    const searchRegex = new RegExp(search, 'i');
    filteredCustomers = customers.filter(
      (customer) =>
        searchRegex.test(customer.first_name) ||
        searchRegex.test(customer.last_name) ||
        searchRegex.test(customer.city)
    );
  }

  // Paginate the results
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const paginatedCustomers = filteredCustomers.slice(startIndex, endIndex);

  res.json({
    total: filteredCustomers.length,
    page,
    limit,
    customers: paginatedCustomers,
  });
});

// API to get single customer by id
app.get('/api/customers/:id', (req, res) => {
  const customerId = parseInt(req.params.id);
  const customer = customers.find((c) => c.id === customerId);

  if (customer) {
    res.json(customer);
  } else {
    res.status(404).json({ error: 'Customer not found' });
  }
});

// API to list unique cities with the number of customers
app.get('/api/cities', (req, res) => {
  const cityCount = customers.reduce((acc, customer) => {
    acc[customer.city] = (acc[customer.city] || 0) + 1;
    return acc;
  }, {});

  res.json(cityCount);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
