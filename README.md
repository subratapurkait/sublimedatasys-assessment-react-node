# sublimedatasys-assessment-react-node

# Customer Dashboard Project

This project includes a simple Node.js backend with Express for creating a REST API and a React frontend for a customer dashboard.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing Dependencies](#installing-dependencies)
  - [Running the Project](#running-the-project)
- [Backend](#backend)
  - [API Endpoints](#api-endpoints)
- [Frontend](#frontend)
  - [Folder Structure](#folder-structure)
  - [Components](#components)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installing Dependencies

In the root directory, install the backend and frontend dependencies:

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
cd ../customer-dashboard
npm install
```

### Running the Project

Start the Node.js server for the backend:

```bash
npm start
```

Start the React app for the frontend:

```bash
cd customer-dashboard
npm start
```

Visit [http://localhost:3000](http://localhost:3000) in your browser to view the customer dashboard.

## Backend

The backend is built with Node.js and Express, providing REST APIs to serve customer data.

### API Endpoints

- **List Customers with Search and Pagination:**
  - Endpoint: `/api/customers`
  - Query Parameters: `page`, `limit`, `search`

- **Get Single Customer by ID:**
  - Endpoint: `/api/customers/:id`

- **List Unique Cities with Number of Customers:**
  - Endpoint: `/api/cities`

## Frontend

The frontend is built with React and React Router for navigation.

### Folder Structure

```bash
/frontend
  /src
    /components
      - Dashboard.js
      - CustomerDetails.js
      - CityList.js
    - App.js
    - index.js
```

### Components

- **Dashboard:**
  - Lists customers with search and pagination.
  - Clicking on a customer navigates to their details.

- **CustomerDetails:**
  - Displays details of a single customer.

- **CityList:**
  - Lists unique cities with the number of customers.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
