import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';


const routes = [
    {
        path: 'about',
        component: asyncComponent(() => import('../Page/Home/home')),
    },
    {
        path: '',
        component: asyncComponent(() => import('../Page/About/about')),
        exact: false,
    },
];

class AppRouter extends Component {
    render() {
        const { url, style } = this.props;

        console.log(url)
        return (
            <div style={style}>
                {routes.map(singleRoute => {
                    // console.log("singleRoute: ", singleRoute)
                    const { path, exact, ...otherProps } = singleRoute;
                    return (
                        <Route
                            exact={exact === false ? false : true}
                            key={singleRoute.path}
                            path={`${url}/${singleRoute.path}`}
                            {...otherProps}
                        />
                    );
                })}
            </div>
        );
    }
}

export default AppRouter;
