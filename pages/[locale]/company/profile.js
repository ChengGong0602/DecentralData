import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Head from 'next/head';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { useSpacing } from '~/theme/common';
import Header from '~/components/Header';
import BlueGradient from '~/components/Artworks/BlurGradient';
import singleMenu from '~/components/Header/data/single';
import ProfileBanner from '~/components/HeroBanner/ProfileBanner';
import ParallaxDeco from '~/components/Parallax3d/Snail';
import Gallery from '~/components/Company/Team/Gallery';
import Sidebar from '~/components/Company/Team/Sidebar';
import Footer from '~/components/Footer';
import FooterDeco from '~/components/Footer/Decoration/General';
import brand from '~/public/text/brand';
import imgAPI from '~/public/images/imgAPI';

function Profile(props) {
  const { classes, cx } = useSpacing();
  const { onToggleDark, onToggleDir } = props;

  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.name + ' - Profile' }
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          menu={singleMenu.inner}
        />
        <BlueGradient />
        <main className={cx(classes.containerFront, classes.containerWrap)}>
          <div className={classes.innerPage}>
            <Box mt={5}>
              <section id="banner">
                <ProfileBanner
                  avatar={imgAPI.avatar[31]}
                  cover={imgAPI.photosL[34]}
                  name={brand.profileName}
                  desc={brand.profileTitle2}
                  following={123}
                  followers={456}
                  posts={78}
                  socmed={['facebook', 'twitter', 'linkedin', 'instagram']}
                  friends={[imgAPI.avatar[10], imgAPI.avatar[11], imgAPI.avatar[3], imgAPI.avatar[4], imgAPI.logos[12], imgAPI.avatar[20], imgAPI.logos[8], imgAPI.avatar[1], imgAPI.avatar[3], imgAPI.avatar[6], imgAPI.avatar[6], imgAPI.avatar[6]]}
                  decoration={() => <ParallaxDeco type="scroll" />}
                />
              </section>
            </Box>
          </div>
          <Container>
            <Grid container spacing={2}>
              <Grid item md={8} xs={12}>
                <Gallery />
              </Grid>
              <Grid item md={4} xs={12}>
                <Sidebar />
              </Grid>
            </Grid>
          </Container>
        </main>
        <FooterDeco>
          <Footer toggleDir={onToggleDir} />
        </FooterDeco>
      </div>
    </React.Fragment>
  );
}

Profile.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Profile;
