import { Typography } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import Review from '../home/review/Review';

const reviews = [
    {
        name: "Shampa Shahriyar",
        imgUrl: "https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web1/1.5.0+DataCenter-Release-2490/Default/stores/chaldal/components/landingPage2/CarouselFeedbacks/images/lp_feedback_shampa_shahriyar.png?q=low&webp=1&alpha=1",
        message: "I want to order something (A perfume) for my mom at BD. Although the delivery area was out of their scope, their support team instantly replied to my query and manged to deliver the product. The best thing I noticed, they informed step by step updated news about the order processing."
    },
    {
        name: "Abedul Hoque Rakib",
        imgUrl: "https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web1/1.5.0+DataCenter-Release-2490/Default/stores/chaldal/components/landingPage2/CarouselFeedbacks/images/lp_feedback_abedul_hoque_rakib.png?q=low&webp=1&alpha=1",
        message: "I have been shopping from chaldal for the past few months and i am loving the experience. Have been shopping from here and i have recommended my relatives too. They are also happy with the service. The prices are comparatively low and the products are genuine."
    },
    {
        name: "Ashfia Ahmed",
        imgUrl: "https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web1/1.5.0+DataCenter-Release-2490/Default/stores/chaldal/components/landingPage2/CarouselFeedbacks/images/lp_feedback_ashfia_ahmed.png?q=low&webp=1&alpha=1",
        message: "Loved the service! I urgently needed some stuffs and ordered it here and they delivered in less than an hour as promised! Thanks a lot for that."
    },
    {
        name: "Faiza Haque",
        imgUrl: "https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web1/1.5.0+DataCenter-Release-2490/Default/stores/chaldal/components/landingPage2/CarouselFeedbacks/images/lp_feedback_srabon_hasan.png?q=low&webp=1&alpha=1",
        message: "Congratulations for being nominated for 9th best entrepreneur among 500 new entrepreneurs by Forbes Magazine!!! I wish chaldal team the very best.. And your products types, brand types need to be extended more."
    },
]

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "red" }}
            onClick={onClick}
        />
    );
}

const Reviews = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <Typography variant="h2">What our clients are saying</Typography>


            <div>
                <Slider {...settings} className='container'>
                    {
                        reviews.map((review, index) => <Review review={review} key={index}></Review>)
                    }
                </Slider>
            </div>
        </div>
    );
};

export default Reviews;