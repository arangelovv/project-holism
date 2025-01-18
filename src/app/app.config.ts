import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { enviroment } from "./enviroments/enviroment.dev";
import { getApp, initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { connectAuthEmulator, getAuth, provideAuth } from "@angular/fire/auth";
import {
  connectFirestoreEmulator,
  Firestore,
  getFirestore,
  initializeFirestore,
  provideFirestore,
} from "@angular/fire/firestore";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(enviroment.firebase)),
    provideAuth(() => {
      const auth = getAuth();
      if (enviroment.useEmulators) {
        connectAuthEmulator(auth, "http://localhost:9099");
      }
      return auth;
    }),
    provideFirestore(() => {
      let firestore: Firestore;
      if (enviroment.useEmulators) {
        firestore = initializeFirestore(getApp(), {
          experimentalForceLongPolling: true,
        });
        connectFirestoreEmulator(firestore, "localhost", 8088);
      } else {
        firestore = getFirestore();
      }
      return firestore;
    }),
  ],
};
