import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import { createMemoryHistory } from 'history'

const mount = ( el, { onNavigate } ) => {
    const history = createMemoryHistory();

    if (onNavigate) {
        history.listen(onNavigate)
    }
    ReactDom.render( <App history={history}/>, el );

    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathName } = history.location;

            if (pathName !== nextPathname) {
                history.push(nextPathname);
            }
        }
    };
};

if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#marketing-dev-root');

    if (devRoot) {
        mount(devRoot, {});
    }
}

export { mount };
