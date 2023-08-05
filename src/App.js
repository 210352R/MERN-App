import React from "react";
import Home from "./components/Home";
import CreatePost from "./components/createPost";
import EditPost from "./components/editPost";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PostDetails from "./components/PostDetails";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <div className="container App">
      <Navbar />
      <div className=" mt-3">
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<CreatePost />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/post/:id" element={<PostDetails />} />
          </Routes>
        </div>
      </div>
      </div>
    </Router>
  );
}
