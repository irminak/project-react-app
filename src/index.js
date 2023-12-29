import React from 'react';
import { ReactDOM } from 'react';

import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
    ReactDOM.render(<App />, rootElement);
}
