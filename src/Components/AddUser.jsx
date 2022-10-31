import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const AddUser = () => {
    const [user, setUser] = useState({});
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(user);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.acknowledged) {
                    alert('acknowledged post successfully');
                    event.target.reset();
                }
            });
    };

    const handleBlur = (e) => {
        const value = e.target.value;
        const field = e.target.name;
        const newUser = { ...user };
        newUser[field] = value;
        setUser(newUser);
    };

    return (
        <div>
            <h1>add user</h1>
            <div>
                <Link to="/">
                    <button type="button">home</button>
                </Link>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleBlur}
                    type="text"
                    name="name"
                    required
                    placeholder="name"
                />
                <br />
                <input
                    onChange={handleBlur}
                    type="text"
                    name="address"
                    required
                    placeholder="address"
                />
                <br />
                <input
                    onChange={handleBlur}
                    type="email"
                    name="email"
                    required
                    placeholder="email"
                />
                <br />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;
