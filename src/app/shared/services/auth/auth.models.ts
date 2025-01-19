import { User } from "@angular/fire/auth";
import { FieldValue } from "firebase/firestore";

export type AuthUser = User | null;

export interface AuthState {
  user: AuthUser;
}

//----------User Entity----------

interface UserInformation {
  email: string;
  displayName: string;
  profilePhotoUrl: string;
}

export interface UserEntity {
  metadata: { createdAt: FieldValue; updatedAt: FieldValue };
  information: UserInformation;
}
