import React from 'react';
import './Staking.css';

function Staking() {
    return (
        <div className='staking' style={{backgroundColor: "#0e1019"}}>
            <div className='text-4xl text-white py-4 font-bold'>staking</div>
            <div className='flex' style={{backgroundImage: "url('Rectangle.png')"}}>
                <div className='text-white py-6' style={{background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(11px)"}}>
                    <div className='flex mx-auto w-5/6 pl-4 pb-8'>
                        <p className='text-left'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt utLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt utLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh</p>
                    </div>
                    <div className='flex justify-between w-3/4 mx-auto'>
                        <div className="stack_btnn">
                            1 week
                        </div>
                        <div className="stack_btnn">
                            1 month
                        </div>
                        <div className="stack_btnn">
                            6 month
                        </div>
                        <div className="stack_btnn">
                            6 month
                        </div>
                        <div className="stack_btnn">
                            1 year
                        </div>
                    </div>
                </div>
                <div className='flex items-center px-4' style={{backgroundColor: "#FFF"}}>
                    <p>⮕</p>
                    <p>Enter</p>
                </div>
            </div>
        </div>
    )
}

export default Staking
