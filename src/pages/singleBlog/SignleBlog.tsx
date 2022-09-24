import React, { Dispatch, useEffect, useLayoutEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/Header";
import { blogs } from "../blog/blog_utilities";
import { getBlogsActionAsync } from "./../../store/actions";

export default function SignleBlog() {
  let history = useHistory();
  let { blogID }: { blogID: string } = useParams();
  let dispatch: Dispatch<any> = useDispatch();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // HANDLE: current blog
  let blog = useSelector((state: any) => {
    if (state.blogs.blogs.length == 0) {
      console.log("yes");
      dispatch(getBlogsActionAsync());
    }
    return state.blogs.blogs.filter(
      (blog: any, index: number) => blog._id == blogID
    )[0];
  });
  // HANDLE: next blog
  let nextBlog = useSelector((state: any) => {
    let currentIndex = state.blogs.blogs.findIndex(
      (blog: any) => blog._id == blogID
    );
    if (currentIndex == state.blogs.blogs.length - 1) {
      return state.blogs.blogs[0];
    }
    return state.blogs.blogs[currentIndex + 1];
  });
  // HANDLE: transition next blog
  let handleNextBlog = (id: string) => {
    history.push(`/blog/${id}`);
    window.scrollTo(0, 0);
  };
  return (
    <div className="singleBlog">
      {blog && (
        <Header header={["home", " / ", "Blog", " / ", `${blog.title}`]} />
      )}

      <div className="container">
        {blog && (
          <div className="singleBlog__content">
            <div className="singleBlog__content-imgBox">
              <img src={blog.img} alt="Blog image" />
            </div>
            <div className="singleBlog__content-title">
              <h3>{blog.title}</h3>
            </div>
            <div className="singleBlog__content-date">
              <span>{blog.date}</span>
            </div>
            <div className="singleBlog__content-overview">
              <p>
                <span>&quot;</span>
                {blog.overview}
              </p>
            </div>
            <div className="singleBlog__content-fullContent">
              <p>{blog.content}</p>
            </div>
          </div>
        )}

        {nextBlog && (
          <div className="singleBlog__nextBlog">
            <h4>&mdash; Next Blog</h4>
            <div
              className="singleBlog__nextBlog-box"
              onClick={() => {
                handleNextBlog(nextBlog._id);
              }}
            >
              <img src={nextBlog.img} alt="next blog image" />
              <p>{nextBlog.title}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
