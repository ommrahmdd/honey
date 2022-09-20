import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./App.scss";
import Footer from "./components/footer/Footer";
const Home = lazy(() => import("./pages/home/Home"));
const About = lazy(() => import("./pages/about/About"));
const Blog = lazy(() => import("./pages/blog/Blog"));
function App() {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/blog" exact component={Blog} />
          <Route path="/about" exact component={About} />
          <Route path="/" exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </Suspense>
  );
}

export default App;
