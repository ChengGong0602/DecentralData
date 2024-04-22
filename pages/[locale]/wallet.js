import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Head from 'next/head';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import Hidden from '@mui/material/Hidden';
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { useSpacing } from '~/theme/common';
import Header from '~/components/Header';
import singleMenu from '~/components/Header/data/single';
import BannerSlider from '~/components/HomeWallet/BannerSlider';
import Step from '~/components/HomeWallet/Step';
import ChartPrice from '~/components/HomeWallet/ChartPrice';
import Feature from '~/components/HomeWallet/Feature';
import Benefit from '~/components/HomeWallet/Benefit';
import Security from '~/components/HomeWallet/Security';
import Counter from '~/components/HomeWallet/Counter';
import Testimonials from '~/components/HomeWallet/Testimonials';
import CallAction from '~/components/HomeWallet/CallAction';
import Corner from '~/components/Utils/Corner';
import Footer from '~/components/Footer';
import FooterDeco from '~/components/Footer/Decoration/Line';
import Notification from '~/components/Utils/Notification';
import brand from '~/public/text/brand';

function Wallet(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { classes, cx } = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.name + ' - Crypto Wallet Page' }
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          menu={singleMenu.wallet}
          home
          prefix="wallet"
        />
        <main className={cx(classes.containerFront, classes.containerWrap)}>
          <section id="home">
            <BannerSlider />
          </section>
          <section id="howto" className={classes.spaceTop}>
            <Step />
          </section>
          <section id="chart" className={classes.spaceTop}>
            <ChartPrice />
          </section>
          <section id="feature" className={isTablet ? classes.spaceTop : classes.spaceTopShort}>
            <Feature />
          </section>
          <section id="benefit" className={classes.spaceTop}>
            <Benefit />
          </section>
          <section id="security" className={classes.spaceTopShort}>
            <Security />
          </section>
          <section id="community" className={!isMobile ? classes.spaceTopShort : ''}>
            <Counter />
          </section>
          <section id="testimonials" className={classes.spaceTopShort}>
            <Testimonials />
          </section>
          <section id="call-action" className={cx(classes.spaceTop, classes.spaceBottom)}>
            <CallAction />
          </section>
        </main>
        <FooterDeco>
          <Footer toggleDir={onToggleDir} />
        </FooterDeco>
        <Hidden mdDown>
          <Corner prefix="wallet" menuList={singleMenu.wallet} />
        </Hidden>
        <Hidden lgDown>
          <Notification />
        </Hidden>
      </div>
    </React.Fragment>
  );
}

Wallet.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Wallet;
