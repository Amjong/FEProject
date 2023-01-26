import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getDatabase, ref, set, get, child } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';

export default class FirebaseApp {
  #adminUserId;
  #loginState = false;
  constructor(firebaseConfig, adminUserId) {
    this.app = initializeApp(firebaseConfig);
    this.provider = new GoogleAuthProvider();
    this.#adminUserId = adminUserId;
  }

  getApp() {
    return this.app;
  }

  getLoginState() {
    return this.#loginState;
  }

  login(callback) {
    if (this.#loginState) {
      console.log('already login!');
      return;
    }

    this.#GoogleLogin(callback);
  }

  async createProduct(imageURL, price, categories, description, options) {
    const newId = uuidv4();
    await this.#writeProduct(
      newId,
      imageURL,
      price,
      categories,
      description,
      options
    );
    await this.#updateProductList(newId);
    return;
  }

  readProduct(productId, callback) {
    this.#readFromDataBase(`products/${productId}`, callback);
  }

  readProductList(callback) {
    this.#readFromDataBase('productList', callback);
  }

  logout(callback) {
    if (!this.#loginState) {
      console.log('already not login-ed!');
      return;
    }
    this.#loginState = !this.#loginState;
    callback(this.#loginState);
  }

  async #writeProduct(
    productId,
    imageURL,
    price,
    categories,
    description,
    options
  ) {
    await this.#writeToDataBase('products/' + productId, {
      productId: productId,
      imageURL: imageURL,
      price: price,
      categories: categories,
      description: description,
      options: options,
    });
  }

  async #updateProductList(newId) {
    await this.#readFromDataBase('productList', (list) => {
      if (list) {
        this.#writeToDataBase('productList', [...list, newId]);
      } else {
        this.#writeToDataBase('productList', [newId]);
      }
    });
  }

  async #readFromDataBase(URL, callback) {
    const dbRef = ref(getDatabase(this.app));
    const snapshot = await get(child(dbRef, URL));
    if (snapshot.exists()) {
      const resultObject = snapshot.val();
      callback(resultObject);
      // console.log(resultObject);
    } else {
      console.log('No data available');
      callback(null);
    }
  }

  #writeToDataBase(URL, object) {
    const db = getDatabase(this.app);
    return set(ref(db, URL), object);
  }

  #GoogleLogin(callback) {
    const auth = getAuth(this.app);
    signInWithPopup(auth, this.provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        let isAdmin = false;
        if (user.uid === this.#adminUserId) {
          isAdmin = true;
        }
        // ...
        this.#loginState = !this.#loginState;
        callback(this.#loginState, user, isAdmin);
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
