import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary:{
        main:'#051937',
        spacing: 8,
    },
  },
});
 

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> 
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

