import React from 'react'

function Tokenomics() {
    return (
        <div className='tokenomics flex justify-between' style={{backgroundImage: "url('tokenomics.png')"}}>
            <div className='w-1/2 py-14'>
                <div className='w-2/6 mx-auto py-4 pr-6' style={{background: "rgba(38, 21, 145, 0.3)", backdropFilter: "blur(71px)", borderRadius: "20px 20px 60px 20px"}}>
                    <div className='mx-4 py-2 text-xl font-bold text-white' style={{background: "rgba(38, 21, 145, 0.7)", backdropFilter: "blur(71px)", borderRadius: "30px"}}>
                        Tokenomics
                    </div>
                </div>
            </div>
            <div className='w-1/2 flex items-center px-8 text-white' style={{background: "rgba(0, 0, 0, 0.15)", backdropFilter: "blur(10px)"}}>
                <div className='mr-24'>
                    <div className='text-left mb-4'>
                        <p>MMP Rewards</p>
                        <p>5% </p>
                    </div>
                    <div style={{minHeight: "2px", minWidth: "20px", maxWidth: "34px", backgroundColor: "#FFF"}}></div>
                    <div className='text-left mt-4'>
                        <p>MMP Rewards</p>
                        <p>5% </p>
                    </div>
                </div>
                <div>
                    <div className='text-left mb-4'>
                        <p>MMP Rewards</p>
                        <p>5% </p>
                    </div>
                    <div style={{minHeight: "2px", minWidth: "20px", maxWidth: "34px", backgroundColor: "#FFF"}}></div>
                    <div className='text-left mt-4'>
                        <p>MMP Rewards</p>
                        <p>5% </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tokenomics
