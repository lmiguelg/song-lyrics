import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';



function TopBar() {
    
  return (
    <AppBar position="static">
        <Toolbar>
            <Typography variant="h6">
                Welcome to Song Lyrics Search
            </Typography>
            <Typography variant="h6">
             
            </Typography>
        </Toolbar>
    </AppBar>
  );
}

export default TopBar;




