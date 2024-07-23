import React, {useState} from 'react'
import '../button/index.css'
// 1
const Button = (props) => {
    const {click} = props
    const {name} = props
  return (
    <div className='buttonpage'>
         <button onClick={click}>{name}</button>
    </div>
  )
}

export default Button