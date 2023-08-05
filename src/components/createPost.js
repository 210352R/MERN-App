import React from "react";
import { useState ,useEffect} from "react";
import axios from 'axios';

export default function CreatePost(props) {

  const [values , setValues] = useState({
    topic :'',
    description : '',
    postCategory : ''
  })

  const onChangeHandler = (e)=>{
    const {name,value} = e.target;
    setValues({
      ...values,
      [name] : value
    })
  }


  const onClickHandle = (e)=>{
    e.preventDefault();
    console.log(values);

    // call backend Server --- 
    // request body eka yawanne hati balanna
    axios.post("http://localhost:8000/post/save",values)  // menna methana thmai yanna one body eka yawanne balanna meka
    .then((res)=>{
        if(res.data.success){
          setValues({
            ...values,
            topic : '',
            description : '',
            postCategory : ''
          })
        }
    }).catch(()=>{
      console.log("Error ---------")
    })
  }





  return (
    <>
      <div className="container justify-content-center">
        <div className="text-align-center">
          <h2 className="h2 font-weight-bold  text-center shadow p-3 rounded">
            {" "}
            Create new post{" "}
          </h2>
        </div>
        <div className="d-flex justify-content-center bg-light p-3">
          <div className="w-50 mt-3">
            <form>
              <div class="form-group">
                <label for="formGroupExampleInput">Topic</label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupTopic"
                  name = 'topic'
                  value={values.topic}
                  onChange={onChangeHandler}
                  placeholder="Enter Topic "
                />
              </div>
              <div class="form-group mt-3">
                <label for="formGroupDescription">Description</label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupDescription"
                  name="description"
                  value={values.description}
                  onChange={onChangeHandler}
                  placeholder="Enter Description"
                />
              </div>

              <div class="form-group mt-3">
                <label for="formGroupPostCategory">Post Category</label>
                <input
                  type="text"
                  class="form-control"
                  id="formGroupPostCategory"
                  name="postCategory"
                  value={values.postCategory}
                  onChange={onChangeHandler}
                  placeholder="Enter Post Category"
                />
              </div>
              <button type="submit" class="btn btn-primary px-3 mt-4 ms-3" style={{fontSize:18}}
              onClick={onClickHandle}>
              <i class="fa-regular fa-bookmark"></i> &nbsp;Save
              </button>
            </form>
          </div>
        </div>
        
      </div>
    </>
  );
}
