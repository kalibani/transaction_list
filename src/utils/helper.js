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
export const formatDate = (date) => {
  const d = new Date(date);
  const years = new Intl.DateTimeFormat('id', { year: 'numeric' }).format(d);
  const month = new Intl.DateTimeFormat('id', { month: 'short' }).format(d);
  const days = new Intl.DateTimeFormat('id', { day: '2-digit' }).format(d);
  const formatted = `${days} ${month} ${years}`;
  return formatted;
};

export const formatAmount = (amount) => {
  const numberString = amount.toString();
  const formatted = numberString.replace(/(\d)(?=(\d{3})+$)/g, '$&.');

  return `Rp${formatted}`;
};
