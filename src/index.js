import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {SnackbarProvider} from './utils/SnackBarContext';

ReactDOM.render(<SnackbarProvider>
<App />
</SnackbarProvider>
, document.getElementById('root'));

serviceWorker.unregister();

