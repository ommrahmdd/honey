import React, { Dispatch, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../firebase/products";
import { IProduct } from "../../models/IProduct";
import { removeFromCart } from "./../../store/actions";
import empty from "./../../assets/empty.png";
export default function Cart() {
  let cart = useSelector((state: any) => state.cart.cart);
  let [products, setProducts] = useState<IProduct[]>([]);
  let dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    if (cart.length > 0) {
      cart.forEach((myCart: string) => {
        getProduct(myCart).then((data) => {
          setProducts((prevState: any) => {
            return [...prevState, data];
          });
        });
      });
    }
  }, []);
  let handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
    console.log(id);
    // console.log(cart);
  };
  console.log(cart);
  return (
    <div className="cartPage">
      <div className="container">
        {products.length != 0 ? (
          <section className="shop">
            {products.map((product, index) => (
              <div className="shop__box" key={index}>
                <div className="shop__box-imgBox">
                  <img src={product.img} alt="product image" />
                </div>
                <h5 className="shop__box-name">{product.name}</h5>
                <p className="shop__box-price">{product.price}$</p>
                <div className="shop__box-options">
                  <button className="btn primaryBtn">Buy</button>
                  <i
                    className="fa-solid fa-trash"
                    onClick={() => handleRemove(product._id!)}
                  ></i>
                </div>
              </div>
            ))}
          </section>
        ) : (
          <div className="empty">
            <img src={empty} alt="empty" />
            <p>Your Cart Is Empty</p>
          </div>
        )}
      </div>
    </div>
  );
}
