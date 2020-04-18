import React from 'react';

const Home = React.lazy(() => import('../views/Home.view'));
const Auth = React.lazy(() => import('../views/Auth.view'));
const Test = React.lazy(() => import('../views/test'));

var indexRoutes = [
  { exact:false, path: "/test", name: "Test", component: Test },
  { exact:false, path: "/dashboard/", name: "Home", component: Home },
  { exact:false, path: "/", name: "Auth", component: Auth },
];

export default indexRoutes;
