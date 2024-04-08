import React, { useState, useEffect } from 'react';
import "./visitors.scss"

const Visitors = () => {
    const [visitors, setVisitors] = useState(0);

    useEffect(() => {
        // Fetch visitor count from an API or local storage
        const storedVisitors = localStorage.getItem('visitors') || 0;
        setVisitors(parseInt(storedVisitors));
    }, []);

    useEffect(() => {
        // Update visitor count in local storage
        localStorage.setItem('visitors', visitors.toString());
    }, [visitors]);

    useEffect(() => {
        // Increment visitor count on component mount
        setVisitors((prevVisitors) => prevVisitors + 1);
    }, []);

    return (
        <div className="visitor-counter">
            <h2>Total Visitors</h2>
            <div className="visitor-count">{visitors}</div>
        </div>
    );
};

export default Visitors;