import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Carousel from 'react-slick';
import { useTranslation } from 'next-i18next';
import imgAPI from '~/public/images/imgAPI';
import ProductNftCard from '../../Cards/Product/NftCard';
import link from '~/public/text/link';
import { useText, useTextGradient } from '~/theme/common';
import useStyles from './slider-style';

const nftList = [
  {
    img: imgAPI.photosL[46],
    avatar: imgAPI.logos[13],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosS[8],
    avatar: imgAPI.logos[1],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosS[7],
    avatar: imgAPI.logos[2],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosL[50],
    avatar: imgAPI.avatar[13],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosP[27],
    avatar: imgAPI.avatar[1],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosP[26],
    avatar: imgAPI.avatar[8],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosL[26],
    avatar: imgAPI.avatar[8],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  },
  {
    img: imgAPI.photosS[1],
    avatar: imgAPI.avatar[8],
    name: 'John Doe',
    title: 'Lorem Ipsum Dolor',
    price: '0.5',
    href: '#',
    verified: true,
  }
];

function BannerSlider() {
  const [loaded, setLoaded] = useState(false);
  const isTablet = useMediaQuery(theme => theme.breakpoints.between('sm', 'md'));
  const isMobile = useMediaQuery(theme => theme.breakpoints.up('sm'));
  // Theme breakpoints
  const theme = useTheme();

  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const { classes: gradient } = useTextGradient();

  const { t } = useTranslation('common');

  const slickOptionsFade = {
    dots: false,
    arrows: false,
    speed: 500,
    infinite: true,
    autoplay: true,
    fade: true,
    cssEase: 'ease-out',
  };

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className={classes.bannerWrap}>
      <div className={classes.inner}>
        <Container>
          <Grid container spacing={isMobile ? 6 : 2} alignItems="center">
            <Grid item lg={6} xs={12}>
              <Box px={{ sm: 3 }} mt={{ lg: -15 }}>
                <div className={classes.text}>
                  <h4 className={text.title}>
                    {t('nft.banner_title')}
                    <span className={cx(theme.palette.mode === 'dark' ? gradient.tripleMain : gradient.tripleMain, text.uppercase)}>
                      &nbsp;
                      {t('nft.banner_highlight')}
                    </span>
                  </h4>
                  <h5 className={text.subtitle}>
                    {t('nft.banner_desc')}
                  </h5>
                  <div className={classes.btnArea}>
                    <Button size="large" color="secondary" variant="contained" href={link.register} className={classes.button}>
                      {t('btn_get')}
                    </Button>
                    <Button size="large" color={theme.palette.mode === 'dark' ? 'white' : 'black'} variant="outlined" href={link.product} className={classes.button}>
                      {t('nft.header_explore')}
                    </Button>
                  </div>
                </div>
              </Box>
            </Grid>
            <Grid item lg={6} xs={12}>
              {loaded && (
                <div className={classes.artWrap}>
                  <div className={classes.artScene}>
                    <Box mt={{ lg: 10 }} className={classes.fadeSlider}>
                      <span className={classes.decoLine} />
                      <div className={classes.carousel}>
                        <Carousel autoplaySpeed={5000} {...slickOptionsFade}>
                          {nftList.sort(() => Math.random() - 0.5).map((item, index) => (
                            <div key={index.toString()} className={classes.cardMain}>
                              <ProductNftCard
                                img={item.img}
                                avatar={item.avatar}
                                name={item.name}
                                title={item.title}
                                price={item.price}
                                href={item.href}
                                verified={item.verified}
                                small
                              />
                            </div>
                          ))}
                        </Carousel>
                      </div>
                    </Box>
                    {!isTablet && (
                      <div className={classes.fadeSlider}>
                        <span className={classes.decoLine} />
                        <div className={classes.carousel}>
                          <Carousel autoplaySpeed={6000} {...slickOptionsFade}>
                            {nftList.sort(() => Math.random() - 0.5).map((item, index) => (
                              <div key={index.toString()} className={classes.cardMain}>
                                <ProductNftCard
                                  img={item.img}
                                  avatar={item.avatar}
                                  name={item.name}
                                  title={item.title}
                                  price={item.price}
                                  href={item.href}
                                  verified={item.verified}
                                  small
                                />
                              </div>
                            ))}
                          </Carousel>
                        </div>
                      </div>
                    )}
                    <Box mt={{ lg: 5 }} className={classes.fadeSlider}>
                      <span className={classes.decoLine} />
                      <div className={classes.carousel}>
                        <Carousel autoplaySpeed={7000} {...slickOptionsFade}>
                          {nftList.sort(() => Math.random() - 0.5).map((item, index) => (
                            <div key={index.toString()} className={classes.cardMain}>
                              <ProductNftCard
                                img={item.img}
                                avatar={item.avatar}
                                name={item.name}
                                title={item.title}
                                price={item.price}
                                href={item.href}
                                verified={item.verified}
                                small
                              />
                            </div>
                          ))}
                        </Carousel>
                      </div>
                    </Box>
                    <div className={classes.fadeSlider}>
                      <span className={classes.decoLine} />
                      <div className={classes.carousel}>
                        <Carousel autoplaySpeed={8000} {...slickOptionsFade}>
                          {nftList.sort(() => Math.random() - 0.5).map((item, index) => (
                            <div key={index.toString()} className={classes.cardMain}>
                              <ProductNftCard
                                img={item.img}
                                avatar={item.avatar}
                                name={item.name}
                                title={item.title}
                                price={item.price}
                                href={item.href}
                                verified={item.verified}
                                small
                              />
                            </div>
                          ))}
                        </Carousel>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default BannerSlider;
