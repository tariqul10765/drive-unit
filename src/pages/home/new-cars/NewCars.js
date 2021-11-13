import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyle = makeStyles({
    container: {
        marginTop: '50px',
        width: '80%',
        margin: '0 auto',
        "& img": {
            width: '100%',
        }
    },
    title: {
        margin: '20px 0',
        fontSize: '200%'
    }
})

const NewCars = () => {
    const classes = useStyle();
    return (
        <div className={classes.container}>
            <h1 className={classes.title}>NEW COLLECTIONS</h1>
            <Grid container>
                <Grid item md={4}>
                    <img src="https://www.topgear.com/sites/default/files/images/news-article/carousel/2018/11/4c16571ee0d81e04b092beabd12d56e6/526140.jpg" alt="" />
                </Grid>
                <Grid item md={4}>
                    <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/hero_banner/2020/11_18_sto_lancio/Huracan_STO.png" alt="" />
                </Grid>
                <Grid item md={4}>
                    <img src="https://www.cnet.com/a/img/2dllWhjkeggUnKLguY4IIve6iXY=/940x0/2021/01/27/97f487d6-6d9f-4e15-9c56-53521c316bb6/model-x-lead.jpg" alt="" />
                </Grid>
            </Grid>
        </div>
    );
};

export default NewCars;