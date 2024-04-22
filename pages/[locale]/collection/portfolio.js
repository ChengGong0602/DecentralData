import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { useSpacing } from '~/theme/common';
import Header from '~/components/Header';
import Gallery from '~/components/Collection/Portfolio/Gallery';
import singleMenu from '~/components/Header/data/single';
import MediaBanner from '~/components/HeroBanner/MediaBanner';
import ParallaxDeco from '~/components/Parallax3d/Ufo';
import Footer from '~/components/Footer';
import FooterDeco from '~/components/Footer/Decoration/General';
import brand from '~/public/text/brand';
import imgAPI from '~/public/images/imgAPI';

function Portfolio(props) {
  const { classes, cx } = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  const { t } = useTranslation('common');

  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.name + ' - Portfolios' }
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
              <MediaBanner
                title={t('portfolio_title')}
                cover={imgAPI.inner[19]}
                featured={[imgAPI.photosP[27], imgAPI.photosS[12], imgAPI.photosL[54]]}
                decoration={() => <ParallaxDeco type="scroll" />}
              />
            </section>
            <div id="gallery">
              <Gallery />
            </div>
          </div>
        </main>
        <FooterDeco>
          <Footer toggleDir={onToggleDir} />
        </FooterDeco>
      </div>
    </React.Fragment>
  );
}

Portfolio.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Portfolio;
