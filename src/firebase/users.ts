import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "./config";

export let userSignUp = async (values: any) => {
  try {
    let user = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    let docRef = await addDoc(collection(db, "users"), {
      ...values,
      authID: user.user.uid,
    });
    localStorage.setItem("honey_user", docRef.id);
    localStorage.setItem("Honey_Username", values.fullName);
    return "success";
  } catch (err: any) {
    return err.message;
  }
};

export let userLogout = async () => {
  await signOut(auth);
  localStorage.removeItem("Honey_Username");
  localStorage.removeItem("honey_user");
  if (localStorage.getItem("role")) localStorage.removeItem("role");
};

export let userLogin = async (email: string, password: string) => {
  try {
    let userAuth = await signInWithEmailAndPassword(auth, email, password);
    let q = query(
      collection(db, "users"),
      where("authID", "==", userAuth.user.uid)
    );
    let docRef = await getDocs(q);
    let docsRef = docRef.docs[0];
    if (docRef.docs[0].data().role == "admin")
      localStorage.setItem("role", "admin");
    localStorage.setItem("honey_user", docsRef.id);
    localStorage.setItem("Honey_Username", docRef.docs[0].data().fullName);
    return "success";
  } catch (err: any) {
    return err.message;
  }
};

export let getUserById = async (id: string) => {
  try {
    let docRef = doc(db, "users", id);
    let userRef = await getDoc(docRef);
    return userRef.data();
  } catch (err: any) {
    return err.message;
  }
};
