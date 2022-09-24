let BLOG_INITIALSTATE = {
  blogs: [],
};
let CART_INITIALSTATE = {
  cart: [],
};
export let blogReducer = (state = BLOG_INITIALSTATE, action: any) => {
  switch (action.type) {
    case "GET_BLOGS":
      return {
        blogs: [...action.payload],
      };
    default:
      return state;
  }
};

export let cartReducer = (
  state = CART_INITIALSTATE,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_FROM_CART":
      let updatedState = state.cart.filter(
        (productID) => productID != action.payload
      );
      return {
        cart: updatedState,
      };
    default:
      return state;
  }
};
