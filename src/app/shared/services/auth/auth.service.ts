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

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private auth = inject(Auth);
  private router = inject(Router);
  private firestoreService = inject(FirestoreService);

  // State
  private userState = signal<AuthState | null>({ user: null });

  // Selector
  user = computed(() => this.userState()?.user);

  constructor() {
    // Auth source
    authState(this.auth).subscribe((user) => {
      this.userState.set({ user });
      if (!user) {
        this.router.navigate(["/landing"]);
      }
    });
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

      const currentDate = new Date();

      // Create the UserEntity object
      const userEntity = {
        metadata: {
          createdAt: currentDate, // Pass directly to Firestore
          updatedAt: currentDate,
        },
        information: {
          email: user.email ?? "",
          displayName: user.displayName ?? "",
          profilePhotoUrl: user.photoURL ?? "",
        },
      };

      console.log("User Entity to be written:", userEntity); // Log before writing

      // Save to Firestore using the FirestoreService
      await this.firestoreService.setDoc("users", userEntity, user.uid);

      console.warn(`${user.displayName} signed in successfully.`);
      this.router.navigate(["/app/home"]);
    } catch (error: any) {
      console.error("Sign-in error:", error);
    }
  }

  logout(): Promise<void> {
    return this.auth.signOut().then(() => {
      this.userState.set(null);
      this.router.navigate(["/landing"]);
    });
  }
}
