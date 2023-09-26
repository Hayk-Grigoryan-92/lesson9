import React, { useState } from 'react'
import './style.scss'

export const Template1 = () =>{

    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [isClicked, setIsClicked] = useState(false)

    function handleChange1 (e) {
        setInput1(e.target.value)
    }

    function handleChange2 (e) {
        setInput2(e.target.value)
    }

    function handleClick (){
        setIsClicked(true)
        setInput1('')
        setInput2('')
       
        
    }

    return (
        <div className='container'>
            <label>Width
                <input type="number" value={input1} onChange={handleChange1}/>
            </label>
            <label>Height
                <input type="number" value={input2} onChange={handleChange2}/>
            </label>
            <button onClick={handleClick}>Click Me</button>
             {isClicked?<div className='cube' style={{width: input1 + 'px', height: input2 + 'px'}}></div>:null}
        </div>
    )
}