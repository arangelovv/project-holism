import { inject, Injectable } from "@angular/core";
import { doc, setDoc, Firestore, DocumentData } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root",
})
export class FirestoreService {
  private firestore = inject(Firestore);

  constructor() {}

  // Set or update a document
  public async setDoc<T extends DocumentData>(
    collectionName: string,
    data: T,
    uid: string
  ) {
    const docRef = doc(this.firestore, collectionName, uid);

    try {
      // Directly write the document to Firestore
      await setDoc(docRef, data);
      console.log(`Document successfully written to ${collectionName}/${uid}`);
    } catch (error) {
      console.error(
        `Error writing document to ${collectionName}/${uid}:`,
        error
      );
      throw error; // Re-throw error for handling elsewhere
    }
  }
}
