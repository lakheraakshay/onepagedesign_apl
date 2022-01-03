import React, {useState} from 'react';
import './Faq.css';

function Token({ number, title, text }) {
    const[openText, setOpenText] = useState(false)
    return (
        <div className='token'>
            <div className='flex justify-between py-6'>
                <div className='flex items-center gap-4'>
                    <div className='number text-base'>{number}</div>
                    <div className='title text-lg text-white'>{title}</div>
                </div>
                <div className='operator text-base' style={{backgroundColor: "rgba(255, 255, 255, 0.1)"}} onClick={() => setOpenText(!openText)}>{openText ? '-' : '+'}</div>
            </div>
            <div className='faq_text text-left ml-10 text-white text-xs pt-8' style={{display: openText ? "block" : "none"}}>{text}</div>
            <div className='bottom_border'></div>
        </div>
    )
}

export default Token
