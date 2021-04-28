import { matchPath } from 'react-router-dom';

export const readToken = () => localStorage.getItem('token');
export const findRoute = (path, routes) => {
  const removedHash = path && path.split('#')[0];

  const matchingRoute = routes.find((route) => matchPath(removedHash, {
    path: route.path,
    exact: route.exact
  }));

  return matchingRoute;
};
export const handlePreload = (path, routes) => {
  const matchingRoute = findRoute(path, routes);

  if (matchingRoute && matchingRoute.component) {
    const component = matchingRoute.component;

    component.preload();
  }
};
