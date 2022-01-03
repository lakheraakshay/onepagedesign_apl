import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer mx-4 rounded-2xl p-4' style={{backgroundColor: "#2B3045"}}>
            <div className='flex justify-between'>
                <div className='flex items-center gap-52'>
                    <div className='flex items-center gap-8'>
                        <div className='link text-left'>
                            <h2 className='text-white' style={{color: "#FFF"}}>Links</h2>
                            <p>Staking</p>
                            <p>About Us</p>
                            <p>How To Buy</p>
                        </div>
                        <div className='link text-left'>
                            <p>Team</p>
                            <p>Roadmap</p>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-white'>Social</h2>
                        <div className="social_media flex items-center px-6 py-1 my-2" style={{backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "40px"}}>
                            <img src="twitter.png" alt="" />
                            <p className='pl-2 text-white'>Twitter</p>
                        </div>
                        <div className="social_media flex items-center px-6 py-1 my-2" style={{backgroundColor: "rgba(255, 255, 255, 0.1)", borderRadius: "40px"}}>
                            <img src="Telegram.png" alt="" />
                            <p className='pl-2 text-white'>Telegram</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='bg-white py-2 px-8 rounded-3xl' style={{}}>Whitepaper</p>
                </div>
            </div>
            <div className='flex text-left items-center py-4'>
                <p className='text-xs text-white'>The Content shared on this website is for information purpose only and, thus, should not be considered as financial advice. Trading/Investing is risky and you should never invest more than you can afford to lose. Cryptocurrencies are risky. Never invest more than you can afford to lose. You alone assume the sole responsibility of evaluating the merits and risks associated with the use of any information or other Content on the Site before making any decisions based on such information or other Content.</p>
                <img className='w-14' src="logo.png" alt="" />
            </div>
        </div>
    )
}

export default Footer
