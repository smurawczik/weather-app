import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useLoadingStyles = makeStyles(() => ({
  rootFix: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 100,
  }
}))

const Loading = () => {
  const classes = useLoadingStyles();

  return <div className={classes.rootFix}><CircularProgress /></div>;
}

export default Loading;