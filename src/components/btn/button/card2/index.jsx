import React from 'react'
import '../card2/index.css'
const Buttontwo = () => {
    
    function hendone(){
        const h = document.querySelector('.hh')
        h.innerHTML = 'main1'
    }
    function hendtwo(){
        const h = document.querySelector('.hh')
        h.innerHTML = 'main2'
    }
    function hendthre(){
        const h = document.querySelector('.hh')
        h.innerHTML = 'main3'
    }
    


  return (
    <div>
        <h1 className='hh'>salom</h1>
        <button onClick={hendone}>Main1</button>
        <button onClick={hendtwo}>Main2</button>
        <button onClick={hendthre}>Main3</button>
    </div>
  )
}

export default Buttontwo