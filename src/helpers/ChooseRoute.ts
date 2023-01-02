import { AuthRoutes } from "../routes/Auth";
import { BothRoutes } from "../routes/Both";
import { BursarRoutes } from "../routes/Bursar";
import { OwnerRoutes } from "../routes/Owner";
import { TeacherRoutes } from "../routes/Teacher";

export default function ChooseRoute(user: string) {
    console.log(user)
  if(user === "Both"){
    return BothRoutes;
  }
  else if(user === "UnAuthorized"){
    return AuthRoutes;
  }
  else if(user === "Teacher"){
    return TeacherRoutes;
  }
  else if(user === "Owner"){
    return OwnerRoutes;
  }
  else if(user === "Bursar"){
    return BursarRoutes;
  }
  else {
    return null;
  }
}
