import React from "react";
import { useHistory } from "react-router-dom";
type headerType = {
  header: string[];
};

export default function Header(props: headerType) {
  let history = useHistory();
  let handleOnClick = (path: string) => {
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
  };
  return (
    <section className="headerComponent">
      {props.header.map((str, index) => {
        if (index == props.header.length - 1) {
          return (
            <span
              className="headerComponent__bold"
              onClick={() => {
                handleOnClick(str);
              }}
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
            >
              {str}
            </span>
          );
      })}
    </section>
  );
}
