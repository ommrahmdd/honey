import React, { useState } from "react";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import { v4 } from "uuid";
import { storage } from "./../../firebase/config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { addBlog } from "../../firebase/blog";
import Compress from "browser-image-compression";
type InitialTypes = {
  email: string;
  password: string;
};
type blogType = {
  title: string;
  overview: string;
  content: string;
  img: string | any;
  date: string;
};
export default function AddBlog() {
  let [error, setError] = useState<string>("");
  let history = useHistory();
  let [blog, setBlog] = useState<blogType>({
    title: "",
    overview: "",
    content: "",
    img: "",
    date: "",
  });
  let handleChange = (e: any) => {
    setBlog((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  let handleImageChange = (e: any) => {
    console.log(blog);
    Compress(e.target.files[0], {
      maxSizeMB: 1,
    }).then((file) => {
      setBlog((prevState) => ({
        ...prevState,
        img: file,
      }));
    });
  };
  let handleSubmit = (e: any) => {
    e.preventDefault();
    let imgName = `${blog.img.name}${v4()}`;
    let imgRef = ref(storage, `blog/${imgName}`);
    uploadBytes(imgRef, blog.img).then((uploadFile) => {
      getDownloadURL(uploadFile.ref).then((url) => {
        blog.img = url;
        addBlog(blog).then((d) => {
          setBlog({
            title: "",
            overview: "",
            content: "",
            img: "",
            date: "",
          });
        });
      });
    });
  };
  return (
    <div className="authPage">
      <Header header={["home", " /  ", "Add Blog"]} />
      <div className="container">
        <div className="authPage__content">
          <form
            action=""
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                className="form__input"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="">
              <label htmlFor="date">Date</label>
              <input
                type="text"
                name="date"
                id="date"
                className="form__input"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="">
              <label htmlFor="img">Image</label>
              <input
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                name="img"
                id="img"
                className="form__input"
                onChange={(e) => handleImageChange(e)}
              />
            </div>
            <div className="addBlog__overview">
              <label htmlFor="overview">Overivew</label>
              <textarea
                name="overview"
                id="overview"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="addBlog__content">
              <label htmlFor="content">Content</label>
              <textarea
                name="content"
                id="content"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button className="btn primaryBtn">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
}
