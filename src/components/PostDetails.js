import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { backEndURL } from "./BackEndURL";

export default function PostDetails() {
  // Use the useParams hook to access the 'id' URL parameter
  const { id } = useParams();

  // create use effect for store post details  ---
  const [post, setPost] = useState({});
  console.log(id);
  useEffect(() => {
    axios
      .get(backEndURL(`/post/${id}`)) // backend eke find eke url type eke request ekak yawanawa --
      .then((res) => {
        if (res.data.success) {
          setPost(res.data.existingPost);
        } else {
          console.log("Error -- 1");
        }
      })
      .catch(() => {
        console.log("Error -- 2 ");
      });
  }, []);
  const { topic, description, postCategory } = post;
  return (
    <div>
      <div class="card container">
        <div class="card-header">Post Details </div>
        <div class="card-body">
          <h3 class="card-title">{topic}</h3>
          <hr />
          <div className="row">
            <div className="col-sm-3 ">
              {" "}
              <b>Description </b>{" "}
            </div>
            <div className="col-sm-9 ">{description}</div>

            <div className="col-sm-3 ">
              <b>Post Catagory </b>
            </div>
            <div className="col-sm-9">{postCategory}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
