import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [customers, setCustomers] = useState([]);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [limit, setLimit] = useState(0);
    const navigate = useNavigate();

    function handleClick() {
      navigate("/cities");
    }
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    useEffect(() => {
        const abortController = new AbortController();
        const { signal } = abortController;
        const fetchCustomers = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/api/customers?page=${page}&search=${search}`, { signal });
                setCustomers(response.data.customers);
                setTotal(response.data.total);
                setLimit(response.data.limit);
            } catch (error) {
                console.error('Error fetching customers:', error);
            }
        };
        fetchCustomers();

        return () => {
            abortController.abort();
        }
    }, [page, search, total]);

    return (
        <div>
            <center>
            <button type="button" onClick={handleClick}>
                Cities
            </button>
            <h1>Customer Dashboard</h1>
            <input type="text" placeholder="Search by name or city" value={search} onChange={handleSearchChange} />
            <ul>
                {customers.map((customer) => (
                    <li key={customer.id}>
                        <a href={`/customer/${customer.id}`}>{`${customer.first_name} ${customer.last_name} - ${customer.city}`}</a>
                    </li>
                ))}
            </ul>
            <div>
                <button onClick={() => handlePageChange(page - 1)} disabled={page === 1}>
                    Previous
                </button>
                <span>{`Page ${page} of ${Math.ceil(total / limit)}`}</span>
                <button onClick={() => handlePageChange(page + 1)} disabled={page === Math.ceil(total / limit)}>
                    Next
                </button>
            </div>
            </center>
        </div>
    );
};

export default Dashboard;
