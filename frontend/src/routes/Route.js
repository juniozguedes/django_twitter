import React from 'react';

import { Route as RouterDomRoute, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/Auth';

function Route({ isPrivate = false, component: Component, ...rest }) {
  const { userData } = useAuth();

  return (
    <RouterDomRoute
      {...rest}
      render={() => {
        return isPrivate === !!userData ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/login' : '/',
            }}
          />
        );
      }}
    />
  );
}
export default Route;
