let BLOG_INITIALSTATE = {
  blogs: [],
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
