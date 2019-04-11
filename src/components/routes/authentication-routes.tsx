import SignUp from '../../components/shared/authentication/sign-up';
import Login from '../../components/shared/authentication/login';
import {Route, Link, Router, Redirect, Switch} from 'react-router-dom';
import * as React from 'react';


class AuthenticationRoutes extends React.PureComponent {
    public render() {
        return (
            <div className='auth-wrapper'>
                <div className='popup'>
                    <Switch>
                        <Redirect exact from="/" to="/login" />
                        <Route exac path="/login" component={Login}/>
                        <Route path="/sign-up" component={SignUp}/>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default AuthenticationRoutes;

