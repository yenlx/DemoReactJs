import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {Subject} from './noredux/index'
import Demo from './demo/index'
import LazyLoad from './demo/lazyLoadComponent'
import LazyLoadImage from './demo/lazyLoadImage'


ReactDOM.render(<LazyLoadImage />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
