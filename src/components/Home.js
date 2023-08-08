import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/home.css";
import myBG from "./myBG.mp4";
import Typewriter from "typewriter-effect";
import Animation from "./Animation";

export default function Home() {
  const [post, setPost] = useState([]);

  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch((error) => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);

  useEffect(() => {
    // axios json file convert  karanwa  -----
    // emanisa ena response eka kelinma gann puluwn ----
    axios
      .get("http://localhost:8000/posts")
      .then((res) => {
        if (res.data.success) {
          setPost(res.data.existingPost);
        }
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  }, []);

  //------------------

  const retrivePosts = () => {
    axios
      .get("http://localhost:8000/posts")
      .then((res) => {
        if (res.data.success) {
          setPost(res.data.existingPost);
        }
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  };

  //Delete item method ---
  // Hamawelawema axios call kalama return wenne promise ekak -- (JS async process ekak)
  const onDeleteHandle = (id) => {
    axios
      .delete(`http://localhost:8000/post/delete/${id}`)
      .then((res) => {
        if (res.data.success) {
          alert("Delete Successfully --- ");
          retrivePosts();
        }
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  };

  return (
    <div className="All">
      <video ref={videoRef} width="400" className="mmv" loop>
        <source src={myBG} type="video/mp4" />
        {/* You can provide additional <source> elements for other video formats */}
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <div className="textFeild">
        <div className="Home ">
          <div className="container">
            <table class="table" style={{ color: "white" }}>
              <thead>
                <tr style={{ color: "dodgerblue" }}>
                  <th scope="col">#</th>
                  <th scope="col">Topic</th>
                  <th scope="col">Description</th>
                  <th scope="col">Post Category</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {post?.map((obj, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>
                        {/* Route wladi dana path eka thamai mewage set karanne */}
                        <a
                          href={`/post/${obj._id}`}
                          style={{ textDecoration: "none", color: "white" }}
                        >
                          {obj.topic}
                        </a>
                      </td>

                      <td>{obj.description}</td>
                      <td>{obj.postCategory}</td>
                      <td>
                        <Link
                          className="btn btn-warning me-3"
                          to={`/edit/${obj._id}`}
                        >
                          <i className="fas fa-edit"></i> &nbsp; Edit
                        </Link>

                        <button
                          className="btn btn-danger mt-1"
                          href="#"
                          onClick={() => {
                            onDeleteHandle(obj._id);
                          }}
                        >
                          <i className="far fa-trash-alt"></i> &nbsp;Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <button className="btn btn-success">
              <Link
                to="/add"
                style={{ textDecoration: "none", color: "white" }}
              >
                {" "}
                Create New Post{" "}
              </Link>
            </button>
            {/* <button className='btn btn-success'><Link to={'/add'} style={{textDecoration: 'none' , color:'white'} } > Create New Post  </Link></button> */}

            <div
              className="typeWriting"
              style={{
                color: "white",
                fontFamily: "sans-serif",
                fontSize: 35,
                margin: 10,
              }}
            >
              <Typewriter
                options={{
                  strings: [
                    "Hello Welcome ! ",
                    "Submit your post soon .",
                    "Update your post again .",
                  ],
                  autoStart: true,
                  delay: 40,
                  loop: true,
                }}
              />
            </div>
            <div style={{ float: "right" }}>
              <Animation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
