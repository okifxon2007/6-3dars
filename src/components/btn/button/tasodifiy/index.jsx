import React, { useState } from 'react';
import '../tasodifiy/index.css';

const Tasodifiy = () => {
    const [tasodifiyIndex, setTasodifiyIndex] = useState(-1);

    function tasodif() {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * 5);
        } while (newIndex === tasodifiyIndex); 
        setTasodifiyIndex(newIndex);
    }

    return (
        <div className='tasodifiy'>
            <ul>
                <li style={{ display: tasodifiyIndex === 0 ? 'block' : 'none' }}>Pubg</li>
                <li style={{ display: tasodifiyIndex === 1 ? 'block' : 'none' }}>Minecraft</li>
                <li style={{ display: tasodifiyIndex === 2 ? 'block' : 'none' }}>Gta</li>
                <li style={{ display: tasodifiyIndex === 3 ? 'block' : 'none' }}>Callofduty</li>
                <li style={{ display: tasodifiyIndex === 4 ? 'block' : 'none' }}>Counter</li>
            </ul>

            <button onClick={tasodif}>Tasodifiy</button>
        </div>
    );
}

export default Tasodifiy;
