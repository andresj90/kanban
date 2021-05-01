import React from 'react';
import { render } from 'react-dom'
import App from './App';

function Index() {
    return (
        <React.StrictMode>
            <App/>
        </React.StrictMode >
    )
}

render(<Index/>, document.getElementById("root")); 