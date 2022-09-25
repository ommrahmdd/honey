import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { addToCart, removeFromCart } from "./../../store/actions";
import { IProduct } from "../../models/IProduct";
import {
  filterByCategory,
  filterByfilter,
  getAllProducts,
} from "./../../firebase/products";
import Header from "../../components/Header";
import bee from "./../../assets/loading_bee.png";
import placeHolderImg from "./../../assets/logo.png";
import { handleCloseFilter, handleOpenFilter } from "./shop_util";

export default function Shop() {
  let [products, setProducts] = useState<IProduct[] | null>();
  let cart = useSelector((state: any) => state.cart.cart);
  let dispatch = useDispatch();
  useEffect(() => {
    getAllProducts().then((data: any) => {
      setProducts(data);
    });
  }, []);
  let handleAddToCart = (id: string) => {
    if (cart.indexOf(id) == -1) dispatch(addToCart(id));
    else {
      dispatch(removeFromCart(id));
    }
  };
  let handleFilterCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterByCategory(e.target.value).then((data: any) => {
      setProducts(data);
    });
  };
  let handleFilter = (
    e: React.ChangeEvent<HTMLInputElement>,
    filter: string
  ) => {
    console.log(e.target.value);
    setTimeout(() => {
      filterByfilter(e.target.value, filter).then((data: any) => {
        setProducts(data);
      });
    }, 2000);
  };
  return (
    <main className="shopPage">
      {/* STYLE: --------- START filter */}
      <button className="filterBtn" onClick={handleOpenFilter}>
        <i className="fa-solid fa-arrow-left"></i>
        <span>Filter</span>
      </button>
      <div className="filter">
        <div className="filter__content">
          <details open>
            <summary>
              <span>Category</span>
              <i className="fa-solid fa-arrow-left"></i>
            </summary>
            <div className="details__content">
              {["all", "unfiltered", "organic", "packet"].map(
                (category, index) => (
                  <div
                    className="details__content-box"
                    onClick={handleCloseFilter}
                  >
                    <input
                      type="radio"
                      id={category}
                      name="category"
                      value={category}
                      onChange={(e) => handleFilterCategory(e)}
                    />
                    <label htmlFor={category}>{category} Honey</label>
                  </div>
                )
              )}
            </div>
          </details>
          <div className="line"></div>
          <details open>
            <summary>
              <span>Filter By</span>
              <i className="fa-solid fa-arrow-left"></i>
            </summary>
            <div className="details__filterContent">
              <div className="details__filterContent-box">
                <label htmlFor="price">Price</label>
                <input
                  type="number"
                  min="20"
                  name="price"
                  id="price"
                  onChange={(e) => handleFilter(e, "price")}
                />
              </div>
              <div className="details__filterContent-box">
                <label htmlFor="price">Size</label>
                <input
                  type="number"
                  min="1"
                  max="3"
                  name="size"
                  id="size"
                  onChange={(e) => handleFilter(e, "size")}
                />
              </div>
            </div>
          </details>
          <div className="line"></div>
          <details open>
            <summary>
              <span>Most Popular</span>
              <i className="fa-solid fa-arrow-left"></i>
            </summary>
            <div className="mostPopular">
              {products?.slice(0, 2).map((product, index) => (
                <div className="mosutPopular__box" key={index}>
                  <img src={product.img} alt="image" />
                  <p>{product.name}</p>
                </div>
              ))}
            </div>
          </details>
        </div>
      </div>
      <div className="shopPage__overlay" onClick={handleCloseFilter}></div>
      {/* STYLE: --------- END filter */}
      <Header header={["home", "/", "Shop"]} />
      <div className="container">
        <section className="shop">
          {products ? (
            products.map((product, index) => (
              <div className="shop__box" key={index}>
                <div className="shop__box-imgBox">
                  <LazyLoadImage
                    src={product.img}
                    placeholderSrc={placeHolderImg}
                    effect="blur"
                    alt="product image"
                    className="productImg"
                  />
                </div>
                <h5 className="shop__box-name">{product.name}</h5>
                <p className="shop__box-price">{product.price}$</p>
                <div className="shop__box-options">
                  <button className="btn primaryBtn">Buy</button>
                  <i
                    className={`fa-solid fa-cart-shopping ${
                      cart.indexOf(product._id) == -1 ? "inCart" : ""
                    }`}
                    onClick={() => handleAddToCart(product._id!)}
                  ></i>
                </div>
              </div>
            ))
          ) : (
            <div className="shopLoading">
              <img src={bee} alt="loading" />
              <p>Loading</p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
