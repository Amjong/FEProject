import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

export default class FirebaseApp {
  constructor(firebaseConfig) {
    this.app = initializeApp(firebaseConfig);
    this.provider = new GoogleAuthProvider();
    this.loginState = false;
  }

  getApp() {
    return this.app;
  }

  getLoginState() {
    return this.loginState;
  }

  login() {
    if (this.loginState) {
      console.log('already login!');
      return;
    }
    const auth = getAuth(this.app);
    signInWithPopup(auth, this.provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(token, user);
        // ...
        this.loginState = !this.loginState;
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
        // ...
      });
  }
}
