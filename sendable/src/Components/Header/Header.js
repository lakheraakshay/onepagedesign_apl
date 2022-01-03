import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className='header flex items-center' style={{backgroundColor: "#0E1019"}}>
            <div className='w-2/12 py-4 px-6'>
                <img style={{width: "80px"}} src="logo.png" alt="" />
            </div>
            <div className='flex w-10/12 justify-start'>
                <div className='w-4/5 flex justify-between'>
                    <a className='nav_link nav-link-ltr pb-4' href='/'>Home</a>
                    <a className='nav_link nav-link-ltr pb-4' href='/'>About Us</a>
                    <a className='nav_link nav-link-ltr pb-4' href='/'>tokenomics</a>
                    <a className='nav_link nav-link-ltr pb-4' href='/'>roadmap</a>
                    <a className='nav_link nav-link-ltr pb-4' href='/'>How To Buy</a>
                    <a className='nav_link nav-link-ltr pb-4' href='/'>NFT</a>
                    <a className='nav_link nav-link-ltr pb-4' href='/'>Team</a>
                    <a className='nav_link nav-link-ltr pb-4' href='/'>FAQ</a>
                </div>
            </div>
        </div>
    )
}

export default Header
