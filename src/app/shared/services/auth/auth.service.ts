import { computed, inject, Injectable, signal } from "@angular/core";
import {
  Auth,
  authState,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from "@angular/fire/auth";
import { AuthState, AuthUser, UserEntity } from "./auth.models";
import { serverTimestamp } from "firebase/firestore";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private auth = inject(Auth);
  private router = inject(Router);

  //state
  private userState = signal<AuthState | null>({ user: null });

  //selector
  user = computed(() => this.userState()?.user);

  constructor() {
    //auth source
    authState(this.auth).subscribe((user) => {
      this.userState.set({ user });
      if (!user) {
        this.router.navigate(["/landing"]);
      }
    });
  }

  //methods
  async signInWithGoogle(): Promise<void> {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(this.auth, provider);
      const user = result.user;

      // Create a UserEntity object
      const userEntity: UserEntity = {
        metadata: {
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        },
        information: {
          email: user.email ?? "",
          displayName: user.displayName ?? "",
          profilePhotoUrl: user.photoURL ?? "",
        },
      };

      console.log("User Entity:", userEntity);

      // Navigate to dashboard
      console.warn(`${user.displayName} signed in.`);
      this.router.navigate(["/home"]);
    } catch (error: any) {
      console.error("Sign-in error:", error);
    }
  }
}
