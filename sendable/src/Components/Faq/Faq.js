import React from 'react';
import Token from './Token';
import './Faq.css';

function Faq() {
    return (
        <div className='faq text-4xl text-white py-8'>
            <h1>FAQ</h1>
            <div className='w-2/4 mx-auto'>
                <div className='bottom_border'></div>
                <Token number={1} title={'How can i use your token'} text={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt utLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut'} />
                <Token number={2} title={'How can i use your token'} text={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt utLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut'} />
                <Token number={3} title={'How can i use your token'} text={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt utLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut'} />
                <Token number={4} title={'How can i use your token'} text={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt utLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut'} />
                <Token number={5} title={'How can i use your token'} text={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt utLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut'} />
            </div>
        </div>
    )
}

export default Faq
