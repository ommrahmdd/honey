import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./config";

export let addBlog = async (data: any) => {
  try {
    let docRef1 = await addDoc(collection(db, "blogs"), data);
    return "success";
  } catch (err: any) {
    return err.message;
  }
};

export let getBlogs = async () => {
  try {
    let docsRef = await getDocs(collection(db, "blogs"));
    let blogs = docsRef.docs.map((blog) => ({
      _id: blog.id,
      ...blog.data(),
    }));
    return blogs;
  } catch (err: any) {
    return err.message;
  }
};
