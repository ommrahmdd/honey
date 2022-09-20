import React from "react";
type headerType = {
  header: string[];
};
export default function Header(props: headerType) {
  return (
    <section className="headerComponent">
      {props.header.map((str, index) => {
        if (index == props.header.length - 1) {
          return <span className="headerComponent__bold">{str}</span>;
        } else return <span>{str}</span>;
      })}
    </section>
  );
}
