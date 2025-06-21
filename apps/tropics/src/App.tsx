import React from 'react';

export default function App() {
    return (
        <main style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>
            <h1>Learn the Tropic Lines</h1>
            <svg width="400" height="200" viewBox="0 0 400 200">
                <circle cx="200" cy="100" r="90" fill="#e0f7fa" stroke="#006064" />
                <line x1="110" y1="60" x2="290" y2="60" stroke="#ff5722" strokeWidth="2" />
                <line x1="110" y1="140" x2="290" y2="140" stroke="#ff5722" strokeWidth="2" />
                <text x="295" y="64" fontSize="10" fill="#333">
                    Tropic of Cancer
                </text>
                <text x="295" y="144" fontSize="10" fill="#333">
                    Tropic of Capricorn
                </text>
            </svg>
            <p style={{ maxWidth: 500, margin: '1rem auto' }}>
                The Tropic of Cancer and Tropic of Capricorn are located approximately 23.4° north
                and south of the equator. They mark the furthest latitudes where the sun can appear
                directly overhead.
            </p>
        </main>
    );
}
