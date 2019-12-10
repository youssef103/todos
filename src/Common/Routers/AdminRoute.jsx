import { Admin } from "../../Components/Admin/Admin";
import { AdminTest } from "../../Components/Admin/AdminTest";
import { AdminProfile } from "../../Components/Admin/AdminProfile";

export const AdminRouter = [
  { path: "/admin", component: Admin },
  { path: "/admin/profile", component: AdminProfile },
  { path: "/admin/test", component: AdminTest }
];
