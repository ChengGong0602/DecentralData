import { makeStyles } from 'tss-react/mui';
import gradient from '~/theme/gradient';

const cardWidth = 220;
const cardHeight = 280;
const reducedMobile = 40;

const sliderStyle = makeStyles({ uniqId: 'banner_slider' })((theme, _params, classes) => ({
  bannerWrap: {
    position: 'relative',
    display: 'block',
    '& .MuiContainer-root': {
      [theme.breakpoints.down('lg')]: {
        padding: 0
      }
    }
  },
  btnArea: {
    display: 'flex',
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      alignItems: 'center',
      [`&:not(.${classes.download})`]: {
        flexDirection: 'column'
      }
    },
    [`& .${classes.button}`]: {
      fontSize: 18,
      minWidth: 200,
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(2)
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginBottom: theme.spacing(2)
      }
    },
    '& a': {
      display: 'inline-flex',
      [theme.breakpoints.down('sm')]: {
        margin: 4
      },
      '& img': {
        width: 160,
        [theme.breakpoints.down('sm')]: {
          width: '100%'
        }
      }
    }
  },
  artWrap: {
    overflow: 'hidden',
    position: 'relative',
    [theme.breakpoints.down('lg')]: {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  artScene: {
    position: 'relative',
    left: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap',
    [theme.breakpoints.up('lg')]: {
      marginTop: theme.spacing(5),
    },
    [theme.breakpoints.down('lg')]: {
      width: '120%',
      marginTop: theme.spacing(5)
    },
  },
  decoLine: {
    position: 'absolute',
    top: 0,
    left: -16,
    borderRadius: theme.rounded.big,
    border: '1px solid transparent',
    borderImageSource: gradient(theme).double.main,
    backgroundImage: gradient(theme).double.main,
    borderImageSlice: 1,
    WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    MaskComposite: 'exclude',
    width: cardWidth,
    height: cardHeight,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  inner: {
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    position: 'relative',
    [theme.breakpoints.up('lg')]: {
      minHeight: 640,
      paddingTop: theme.spacing(10)
    },
    [theme.breakpoints.down('lg')]: {
      paddingTop: theme.spacing(20),
      flexDirection: 'column',
      justifyContent: 'center'
    }
  },
  text: {
    position: 'relative',
    zIndex: 99,
    [theme.breakpoints.down('lg')]: {
      textAlign: 'center',
      padding: theme.spacing(0, 3)
    },
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(2)
    },
    '& h5': {
      marginBottom: theme.spacing(4)
    }
  },
  carousel: {
    transform: 'rotate(7deg)',
    transformOrigin: 'center center',
  },
  cardMain: {
    '& > a': {
      width: cardWidth,
      height: cardHeight,
      margin: '0 auto',
      [theme.breakpoints.down('sm')]: {
        width: cardWidth - reducedMobile,
        height: cardHeight - reducedMobile,
      }
    }
  },
  fadeSlider: {
    position: 'relative',
    zIndex: 3,
    width: '50%',
    [theme.breakpoints.between('md', 'lg')]: {
      width: '25%'
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: '33%'
    },
    '& div[class*="slick-active"]': {
      [`& .${classes.cardMain}`]: {
        animationName: 'flipInY',
        animationDuration: '1s',
        animationFillMode: 'both',
      }
    }
  },
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default sliderStyle;
