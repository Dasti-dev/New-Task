import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './style.css'

function Home() {

    const [text,setText] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/randomLorem");
                setText(response.data.text);
            } catch (error) {
                console.error("Error fetching text:", error);
            }
        };

        fetchData();
    }, []);

    return (
    <div className='Home'>
        <h1>Welcome to Home</h1>
        <h2>Text called from backend ....</h2>
        <div className="box">
            {text}
        </div>
    </div>
  )
}

export default Home
