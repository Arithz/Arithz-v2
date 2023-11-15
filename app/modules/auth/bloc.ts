import { LoginCredentials } from "./model";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@utils/index";

export function loginCredentialsFactory() {
  /**
   *
   * @param data email, password
   * @description Sign in a user with an email address and password.
   */
  async function signIn(data: LoginCredentials) {
    const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
  }

  /**
   *
   * @param email string
   * @description Sends a password reset email to the given email address.
   */
  async function resetPassword(email: string) {
    await sendPasswordResetEmail(auth, email);
  }
}
