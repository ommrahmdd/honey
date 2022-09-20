import React, { useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import { blogs } from "../blog/blog_utilities";
export default function SignleBlog() {
  let history = useHistory();
  let handleNextBlog = (id: string) => {
    history.push(`/blog/${blogs[1].id}`);
    window.scrollTo(0, 0);
  };
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="singleBlog">
      <Header header={["home", " / ", "Blog", " / ", `${blogs[0].title}`]} />
      <div className="container">
        <div className="singleBlog__content">
          <div className="singleBlog__content-imgBox">
            <img src={blogs[0].img} alt="Blog image" />
          </div>
          <div className="singleBlog__content-title">
            <h3>{blogs[0].title}</h3>
          </div>
          <div className="singleBlog__content-date">
            <span>{blogs[0].date}</span>
          </div>
          <div className="singleBlog__content-overview">
            <p>
              <span>&quot;</span>
              {blogs[0].overview}
            </p>
          </div>
          <div className="singleBlog__content-fullContent">
            <p>{blogs[0].content}</p>
          </div>
        </div>
        <div className="singleBlog__nextBlog">
          <h4>&mdash; Next Blog</h4>
          <div
            className="singleBlog__nextBlog-box"
            onClick={() => {
              handleNextBlog(blogs[1].id);
            }}
          >
            <img src={blogs[1].img} alt="next blog image" />
            <p>{blogs[1].title}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
