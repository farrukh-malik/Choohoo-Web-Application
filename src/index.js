import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Routes from './Routes'
import Auth from './screens/auth';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


ReactDOM.render(<MuiThemeProvider><Routes/></MuiThemeProvider>,
     document.getElementById('root'));
registerServiceWorker();
