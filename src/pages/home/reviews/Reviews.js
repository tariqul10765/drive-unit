import { ClassNames } from '@emotion/react';
import { CircularProgress, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import Review from '../review/Review';

const reviewss = [
    {
        userName: "Shampa Shahriyar",
        userImg: "https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web1/1.5.0+DataCenter-Release-2490/Default/stores/chaldal/components/landingPage2/CarouselFeedbacks/images/lp_feedback_shampa_shahriyar.png?q=low&webp=1&alpha=1",
        review: "I want to order something (A perfume) for my mom at BD. Although the delivery area was out of their scope, their support team instantly replied to my query and manged to deliver the product. The best thing I noticed, they informed step by step updated news about the order processing."
    },
    {
        userName: "Abedul Hoque Rakib",
        userImg: "https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web1/1.5.0+DataCenter-Release-2490/Default/stores/chaldal/components/landingPage2/CarouselFeedbacks/images/lp_feedback_abedul_hoque_rakib.png?q=low&webp=1&alpha=1",
        review: "I have been shopping from chaldal for the past few months and i am loving the experience. Have been shopping from here and i have recommended my relatives too. They are also happy with the service. The prices are comparatively low and the products are genuine."
    },
    {
        userName: "Ashfia Ahmed",
        userImg: "https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web1/1.5.0+DataCenter-Release-2490/Default/stores/chaldal/components/landingPage2/CarouselFeedbacks/images/lp_feedback_ashfia_ahmed.png?q=low&webp=1&alpha=1",
        review: "Loved the service! I urgently needed some stuffs and ordered it here and they delivered in less than an hour as promised! Thanks a lot for that."
    },
    {
        userName: "Faiza Haque",
        userImg: "https://chaldn.com/asset/Egg.Grocery.Fabric/Egg.Grocery.Web1/1.5.0+DataCenter-Release-2490/Default/stores/chaldal/components/landingPage2/CarouselFeedbacks/images/lp_feedback_srabon_hasan.png?q=low&webp=1&alpha=1",
        review: "Congratulations for being nominated for 9th best entrepreneur among 500 new entrepreneurs by Forbes Magazine!!! I wish chaldal team the very best.. And your products types, brand types need to be extended more."
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

const useStyle = makeStyles({
    container: {
        width: '80%',
        margin: '0 auto',
        marginTop: '50px',
        textAlign: 'left'
    },
    title: {
        // textAlign: 'center',
        margin: '20px 0',
        fontSize: '200%',
    },
    slider__container: {
    }
})

const Reviews = () => {
    const classes = useStyle();

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const url = `${process.env.REACT_APP_API_BASE_URL}/review/review-list`;
        fetch(url)
            .then(res => res.json())
            .then(json => setReviews(json.data))
    }, [])
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
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
        <div className={classes.container}>
            <h1 className={classes.title}>What our clients are saying</h1>


            <div className={classes.slider__container}>
                {
                    reviews.length
                        ?
                        <Slider {...settings}>
                            {
                                reviews.map((review, index) => <Review data={review} key={index}></Review>)
                            }
                        </Slider>
                        :
                        <CircularProgress />
                }
            </div>
        </div>
    );
};

export default Reviews;