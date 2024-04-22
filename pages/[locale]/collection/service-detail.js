import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { useSpacing } from '~/theme/common';
import Header from '~/components/Header';
import singleMenu from '~/components/Header/data/single';
import IconBanner from '~/components/HeroBanner/IconBanner';
import LogoGroup from '~/components/Branding/Logo/LogoGroup';
import Infographic from '~/components/Collection/Services/Infographic';
import Feature from '~/components/Collection/Services/Feature';
import Related from '~/components/Collection/Services/Related';
import Categories from '~/components/Collection/Services/Categories';
import Footer from '~/components/Footer';
import FooterDeco from '~/components/Footer/Decoration/General';
import link from '~/public/text/link';
import brand from '~/public/text/brand';
import imgAPI from '~/public/images/imgAPI';

function Services(props) {
  const { classes, cx } = useSpacing();
  const { onToggleDark, onToggleDir } = props;
  const { t } = useTranslation('common');

  const isTablet = useMediaQuery(theme => theme.breakpoints.up('sm'));

  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.name + ' - Services Detail' }
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
              <IconBanner
                cover={imgAPI.photosL[6]}
                title={t('login_create')}
                desc={t('contact_subtitle')}
                features={['200+ DEVELOPERS', 'FLEXIBLE SCOPE', 'SPRINT BASED', 'FULL TEAM']}
                icon={['mdi-shopping', 'mdi-music', 'mdi-folder-multiple-image']}
                btnPrimary={{ href: link.contact, text: t('btn_get') }}
                btnSecondary={{ href: link.faq, text: t('btn_read_more') }}
                counterPrimary={{ title: 'Project Success', count: 345 }}
                counterSecondary={{ title: 'Experts', count: 56 }}
              />
            </section>
            <div id="logo_group" className={classes.spaceTopShort}>
              <LogoGroup />
            </div>
            <section id="feature" className={classes.spaceTopShort}>
              <Feature />
            </section>
            <section id="infographic" className={classes.spaceTop}>
              <Infographic />
            </section>
            <section id="related" className={isTablet ? classes.spaceTopShort : classes.spaceTop}>
              <Related />
            </section>
            <section id="categories" className={classes.spaceTopShort}>
              <Categories />
            </section>
          </div>
        </main>
        <FooterDeco>
          <Footer toggleDir={onToggleDir} />
        </FooterDeco>
      </div>
    </React.Fragment>
  );
}

Services.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Services;
