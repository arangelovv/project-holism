import { computed, inject, Injectable, signal } from "@angular/core";
import {
	Auth,
	authState,
	GoogleAuthProvider,
	signInWithPopup,
} from "@angular/fire/auth";
import { AuthState, UserEntity } from "../../models/auth.models";
import { serverTimestamp } from "firebase/firestore";
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

	// State with proper typing
	private userState = signal<AuthState>({ user: null });

	// Selector
	user = computed(() => this.userState().user);

	constructor() {
		// Auth source
		authState(this.auth).subscribe((user) => {
			this.userState.set({ user });
			if (!user) {
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

			const userEntity = this.createUserEntity(user);
			await this.firestoreService.setDoc("users", userEntity, user.uid);

			console.info(`${user.displayName} signed in successfully.`);
			await this.router.navigate(["/app/home"]);
		} catch (error) {
			console.error("Sign-in error:", error);
			throw error; // Re-throw to allow handling by the caller
		}
	}

	async logout(): Promise<void> {
		try {
			await this.auth.signOut();
			this.userState.set({ user: null });
			await this.router.navigate(["/auth"]);
		} catch (error) {
			console.error("Logout error:", error);
			throw error;
		}
	}
}
