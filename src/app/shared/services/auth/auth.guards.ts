import {
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from "@angular/fire/auth-guard";

export const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(["landing"]);

export const redirectLoggedInToDashboard = () =>
  redirectLoggedInTo(["/app/home"]);
