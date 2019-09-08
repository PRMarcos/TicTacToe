import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Global } from "./globalStyle";

ReactDOM.render( 
<React.Fragment>
<App />
<Global/>
</React.Fragment>
    , document.getElementById('root'));
