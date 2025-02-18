import { computed, inject, Injectable, signal } from "@angular/core";
import {
	Auth,
	authState,
	GoogleAuthProvider,
	signInWithPopup,
} from "@angular/fire/auth";
import { AuthState, UserEntity } from "../../models/auth.models";
import { serverTimestamp } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { FirestoreService } from "../firestore/firestore.service";
import { User } from "@angular/fire/auth";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	private auth = inject(Auth);
	private router = inject(Router);
	private firestoreService = inject(FirestoreService);

	// Updated state to include userData
	private userState = signal<AuthState>({ user: null, userData: null });

	// Updated selectors
	user = computed(() => this.userState().user);
	userData = computed(() => this.userState().userData);

	constructor() {
		authState(this.auth).subscribe((user) => {
			if (user) {
				this.firestoreService
					.docData$<UserEntity>("users", user.uid)
					.subscribe((userData) => {
						this.userState.set({ user, userData: userData ?? null });
					});
			} else {
				this.userState.set({ user: null, userData: null });
				this.router.navigate(["/auth"]);
			}
		});
	}

	private createUserEntity(user: User): UserEntity {
		return {
			metadata: {
				createdAt: serverTimestamp(),
				updatedAt: serverTimestamp(),
			},
			information: {
				email: user.email ?? "",
				displayName: user.displayName ?? "",
				photoURL: user.photoURL ?? "",
			},
			physicalDetails: {
				height: 170,
				weight: 70,
				age: 25,
				gender: "male",
			},
			nutritionalGoals: {
				caloriesGoal: 2000,
				proteinGoal: 150,
				fatGoal: 70,
				carbsGoal: 300,
			},
			activityLevel: "sedentary",
			physiqueGoal: "weightLoss",
		};
	}

	// Methods
	async signInWithGoogle(): Promise<void> {
		const provider = new GoogleAuthProvider();
		try {
			const result = await signInWithPopup(this.auth, provider);
			const user = result.user;

			if (!user) {
				throw new Error("No user information received from Google Auth");
			}

			const existingUser = await this.firestoreService.getDoc<UserEntity>(
				"users",
				user.uid
			);

			if (!existingUser) {
				const userEntity = this.createUserEntity(user);
				await this.firestoreService.setDoc("users", userEntity, user.uid);
			}

			console.info(`${user.displayName} signed in successfully.`);
			await this.router.navigate(["/app/home"]);
		} catch (error) {
			console.error("Sign-in error:", error);
			throw error;
		}
	}

	async signOut(): Promise<void> {
		try {
			await this.auth.signOut();
			this.userState.set({
				user: null,
				userData: null,
			});
			await this.router.navigate(["/auth"]);
		} catch (error) {
			console.error("Logout error:", error);
			throw error;
		}
	}
}
