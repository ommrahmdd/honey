import { getBlogs } from "../firebase/blog";

export let getBlogsAction = (payload: any) => {
  return {
    type: "GET_BLOGS",
    payload,
  };
};

export let getBlogsActionAsync = () => {
  return (dispatch: any) => {
    return getBlogs().then((data) => dispatch(getBlogsAction(data)));
  };
};

export let addToCart = (productID: string) => {
  return {
    type: "ADD_TO_CART",
    payload: productID,
  };
};

export let removeFromCart = (productID: string) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: productID,
  };
};
