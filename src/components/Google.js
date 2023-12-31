import React from "react";
import { auth, provider } from "../fireBase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Google() {
  const [user, setUser] = useState(null);
  const [mail, setMail] = useState(null);
  const [password, setPassword] = useState(null);

  const submitHandled = async () => {
    await createUserWithEmailAndPassword(auth, mail, password);
    setUser(auth?.currentUser?.mail);
    alert("Login Successfull --- ");
  };

  const signGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("Login Successfull --- ");
      setUser(auth?.currentUser?.mail);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithFacebook = async () => {
    const fbprovider = new FacebookAuthProvider();
    // signInWithPopup(auth, fbprovider)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    try {
      await signInWithPopup(auth, fbprovider);
      alert("Login Successfull --- ");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <section class="vh-100" style={{ backgroundColor: "#508bfc" }}>
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                class="card shadow-2-strong"
                style={{ borderRadius: " 1rem" }}
              >
                <div class="card-body p-5 text-center">
                  <h3 class="mb-5">Sign in</h3>

                  <div class="form-outline mb-2">
                    <input
                      type="email"
                      id="typeEmailX-2"
                      class="form-control form-control-lg"
                      onChange={(e) => {
                        setMail(e.target.value);
                      }}
                    />
                    <label class="form-label" for="typeEmailX-2">
                      Email
                    </label>
                  </div>

                  <div class="form-outline mb-2">
                    <input
                      type="password"
                      id="typePasswordX-2"
                      class="form-control form-control-lg"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <label class="form-label" for="typePasswordX-2">
                      Password
                    </label>
                  </div>

                  <div class="form-check d-flex justify-content-start mb-2">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="form1Example3"
                    />
                    <label class="form-check-label" for="form1Example3">
                      {" "}
                      Remember password{" "}
                    </label>
                  </div>

                  <button
                    class="btn btn-primary btn-lg btn-block"
                    type="submit"
                    onClick={submitHandled}
                  >
                    Login
                  </button>

                  <hr class="my -1 " />

                  <button
                    class="btn btn-lg btn-block btn-primary "
                    style={{ backgroundColor: " #dd4b39" }}
                    type="submit"
                    onClick={signGoogle}
                  >
                    <i class="fab fa-google me-2"></i> Sign in with google
                  </button>

                  <button
                    class="btn btn-lg btn-block btn-primary my-2"
                    style={{ backgroundColor: " #3b5998" }}
                    onClick={signInWithFacebook}
                    type="submit"
                  >
                    <i class="fab fa-facebook-f me-2"></i>Sign in with facebook
                  </button>
                </div>
                {user === null ? null : (
                  <button type="button" class="btn btn-success">
                    <Link to={"/home"}> Go to Posts </Link>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
