import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

// import Landing from './components/Landing';
// import Pricing from './components/Pricing';


const generatedClassName = createGenerateClassName({
    productionPrefix: 'auth',
})
export default ({history}) => {
    return <div>
        <StylesProvider generateClassName={ generatedClassName }>
            <Router history={history}>
                <Switch>

                </Switch>
            </Router>
        </StylesProvider>
    </div>
}
