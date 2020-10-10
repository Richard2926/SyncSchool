import { MatxLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const Subject = MatxLoadable({
  loader: () => import("./Subject")
})

const subjectRoutes = [
  {
    path: "/subject/view",
    component: Subject,
    auth: authRoles.admin
  }
];

export default subjectRoutes;
