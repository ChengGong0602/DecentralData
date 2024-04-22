import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Icons3d from '../../Icons3d';
import useStyles from './icon3d-style';

function CategoryCard(props) {
  const { classes, cx } = useStyles();
  const {
    color,
    title,
    icon,
    href,
  } = props;

  return (
    <ButtonBase
      draggable="false"
      className={cx(classes.categoryCard, classes[color])}
      href={href}
    >
      <div className={classes.icons}>
        <Icons3d color={color} icon={icon} />
      </div>
      <Typography component="span" className={classes.title}>
        {title}
      </Typography>
    </ButtonBase>
  );
}

CategoryCard.propTypes = {
  color: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

CategoryCard.defaultProps = {
  href: '#',
  color: 'purple'
};

export default CategoryCard;
