import React from "react";
import { useHistory } from "react-router-dom";
import { fromLeft, toLeft } from "../utilities/transition";
import bee from "./../assets/loading_bee.png";
type headerType = {
  header: string[];
};

export default function Header(props: headerType) {
  let history = useHistory();
  let handleOnClick = (path: string) => {
    fromLeft(document.querySelector(".pageOverlay"));
    setTimeout(() => {
      switch (path) {
        case "home":
          history.push("/");
          break;
        case "About":
          history.push("/about");
          break;
        case "Blog":
          history.push("/blog");
          break;
        default:
          return null;
      }
    }, 1500);
    setTimeout(() => {
      toLeft(document.querySelector(".pageOverlay"));
    }, 2000);
  };
  return (
    <section className="headerComponent">
      <div className="pageOverlay">
        <img src={bee} alt="bee" />
      </div>
      {props.header.map((str, index) => {
        if (index == props.header.length - 1) {
          return (
            <span
              className="headerComponent__bold"
              onClick={() => {
                handleOnClick(str);
              }}
              key={index}
            >
              {str}
            </span>
          );
        } else
          return (
            <span
              onClick={() => {
                handleOnClick(str);
              }}
              key={index}
            >
              {str}
            </span>
          );
      })}
    </section>
  );
}
