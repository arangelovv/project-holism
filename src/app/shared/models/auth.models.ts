import { User } from "@angular/fire/auth";
import { FieldValue } from "firebase/firestore";

export type AuthUser = User | null;

export interface AuthState {
	user: AuthUser;
}

//----------Raw Entity----------
interface EntityMetaData {
	createdAt: FieldValue;
	updatedAt: FieldValue;
}

export interface Entity {
	metadata: EntityMetaData;
}

//----------User Entity----------

interface UserInformation {
	email: string;
	displayName: string;
	photoURL: string;
}

// interface UserPhysicalDetails {
//   height: number;
//   weight: number;
//   gender: "male" | "female" | "other";
// }

// interface UserNutritionalGoals {
//   caloriesGoal: number;
//   proteinGoal: number;
//   fatGoal: number;
//   carbsGoal: number;
// }

export interface UserEntity extends Entity {
	information: UserInformation;
	// physicalDetails: UserPhysicalDetails;
	// nutritionalGoals: UserNutritionalGoals;
}
