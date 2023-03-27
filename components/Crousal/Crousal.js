import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Crousal = () => {
    return (
            <div>
                <Carousel showStatus={false} showIndicators={false} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={2000}>
                    <div>
                        <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1678276688384_bbsweb.jpg" />
                    </div>
                    <div>
                        <img loading='lazy' src="https://assets-in.bmscdn.com/promotions/cms/creatives/1678860245525_borisweb.jpg" />
                    </div>
                    <div>
                        <img loading='lazy' src="https://assets-in.bmscdn.com/promotions/cms/creatives/1679337190446_honeyweb.jpg" />
                    </div>
                    <div>
                        <img loading='lazy' src="https://assets-in.bmscdn.com/promotions/cms/creatives/1679647614140_offerweb.jpg" />
                    </div>

                </Carousel>
            </div>
    )
}

export default Crousal