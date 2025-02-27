import React from "react";
import { Redirect } from "react-router-dom";
import dashboardRoutes from "./views/dashboard/DashboardRoutes";
import subjectRoutes from "./views/subjects/SubjectRoutes";
import sessionRoutes from "./views/sessions/SessionRoutes";

const redirectRoute = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard/analytics" />
  }
];

const errorRoute = [
  {
    component: () => <Redirect to="/session/404" />
  }
];

const routes = [
  ...sessionRoutes,
  ...dashboardRoutes,
  ...redirectRoute,
  ...errorRoute,
  ...subjectRoutes
];

export default routes;
