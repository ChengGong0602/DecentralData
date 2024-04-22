import React from 'react';
import PropTypes from 'prop-types';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'next-i18next';
import logo from '~/public/images/logo-verselion.png';
import brand from '~/public/text/brand';
import img from '~/public/images/imgAPI';
import SelectLang from '../Utils/LangSwitch/Select';
import useStyles from './blog-style';

function Copyright() {
  return (
    <Typography display="block" align="center">
      &copy;&nbsp;
      {brand.footerText}
    </Typography>
  );
}

const footer = {
  title: 'Quick Links',
  description: ['Resource', 'Another resource', 'Final resource', 'Privacy policy', 'Terms of use', 'Terms Condition'],
  link: ['#resource', '#another-resource', '#final-resource', '#privacy-policy', '#terms-of-use'],
};

const news = [
  {
    type: 'news',
    text: 'Sed imperdiet enim ligula vitae viverra.',
    img: img.photosS[4]
  },
  {
    type: 'news',
    text: 'Sed imperdiet enim ligula vitae viverra.',
    img: img.photosS[1]
  },
  {
    type: 'news',
    text: 'Sed imperdiet enim ligula vitae viverra.',
    img: img.photosS[3]
  }
];

function Blog(props) {
  const { classes, cx } = useStyles();
  const { toggleDir, bg } = props;
  const { t } = useTranslation('common');

  return (
    <footer className={cx(classes.footer, bg ? classes.hasBg : '')}>
      <Container className={classes.root} fixed>
        <Grid container spacing={6}>
          <Grid item xs={12} md={5}>
            <div className={classes.logo}>
              <img src={logo} alt="logo" />
              <Typography variant="h6" color="textPrimary">
                {brand.projectName}
              </Typography>
            </div>
            <Typography color="textPrimary" className={classes.footerDesc} gutterBottom>
              {t('ai-landing.banner_title')}
              &nbsp;
              {t('ai-landing.banner_desc')}
            </Typography>
            <div className={classes.quickLinks}>
              <Typography variant="h6" className={classes.title} color="textPrimary" gutterBottom>
                {t('footer_link')}
              </Typography>
              <ul>
                {footer.description.map((item, index) => (
                  <li key={item}>
                    <Link
                      href={footer.link[index]}
                      variant="subtitle1"
                      color="textSecondary"
                      underline="hover"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            {news.map((item, index) => (
              <ButtonBase className={classes.blogItem} href="#" key={index.toString()}>
                <figure>
                  <img src={item.img} alt="thumb" />
                </figure>
                <div className={classes.listText}>
                  <Typography variant="button" className={classes.category}>
                    {t('footer_news')}
                  </Typography>
                  <Typography display="block" component="p">Sed imperdiet enim ligula vitae viverra. </Typography>
                </div>
              </ButtonBase>
            ))}
          </Grid>
          <Grid item xs={12} md={3}>
            <div className={classes.socmed}>
              <IconButton aria-label="FB" className={classes.margin} size="small">
                <i className="ion-logo-twitter" />
              </IconButton>
              <IconButton aria-label="TW" className={classes.margin} size="small">
                <i className="ion-logo-facebook" />
              </IconButton>
              <IconButton aria-label="IG" className={classes.margin} size="small">
                <i className="ion-logo-instagram" />
              </IconButton>
              <IconButton aria-label="LI" className={classes.margin} size="small">
                <i className="ion-logo-linkedin" />
              </IconButton>
            </div>
            <SelectLang toggleDir={toggleDir} />
            <Copyright />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

Blog.propTypes = {
  toggleDir: PropTypes.func,
  bg: PropTypes.bool
};

Blog.defaultProps = {
  toggleDir: () => {},
  bg: false
};

export default Blog;
