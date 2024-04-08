import React, { useState, useEffect } from 'react';

const AdminList = () => {
    const [admins, setAdmins] = useState([]);

    useEffect(() => {
        // Fetch admin data from an API or local storage
        const fetchedAdmins = [
            { id: 1, name: 'admin1', email: 'admin1@gmail.com' },
            { id: 2, name: 'admin2', email: 'admin2@gmail.com' },
            // Add more admin data here
        ];
        setAdmins(fetchedAdmins);
    }, []);

    return (
        <div className="admin-list">
            <h2>Admin List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {admins.map((admin) => (
                        <tr key={admin.id}>
                            <td>{admin.name}</td>
                            <td>{admin.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminList;