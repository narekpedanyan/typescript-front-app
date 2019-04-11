import Products from '../../containers/products/products';
import {Route, Link, Router, Switch, Redirect} from 'react-router-dom';
import * as React from 'react';


class ApplicationRoutes extends React.PureComponent {
    public render() {
        return (
            <Switch>
                <Redirect exact from="/" to="/products" />
                <Route exact path="/products" component={Products}/>
                <Route path="/business" component={() => (<div> This is business </div>)}/>
                <Route path="/economics" component={() => (<div> This is economics </div>)}/>
            </Switch>
        )
    }
}

export default ApplicationRoutes;

