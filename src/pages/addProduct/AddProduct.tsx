import React, { useState } from "react";
import { v4 } from "uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import Compress from "browser-image-compression";
import { storage } from "../../firebase/config";
import { IProduct } from "../../models/IProduct";
import Header from "../../components/Header";
import addProductImg from "./../../assets/addProduct.jpg";
import { addNewProduct } from "../../firebase/products";

let INITIALSTATE: IProduct = {
  name: "",
  category: "",
  overview: "",
  price: 1,
  size: 1,
  img: "",
};
export default function AddProduct() {
  let [product, setProduct] = useState<IProduct>(INITIALSTATE);
  let handleChange = (e: any) => {
    setProduct((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  let handleImg = (e: any) => {
    Compress(e.target.files[0], {
      maxSizeMB: 1,
    }).then((img) => {
      setProduct((prevState) => ({
        ...prevState,
        img,
      }));
    });
  };

  let handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let imgName = `${product.img.name}${v4()}`;
    let imgRef = ref(storage, `/products/${imgName}`);
    uploadBytes(imgRef, product.img).then((uploadedImg) => {
      getDownloadURL(uploadedImg.ref).then((url) => {
        product.img = url;
        addNewProduct(product).then(() => {
          setProduct(INITIALSTATE);
        });
      });
    });
  };
  return (
    <div className="addProduct">
      <Header header={["home", "/", "Add New Product"]} />
      <div className="container">
        <div className="addProduct__content">
          <div className="addProduct__left">
            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="">
                <label htmlFor="name">Product Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="addProduct__form-input"
                  value={product.name}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="">
                <label htmlFor="overview">Product Overview</label>
                <input
                  type="text"
                  name="overview"
                  id="overview"
                  className="addProduct__form-input"
                  value={product.overview}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="">
                <label htmlFor="category">Product Category</label>
                <select
                  name="category"
                  id="category"
                  className="addProduct__form-select"
                  onChange={(e) => handleChange(e)}
                >
                  <option value="unfiltered">Unfiltered Honey</option>
                  <option value="organic">Organic Honey</option>
                  <option value="packet">Honey Packets</option>
                </select>
              </div>
              <div className="">
                <label htmlFor="price">Product price</label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  min="1"
                  className="addProduct__form-input"
                  value={product.price}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="">
                <label htmlFor="size">Product size</label>
                <input
                  type="number"
                  name="size"
                  id="size"
                  min="1"
                  className="addProduct__form-input"
                  value={product.size}
                  onChange={(e) => handleChange(e)}
                />
              </div>
              <div className="">
                <label htmlFor="img">Product Image</label>
                <input
                  type="file"
                  name="img"
                  id="img"
                  className="addProduct__form-input"
                  accept="image/png, image/jpg, image/jpeg"
                  onChange={(e) => handleImg(e)}
                />
              </div>
              <button type="submit" className="btn primaryBtn">
                Add
              </button>
            </form>
          </div>
          <div className="addProduct__right">
            <img src={addProductImg} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
}
