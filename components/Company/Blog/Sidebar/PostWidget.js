import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTranslation } from 'next-i18next';
import Paper from '../../../Cards/Paper';
import useStyles from '../blog-style';

function PostWidget() {
  const { classes } = useStyles();
  const { t } = useTranslation('common');
  const news = [{
    title: 'Vestibulum bibendum nisi eget magna',
    date: 'Jan 9, 2014'
  },
  {
    title: 'Quisque a consequat ante',
    date: 'Jan 9, 2014'
  },
  {
    title: 'Donec dignissim, odio ac imperdiet luctus',
    date: 'Jan 9, 2014'
  },
  {
    title: 'Suspendisse eleifend nunc non',
    date: 'Jan 9, 2014'
  },
  {
    title: 'Vestibulum a massa vestibulum',
    date: 'Jan 9, 2014'
  }];

  return (
    <Paper title={t('blog_post')} icon="ion-ios-bookmark-outline" color="transparent" desc="">
      <div className={classes.albumRoot}>
        <List component="nav">
          {news.map((item, index) => (
            <ListItem key={index.toString()} component="a" href="#" button>
              <ListItemText primary={item.title} secondary={item.date} />
            </ListItem>
          ))}
        </List>
      </div>
    </Paper>
  );
}

export default PostWidget;
