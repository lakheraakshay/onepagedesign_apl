import React from 'react';
import './Body.css';

function Body() {
    return (
        <div style={{backgroundColor: "#0e1019"}}>
            <div className="landing_sec flex justify-center relative" style={{backgroundColor: "#0E1019", backgroundImage: "logo.png", minHeight: "100vh"}}>

                <img className='absolute mx-auto flex justify-center top-48' src="wind.png" alt="" style={{zIndex: "100", width: "28vw"}} />
                <img className='flex justify-center mx-auto absolute bottom-14' src="flemingo.png" style={{zIndex: "110", width: "52vw"}} alt="" />
                <div className='mt-24' style={{zIndex: "200", color: "#FFF"}}>
                    <h1 className='text-9xl mt-14 font-bold' style={{zIndex: "200"}}>Flamingo inu</h1>
                    <p className='w-3/4 flex justify-center mx-auto pt-16' style={{color: "rgba(255, 255, 255, 0.4)"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>
                    <div className='outer_cpy w-72 text-center mx-auto mt-16'>
                        <div className='copy w-24 py-2 mx-auto'>Copy</div>
                        TMiBhDrU1vN3hqm25S6BaMjJzJigtkjt
                    </div>
                </div>
            </div>
            <div className='before_about flex justify-between px-48 py-8 relative bottom-24' style={{zIndex: "220"}}>
                <div className='button_a w-28 py-2'>buy now</div>
                <div className='button_a w-28 py-2'>chart</div>
                <div className='button_a w-28 py-2'>whitepaper</div>
            </div>
            <div className='relative mx-auto flex flex-col items-center pb-8'>
                <div className="outer_aboutUs flex justify-center relative w-full">
                </div>
                <div className="about_us text-left w-3/5">
                    <div className='relative'>
                        <img className='absolute w-48 h-24' src="about_background.png" alt="" style={{right: "0", zIndex: "300"}} />
                        <div className='flex'>
                            <h1 className='text-4xl font-semibold text-white' style={{filter: "blur(0)"}}>About Us</h1>
                            <img className='w-14 mx-auto relative -top-4 -left-14' src="logo.png" alt="" />
                        </div>
                        <p className='text-xs pt-4 text-white' style={{zIndex: "330"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
