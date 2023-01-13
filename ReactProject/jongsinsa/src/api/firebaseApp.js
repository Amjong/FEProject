import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase, ref, set } from 'firebase/database';

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

  login(callback) {
    if (this.loginState) {
      console.log('already login!');
      return;
    }

    this.#GoogleLogin(callback);
  }

  writeProduct(productId, imageURL, price, categories, description, options) {
    this.#writeToDataBase('products/' + productId, {
      imageURL: imageURL,
      price: price,
      categories: categories,
      description: description,
      options: options,
    });
  }

  appendProduct(productId, imageURL, price, categories, description, options) {}

  logout(callback) {
    if (!this.loginState) {
      console.log('already not login-ed!');
      return;
    }
    this.loginState = !this.loginState;
    callback(this.loginState);
  }

  #writeToDataBase(URL, object) {
    const db = getDatabase(this.app);
    set(ref(db, URL), object);
  }

  #GoogleLogin(callback) {
    const auth = getAuth(this.app);
    signInWithPopup(auth, this.provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        console.log(result);
        const user = result.user;
        console.log(token, user);
        // ...
        this.loginState = !this.loginState;
        callback(this.loginState, user);
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
