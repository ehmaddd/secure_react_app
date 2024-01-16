// src/authService.ts
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import type { UserCredential } from "firebase/auth";
import firebaseConfig from "./firebaseConfig";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const signUp = async (email: string, password: string): Promise<boolean> => {
  try {
    const credential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Successfully signed up:", credential.user);
    return true;
  } catch (error: any) {
    console.error("Error signing up:", error.message);
    return false;
  }
};

export const logIn = async (email: string, password: string): Promise<boolean> => {
  try {
    const credential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Successfully logged in:", credential.user);
    return true;
  } catch (error: any) {
    console.error("Error logging in:", error.message);
    return false;
  }
};

export const logOut = async (): Promise<boolean> => {
  try {
    await signOut(auth);
    console.log("Successfully logged out");
    return true;
  } catch (error: any) {
    console.error("Error logging out:", error.message);
    return false;
  }
};
