import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
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
