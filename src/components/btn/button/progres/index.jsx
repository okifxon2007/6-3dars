import React from 'react'
import '../progres/index.css'
const Progres = () => {

    function progress(){
        const box = document.querySelector('.box')
        const pilus = document.querySelector('.pilus')
        const onepilus = document.querySelector('.onepilus')
        onepilus.style.display = 'none'
        pilus.style.display = 'block'
        box.style.width = '180px'
        box.style.transition = '2s all'


    }

   
    function progresis(){
        const box = document.querySelector('.box')
        box.style.width = '210px'
        box.style.transition = '2s all'
    }

    function progresvs(){
        const box = document.querySelector('.box')
        box.style.width = '150px'
        box.style.transition = '2s all'
        minustwo.style.display = 'block'
        minus.style.display = 'none'

    }
    function progresvstwo(){
        const box = document.querySelector('.box')
        const minus = document.querySelector('.minus')
        const minustwo = document.querySelector('.minustwo')
        minustwo.style.display = 'block'
        minus.style.display = 'none'
        box.style.width = '20px'
        box.style.transition = '2s all'

    }
  return (
    <div className='df'>
        <div className="box"></div>
       <div className="ddf">
       <button onClick={progress} className='onepilus'>+</button>
        <button onClick={progresis} className='pilus'>+</button>
        <button onClick={progresvs} className='minus'>-</button>
        <button onClick={progresvstwo} className='minustwo'>-</button>
       </div>
    </div>
  )
}

export default Progres