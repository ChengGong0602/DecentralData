import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { useSpacing } from '~/theme/common';
import Header from '~/components/Header';
import singleMenu from '~/components/Header/data/single';
import BasicBanner from '~/components/HeroBanner/BasicBanner';
import ParallaxDeco from '~/components/Parallax3d/Flower';
import Team from '~/components/Company/Team';
import CarouselGallery from '~/components/Company/Collage/Carousel';
import CallAction from '~/components/Company/CallAction';
import Footer from '~/components/Footer';
import FooterDeco from '~/components/Footer/Decoration/General';
import brand from '~/public/text/brand';

function TeamPage(props) {
  const { classes, cx } = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  const { t } = useTranslation('common');

  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.name + ' - Team' }
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          menu={singleMenu.inner}
        />
        <main className={cx(classes.containerFront, classes.containerWrap)}>
          <div className={classes.innerPage}>
            <section id="banner">
              <BasicBanner
                bgTitle={t('team_bgtitle')}
                title={t('team_title')}
                desc={t('team_desc')}
                decoration={() => <ParallaxDeco type="scroll" />}
              />
            </section>
            <Box mt={{ sm: -30, xs: -20 }}>
              <CarouselGallery />
            </Box>
            <section id="team">
              <Team bg="parallax" />
            </section>
            <CallAction />
          </div>
        </main>
        <FooterDeco>
          <Footer toggleDir={onToggleDir} />
        </FooterDeco>
      </div>
    </React.Fragment>
  );
}

TeamPage.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default TeamPage;
