"use client"
import { useState, useEffect } from 'react';
import { baseUrl } from '../config/constant';

const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch(`${baseUrl}/blog/`);
                const data = await response.json();
                if (data["status-code"])
                    setBlogs(data.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return { blogs, loading, error };
};

export default useBlogs;