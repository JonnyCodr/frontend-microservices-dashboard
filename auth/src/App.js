import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

import Signin from './components/Signin';
import Signup from './components/Signup';


const generatedClassName = createGenerateClassName({
    productionPrefix: 'auth',
})
export default ({history}) => {
    return <div>
        <StylesProvider generateClassName={ generatedClassName }>
            <Router history={history}>
                <Switch>
                    <Route path="/auth/signin" component={Signin} />
                    <Route path="/auth/signup" component={Signup} />
                </Switch>
            </Router>
        </StylesProvider>
    </div>
}
