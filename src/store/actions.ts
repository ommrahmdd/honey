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
