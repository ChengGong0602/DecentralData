import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import Head from 'next/head';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTranslation } from 'next-i18next';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { useSpacing, useFlipRtl } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import Header from '~/components/Header/BlogHeader';
import Headline from '~/components/Company/Blog/Headline';
import NewsCard from '~/components/Cards/Post/NewsCard';
import Footer from '~/components/Footer';
import brand from '~/public/text/brand';
import link from '~/public/text/link';

function BlogHome(props) {
  const { cx, classes } = useSpacing();
  const { classes: flipRtl } = useFlipRtl();
  const { onToggleDark, onToggleDir } = props;
  const { t } = useTranslation('common');

  const isTablet = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const isDekstop = useMediaQuery(theme => theme.breakpoints.up('md'));

  return (
    <Fragment>
      <Head>
        <title>
          { brand.name + ' - Blog'}
        </title>
      </Head>
      <CssBaseline />
      <section id="home" />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <main className={cx(classes.containerFront, classes.containerWrap, classes.higherTop)}>
          <div className={classes.innerPage}>
            <Container>
              <Grid container spacing={3}>
                <Grid item sm={12}>
                  <Headline />
                </Grid>
              </Grid>
              <Box mt={{ xs: 5, sm: 8 }} pl={{ sm: 3 }}>
                <Grid container spacing={isDekstop ? 6 : 0}>
                  <Grid item md={6} xs={12}>
                    <NewsCard
                      href={link.blogDetail}
                      img={imgAPI.photosL[37]}
                      headline="Maecenas rutrum dolor sed nisi"
                      title="Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
                      date="12 Nov 2020"
                      orientation="landscape"
                      type="over"
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <NewsCard
                      href={link.blogDetail}
                      img={imgAPI.photosL[36]}
                      headline="Maecenas rutrum dolor sed nisi"
                      title="Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
                      date="12 Nov 2020"
                      orientation="landscape"
                      type="over"
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box mt={{ md: 2 }}>
                <Grid container spacing={isTablet ? 3 : 0}>
                  {[...Array(12)].map((e, index) => (
                    <Grid
                      item
                      md={4}
                      sm={6}
                      xs={12}
                      key={index.toString()}
                      mt={8}
                      className={classes.item}
                    >
                      <ScrollAnimation
                        animateOnce
                        animateIn="fadeInUpShort"
                        offset={100}
                        delay={500 + index * 100}
                        duration={0.5}
                      >
                        <NewsCard
                          href={link.blogDetail}
                          img={imgAPI.photosL[30 + index]}
                          headline="Maecenas rutrum dolor sed nisi"
                          title="Proin pretium arcu eget metus porta consectetur Pellentesque habitant"
                          date="12 Nov 2020"
                          orientation="portrait"
                          type="over"
                          fullWidth
                        />
                      </ScrollAnimation>
                    </Grid>
                  ))}
                </Grid>
                <Box mt={3} className={classes.arrow}>
                  <Grid container justifyContent="space-between">
                    <Button>
                      <ArrowBackIcon className={flipRtl.flip} />
                      {t('btn_prev')}
                    </Button>
                    <Button>
                      {t('btn_next')}
                      <ArrowForwardIcon className={flipRtl.flip} />
                    </Button>
                  </Grid>
                </Box>
              </Box>
            </Container>
          </div>
        </main>
        <div id="footer" className={classes.spaceTop}>
          <Footer toggleDir={onToggleDir} />
        </div>
      </div>
    </Fragment>
  );
}

BlogHome.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default BlogHome;
