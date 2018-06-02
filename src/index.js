import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; //package has classnames we can usefor asthetics. like bookstrap

ReactDOM.render( <App /> ,document.getElementById('root')); 
registerServiceWorker();
