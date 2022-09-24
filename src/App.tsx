import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.scss";
import Footer from "./components/footer/Footer";
import Loading from "./components/loading/Loading";
import AdminRoute from "./components/AdminRoute";
const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Blog = lazy(() => import("./pages/blog/Blog"));
const SingleBlog = lazy(() => import("./pages/singleBlog/SignleBlog"));
const Login = lazy(() => import("./pages/login/Login"));
const Signup = lazy(() => import("./pages/signup/Signup"));
const addBlog = lazy(() => import("./pages/addBlog/AddBlog"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const AddProduct = lazy(() => import("./pages/addProduct/AddProduct"));
const Shop = lazy(() => import("./pages/shop/Shop"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Navbar />
        <Switch>
          <AdminRoute path="/addBlog" exact component={addBlog} />
          <Route path="/addProduct" exact component={AddProduct} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/:blogID" exact component={SingleBlog} />
          <Route path="/about" exact component={About} />
          <Route path="/login" exact component={Login} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
