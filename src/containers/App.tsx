import AuthenticationRoutes from '../components/routes/authentication-routes';
import {authData} from '../modules/authentication/AuthenticationReducer';
import ApplicationRoutes from '../components/routes/application-routes';
import Header from '../components/shared/header/header';
import { Route, Link, Router, withRouter } from 'react-router-dom';
import { connect, DispatchProp } from 'react-redux';
import '../../assets/styles/index.scss';
import * as React from 'react';
import store from '../store';

interface AppProps {
    authData: any
}

interface AppStateProps {
    authData: {
        isloggedIn: boolean,
        user: object
    }
}

class App extends React.Component<AppProps, {}> {

    state = {

    };

    visualizer() {
        const {user} = this.props.authData;

        if(!!user) {
            return <ApplicationRoutes />
        }else {
            return <AuthenticationRoutes />
        }
    }

    render() {
        const {user} = this.props.authData;
        return (
                <div className='container'>
                    <Header />
                    {this.visualizer()}
                </div>
        );
    }
}

const mapStateToProps = (state: AppStateProps)  => {


    return {
        authData: state.authData
    }
};


export default withRouter(connect<AppStateProps, null, null>(
    mapStateToProps
)(App))
