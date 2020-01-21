import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";

export const Digimon = ({
    digimon
}) => {
    return (
        <div>
            <h1>Home</h1>
            <Link to = '/digimons'>
                <button>Go</button>
            </Link>
        </div>
    )
}

export default Digimon;