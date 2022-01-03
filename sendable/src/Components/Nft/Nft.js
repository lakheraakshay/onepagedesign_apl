import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Nft.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function Nft() {
    return (
        <div className='nft' style={{backgroundColor: "#0e1019"}}>
            <div className='text-white py-6'>
                <h1 className='text-4xl'>NFT</h1>
                <p className='w-4/5 mx-auto text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt utLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut</p>
            </div>
            <Carousel responsive={responsive}>
            <div className='carusal_item relative mx-4' style={{borderRadius: "40px"}}>
                <img src="carusal.png" alt="" style={{borderRadius: "40px"}} />
                <div className='text-white' style={{position: "absolute", zIndex: "555", bottom: "0", width: "100%", background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(40px)", borderRadius: "0 0 50px 50px"}}>
                    The best Flamingo
                </div>
            </div>
            <div className='carusal_item relative mx-4' style={{borderRadius: "40px"}}>
                <img src="carusal.png" alt="" style={{borderRadius: "40px"}} />
                <div className='text-white' style={{position: "absolute", zIndex: "555", bottom: "0", width: "100%", background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(40px)", borderRadius: "0 0 50px 50px"}}>
                    The best Flamingo
                </div>
            </div>
            <div className='carusal_item relative mx-4' style={{borderRadius: "40px"}}>
                <img src="carusal.png" alt="" style={{borderRadius: "40px"}} />
                <div className='text-white' style={{position: "absolute", zIndex: "555", bottom: "0", width: "100%", background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(40px)", borderRadius: "0 0 50px 50px"}}>
                    The best Flamingo
                </div>
            </div>
            <div className='carusal_item relative mx-4' style={{borderRadius: "40px"}}>
                <img src="carusal.png" alt="" style={{borderRadius: "40px"}} />
                <div className='text-white' style={{position: "absolute", zIndex: "555", bottom: "0", width: "100%", background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(40px)", borderRadius: "0 0 50px 50px"}}>
                    The best Flamingo
                </div>
            </div>
            <div className='carusal_item relative mx-4' style={{borderRadius: "40px"}}>
                <img src="carusal.png" alt="" style={{borderRadius: "40px"}} />
                <div className='text-white' style={{position: "absolute", zIndex: "555", bottom: "0", width: "100%", background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(40px)", borderRadius: "0 0 50px 50px"}}>
                    The best Flamingo
                </div>
            </div>
            </Carousel>
        </div>
    )
}

export default Nft
