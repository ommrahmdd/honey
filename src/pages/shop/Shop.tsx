import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./../../store/actions";
import Header from "../../components/Header";
import { IProduct } from "../../models/IProduct";
import { getAllProducts } from "./../../firebase/products";

export default function Shop() {
  let [products, setProducts] = useState<IProduct[] | null>();
  let dispatch = useDispatch();
  useEffect(() => {
    getAllProducts().then((data) => {
      setProducts(data);
    });
  }, []);
  let cart = useSelector((state: any) => state.cart.cart);
  let handleAddToCart = (id: string) => {
    if (cart.indexOf(id) == -1) dispatch(addToCart(id));
    else {
      dispatch(removeFromCart(id));
    }
  };
  console.log(cart);
  return (
    <main className="shopPage">
      <Header header={["home", "/", "Shop"]} />
      <div className="container">
        <section className="shop">
          {products
            ? products.map((product, index) => (
                <div className="shop__box" key={index}>
                  <div className="shop__box-imgBox">
                    <img src={product.img} alt="product image" />
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
            : ""}
        </section>
      </div>
    </main>
  );
}