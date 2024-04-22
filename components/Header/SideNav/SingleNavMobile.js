import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTranslation } from 'next-i18next';
import link from '~/public/text/link';
import useStyles from '../sidenav-style';

function SingleNavMobile(props) {
  const { classes, cx } = useStyles();
  const { menu, toggleDrawer, open } = props;
  const { t, i18n } = useTranslation('common');

  const [curURL, setCurURL] = useState('');
  const [curOrigin, setCurOrigin] = useState('');
  const [langPath, setLangPath] = useState('');

  useEffect(() => {
    setCurURL(window.location.href);
    setCurOrigin(window.location.origin);
    setLangPath('/' + i18n.language);
  }, []);

  const SideList = () => (
    <div
      className={classes.mobileNav}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <div className={cx(classes.menu, open && classes.menuOpen)}>
        <List className={classes.sideSinglelv}>
          {menu.map(item => (
            <ListItem
              key={item.id}
              button
              component="a"
              href={`#${item.id}`}
            >
              <ListItemText primary={item.name} className={classes.menuList} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List className={classes.userMenu}>
          {['login', 'register'].map((text, index) => (
            <ListItem
              key={index.toString()}
              className={cx(classes.noChild, curURL === curOrigin + langPath + '/' + text + '/' ? classes.current : '')}
              component="a"
              href={link[text]}
              button
            >
              <ListItemText className={classes.menuList} primary={t('' + text)} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );

  return (
    <SwipeableDrawer
      open={open}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
      anchor="right"
      classes={{
        paper: classes.paperNav
      }}
    >
      <SideList />
    </SwipeableDrawer>
  );
}

SingleNavMobile.propTypes = {
  menu: PropTypes.array.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default SingleNavMobile;
