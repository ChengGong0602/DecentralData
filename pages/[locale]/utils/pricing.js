import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { useSpacing } from '~/theme/common';
import Header from '~/components/Header';
import BlurGradient from '~/components/Artworks/BlurGradient';
import PricingGroupCard from '~/components/Cards/Pricing/PricingGroupCard';
import Faq from '~/components/Utils/Faq';
import FooterDeco from '~/components/Footer/Decoration/General';
import Footer from '~/components/Footer';
import brand from '~/public/text/brand';

function PricingPage(props) {
  const { classes, cx } = useSpacing();
  const { onToggleDark, onToggleDir } = props;

  return (
    <Fragment>
      <Head>
        <title>
          { brand.name + ' - Pricing' }
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <BlurGradient />
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <main className={cx(classes.containerGeneral, classes.containerFront)}>
          <div className={classes.innerPage}>
            <PricingGroupCard />
            <div className={classes.spaceTop}>
              <Faq />
            </div>
          </div>
        </main>
        <FooterDeco>
          <Footer toggleDir={onToggleDir} />
        </FooterDeco>
      </div>
    </Fragment>
  );
}

PricingPage.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default PricingPage;
