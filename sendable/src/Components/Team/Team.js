import React from 'react';
import './Team.css';

function Team() {
    return (
        <div className='team pt-8 pb-28' style={{overflow: "hidden", backgroundColor: "#0e1019"}}>
            <h1 className='py-10 text-4xl text-white'>Team</h1>
            <div className='flex relative' style={{backgroundImage: "url('Team.png')"}}>
                <div className='left_block'></div>
                <div className='flex team_dept w-full justify-center gap-14 py-8' style={{background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(25px)"}}>
                    <div>
                        <img style={{borderRadius: "50%"}} src="Dev_1.png" alt="" />
                        <p>Developer</p>
                        <p>Test Name</p>
                    </div>
                    <div>
                        <img style={{borderRadius: "50%"}} src="Dev_2.png" alt="" />
                        <p>Owner</p>
                        <p>Test Name</p>
                    </div>
                    <div>
                        <img style={{borderRadius: "50%"}} src="Dev_3.png" alt="" />
                        <p>Marketing Leader</p>
                        <p>Test Name</p>
                    </div>
                </div>
                <div className='right_block'></div>
            </div>
        </div>
    )
}

export default Team
