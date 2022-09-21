import React from "react";
import bee from "./../../assets/loading_bee.png";
export default function Loading() {
  return (
    <div className="loading">
      <h3>
        L<img src={bee} alt="bee" />
        ading
      </h3>
    </div>
  );
}
