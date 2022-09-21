import React, { useEffect, useState } from "react";
import { getUserById } from "../firebase/users";
import { Redirect, Route } from "react-router-dom";
export default function AdminRoute(props: any) {
  // let [user, setUser] = useState<any>({});
  // useEffect(() => {
  //   getUserById(localStorage.getItem("honey_user")!).then((data) => {
  //     setUser(data);
  //   });
  // }, []);

  return localStorage.getItem("role") == "admin" ? (
    <Route {...props} />
  ) : (
    <Redirect to="/" />
  );
}
