import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [post, setPost] = useState([]);

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
    <div>
      <div className="Home ">
        <div className="container">
          <table class="table">
            <thead>
              <tr>
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
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        {obj.topic}
                      </a>
                    </td>

                    <td>{obj.description}</td>
                    <td>{obj.postCategory}</td>
                    <td>
                      <a
                        className="btn btn-warning me-3"
                        href={`/edit/${obj._id}`}
                      >
                        <i className="fas fa-edit"></i> &nbsp; Edit
                      </a>

                      <a
                        className="btn btn-danger mt-1"
                        href="#"
                        onClick={() => {
                          onDeleteHandle(obj._id);
                        }}
                      >
                        <i className="far fa-trash-alt"></i> &nbsp;Delete
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <button className="btn btn-success">
            <a href="/add" style={{ textDecoration: "none", color: "white" }}>
              {" "}
              Create New Post{" "}
            </a>
          </button>
          {/* <button className='btn btn-success'><Link to={'/add'} style={{textDecoration: 'none' , color:'white'} } > Create New Post  </Link></button> */}
        </div>
      </div>
    </div>
  );
}
