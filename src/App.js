import React from "react";
import Home from "./components/Home";
import CreatePost from "./components/createPost";
import EditPost from "./components/editPost";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import PostDetails from "./components/PostDetails";
import Navbar from "./components/Navbar";
import AddImage from "./components/AddImage";

export default function App() {
  return (
    <Router>
      <div>
        {/* // hama page ekatama enna one ewa methanata danawa -- */}

        <Navbar />
        <div>
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/add" element={<CreatePost />} />
              <Route path="/edit/:id" element={<EditPost />} />
              <Route path="/post/:id" element={<PostDetails />} />
              <Route path="/image" element={<AddImage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
