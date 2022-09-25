import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { IProduct } from "../models/IProduct";
import { db } from "./config";

export let addNewProduct = async (data: IProduct) => {
  let docRef = await addDoc(collection(db, "products"), data);
  return docRef.id;
};

export let getAllProducts = async () => {
  let docsRef = await getDocs(collection(db, "products"));
  let products = docsRef.docs.map((product) => ({
    ...product.data(),
    _id: product.id,
  }));
  return products;
};

export let getProduct = async (productID: string) => {
  let docRef = doc(db, "products", productID);
  let docsRef = await getDoc(docRef);
  return {
    ...docsRef.data(),
    _id: docsRef.id,
  };
};

// HANDLE: filter by category
export let filterByCategory = async (category: string) => {
  if (category == "all") {
    let docsRef = await getDocs(collection(db, "products"));
    let products = docsRef.docs.map((product) => ({
      _id: product.id,
      ...product.data(),
    }));
    return products;
  }
  let q = query(collection(db, "products"), where("category", "==", category));
  let docsRef = await getDocs(q);
  let products = docsRef.docs.map((product) => ({
    _id: product.id,
    ...product.data(),
  }));
  return products;
};

export let filterByfilter = async (filter: string, filterBy: string) => {
  let q;
  if (filterBy == "price")
    q = query(collection(db, "products"), where("price", "<=", filter));
  else q = query(collection(db, "products"), where("size", "==", filter));

  let docsRef = await getDocs(q);
  let products = docsRef.docs.map((product) => ({
    _id: product.id,
    ...product.data(),
  }));
  return products.reverse();
};
