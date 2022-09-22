import React, { Dispatch, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import { blogs } from "./blog_utilities";
import { fadeIn } from "../../utilities/transition";
import { getBlogs } from "../../firebase/blog";
import { getBlogsActionAsync } from "./../../store/actions";

export default function Blog() {
  let history = useHistory();
  let dispatch: Dispatch<any> = useDispatch();
  let blogState = useSelector((state: any) => state.blogs.blogs);
  useEffect(() => {
    dispatch(getBlogsActionAsync());
    // ----- Animation
    setTimeout(() => {
      fadeIn(document.querySelector(".blog"));
    }, 1200);
  }, []);
  return (
    <div className="blog">
      <Header header={["home", " / ", "Blog"]} />
      <div className="container">
        <div className="blog__content">
          {/* STYLE: box */}
          {blogState &&
            blogState.map((blog: any, index: any) => (
              <div
                className="blog__content-box"
                key={index}
                onClick={() => history.push(`/blog/${blog._id}`)}
              >
                <div className="box__left">
                  <img src={blog.img} alt="Blog image" />
                </div>
                <div className="box__right">
                  <span className="date">{blog.date}</span>
                  <h5>{blog.title}</h5>
                  <p>{blog.overview}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
