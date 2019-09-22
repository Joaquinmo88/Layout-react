import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import asyncComponent from './helpers/AsyncFunc';
import App from './containers/App/App';

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
    // <Route
    //   {...rest}
    //   render={props =>
    //     isLoggedIn ? (
    //       <Component {...props} />
    //     ) : (
    //       <Redirect
    //         to={{
    //           pathname: '/signin',
    //           state: { from: props.location },
    //         }}
    //       />
    //     )
    //   }
    // />
    <Route
        {...rest}
        render={props => <Component {...props} />} />
);

const PublicRoutes = ({ history }) => {

    return (
        <ConnectedRouter history={history}>
            <div>
                <Route
                    exact
                    path={'/'}
                    component={asyncComponent(() => import('./containers/Page/Auth/SignIn'))}
                />
                <RestrictedRoute
                    path="/dashboard"
                    component={App}
                // isLoggedIn={isLoggedIn}
                />
                {/* <Route
                    exact
                    path={'/signin'}
                    component={asyncComponent(() => import('./containers/Page/signin'))}
                />
                <Route
                    exact
                    path={'/'}
                    component={asyncComponent(() => import('./containers/Page/landing'))}
                /> */}
            </div>
        </ConnectedRouter>
    )
}

export default connect(state => ({
    isLoggedIn: state.Auth.idToken !== null,
}))(PublicRoutes);
