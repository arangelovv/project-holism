import { inject, Injectable } from "@angular/core";
import {
	doc,
	setDoc,
	Firestore,
	DocumentData,
	getDoc,
	deleteDoc,
	collection,
	getDocs,
	updateDoc,
	addDoc,
	query,
	where,
	QueryConstraint,
	UpdateData,
} from "@angular/fire/firestore";

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

	public async getDoc<T extends DocumentData>(
		collectionName: string,
		uid: string
	) {
		const docRef = doc(this.firestore, collectionName, uid);
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			return docSnap.data() as T;
		} else {
			console.log(`No such document! ${collectionName}/${uid}`);
			return null;
		}
	}

	// Create a new document with auto-generated ID
	public async createDoc<T extends DocumentData>(
		collectionName: string,
		data: T
	) {
		const collectionRef = collection(this.firestore, collectionName);

		try {
			const docRef = await addDoc(collectionRef, data);
			console.log(
				`Document successfully created in ${collectionName} with ID: ${docRef.id}`
			);
			return docRef.id;
		} catch (error) {
			console.error(`Error creating document in ${collectionName}:`, error);
			throw error;
		}
	}

	// Update specific fields in a document
	public async updateDoc<T extends DocumentData>(
		collectionName: string,
		uid: string,
		data: UpdateData<T>
	) {
		const docRef = doc(this.firestore, collectionName, uid);

		try {
			await updateDoc(docRef, data);
			console.log(`Document successfully updated at ${collectionName}/${uid}`);
		} catch (error) {
			console.error(
				`Error updating document at ${collectionName}/${uid}:`,
				error
			);
			throw error;
		}
	}

	// Delete a document
	public async deleteDoc(collectionName: string, uid: string) {
		const docRef = doc(this.firestore, collectionName, uid);

		try {
			await deleteDoc(docRef);
			console.log(`Document successfully deleted at ${collectionName}/${uid}`);
		} catch (error) {
			console.error(
				`Error deleting document at ${collectionName}/${uid}:`,
				error
			);
			throw error;
		}
	}

	// Get multiple documents from a collection
	public async getDocs<T extends DocumentData>(
		collectionName: string,
		queryConstraints: QueryConstraint[] = []
	) {
		try {
			const collectionRef = collection(this.firestore, collectionName);
			const q = query(collectionRef, ...queryConstraints);
			const querySnapshot = await getDocs(q);

			const documents: T[] = [];
			querySnapshot.forEach((doc) => {
				documents.push({ id: doc.id, ...doc.data() } as unknown as T);
			});

			return documents;
		} catch (error) {
			console.error(`Error getting documents from ${collectionName}:`, error);
			throw error;
		}
	}
}
