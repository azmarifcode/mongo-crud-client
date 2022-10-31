import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedUser = useLoaderData();
    const [user, setUser] = useState(storedUser);
    const updateSubmit = (event) => {
        event.preventDefault();
        // console.log(user);
        fetch(`http://localhost:5000/users/${storedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) =>
            {
                if (data.acknowledged > 0)
                {
                    alert('update successfully')
                } console.log(data);
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
        <>
            <h1>update: {storedUser.name}</h1>
            <div>
                <Link to="/">
                    <button type="button">home</button>
                </Link>
            </div>
            <div>
                <Link to="/users/add">
                    <button type="button">user</button>
                </Link>
            </div>
            <div>
                <form onSubmit={updateSubmit} action="">
                    <input
                        onChange={handleBlur}
                        type="text"
                        defaultValue={storedUser.name}
                        name="name"
                        required
                        placeholder="name"
                    />
                    <br />
                    <input
                        onChange={handleBlur}
                        type="text"
                        defaultValue={storedUser.address}
                        name="address"
                        required
                        placeholder="address"
                    />
                    <br />
                    <input
                        onChange={handleBlur}
                        type="email"
                        defaultValue={storedUser.email}
                        name="email"
                        required
                        placeholder="email"
                    />
                    <br />
                    <button type="submit">Add User</button>
                </form>
            </div>
        </>
    );
};

export default Update;
