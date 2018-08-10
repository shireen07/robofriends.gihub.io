import React from 'react';
import ReactDOM from 'react-dom'; //to connect the React to the DOM
import { Provider } from 'react-redux'; //to connect react and redux
import { createStore } from 'redux';//creating a store in redux
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; //package has classnames we can usefor asthetics. like bookstrap
import { searchRobots } from './reducers';

//create Store for a big state object
const store = createStore(searchRobots); //rootReducer is the main reducer of our app. right now we just have 1 reducer so using that
//this store can now be accessed and passed down into our app.
//with redux we can remove all state from our react app and keep it inside the store and pass down the store as a prop

ReactDOM.render( 
                <Provider store={store}>
                    <App /> 
                </Provider> , document.getElementById('root')); 
registerServiceWorker();
