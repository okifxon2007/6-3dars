import React, { useState } from 'react';
import '../src/App.css'
import Button from './components/btn/button';
import Buttontwo from './components/btn/button/card2';
import Likeand from './components/btn/button/card3';
import Progres from './components/btn/button/progres';
import Galery from './components/btn/button/galery';
import Tasodifiy from './components/btn/button/tasodifiy';

function App() {
  const [counterstate, setCounterstate] = useState(0);



  function test() {
    setCounterstate(counterstate + 1);
  }

  function testing() {
    setCounterstate(counterstate - 1);
  }
  

  return (
    <>
      <div className="conta">
      <div className="btnpagecard">
      <h1>{counterstate}</h1>
    <div className="btnpg">
    <Button click={test}  name = '+'/>
      <Button click={testing} name = '-' />
      
    </div>
      </div>

      <div className="blockcardtwo">
      <Buttontwo/>
      </div>
      <div>
      <Likeand/>
      </div>
      <Progres/>
      <Galery/>
      

      <Tasodifiy/>


      </div>



      
    </>
  );
}

export default App;
