import React, { useState } from 'react';
import '../card3/index.css'
const Likeand = () => {
    const [counterstate, setCounterstate] = useState(0);

    function like() {
        setCounterstate(counterstate + 1);
    }

    function dislike() {
        setCounterstate(counterstate - 1);
    }

    return (

        <div className='brodf'>
            <button onClick={like}>Like</button>
            <h1>{counterstate}</h1>
            <button onClick={dislike}>Dislike</button>
        </div>
    );
};

export default Likeand;
