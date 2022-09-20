import React from "react";
import Header from "../../components/Header";
import { blogs } from "./blog_utilities";
export default function Blog() {
  return (
    <div className="blog">
      <Header header={["home", " / ", "Blog"]} />
      <div className="container">
        <div className="blog__content">
          {/* STYLE: box */}
          {blogs.map((blog, index) => (
            <div className="blog__content-box" key={index}>
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
