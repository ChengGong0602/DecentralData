import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Head from 'next/head';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import { useSpacing } from '~/theme/common';
import Header from '~/components/Header';
import BlueGradient from '~/components/Artworks/BlurGradient';
import Detail from '~/components/Collection/Product/Detail';
import Description from '~/components/Collection/Product/Description';
import RelatedItems from '~/components/Collection/Product/RelatedItems';
import FooterDeco from '~/components/Footer/Decoration/General';
import Footer from '~/components/Footer';
import brand from '~/public/text/brand';

function ProductDetail(props) {
  const { classes, cx } = useSpacing();
  const { onToggleDark, onToggleDir } = props;

  return (
    <Fragment>
      <Head>
        <title>
          { brand.name + ' - Product Detail'}
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <BlueGradient />
        <main className={cx(classes.containerFront, classes.containerWrap)}>
          <div className={classes.innerPage}>
            <Container>
              <Detail />
              <Description />
            </Container>
            <RelatedItems />
          </div>
        </main>
        <FooterDeco>
          <Footer toggleDir={onToggleDir} />
        </FooterDeco>
      </div>
    </Fragment>
  );
}

ProductDetail.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default ProductDetail;
