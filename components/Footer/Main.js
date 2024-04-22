import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../ThemePalette/Store';
import SiteMap from './SiteMap';
import Blog from './Blog';
import Basic from './Basic';

function Main(props) {
  const [state] = useContext(Context);
  const { toggleDir } = props;

  return (
    <div>
      { state.footer === 'basic' && <Basic />}
      { state.footer === 'blog' && <Blog toggleDir={toggleDir} />}
      { state.footer === 'sitemap' && <SiteMap toggleDir={toggleDir} />}
    </div>
  );
}

Main.propTypes = {
  toggleDir: PropTypes.func.isRequired
};

export default Main;
