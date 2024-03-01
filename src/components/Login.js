import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/slice/userSlice";

// import { addUser } from "../utils/slice/userSlice";
// import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const emailValue = useRef(null);
  const passwordValue = useRef(null);
  const nameValue = useRef(null);
  const dispatch = useDispatch();

  //   const dispatch = useDispatch();
  //   const userDetails = useSelector((store)=> store.userData)
  //   console.log(userDetails, "userDetails")

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
    if (errorMessage) {
      setErrorMessage(null);
    }
  };
  const handleSubmit = () => {
    const message = checkValidateData(
      emailValue?.current?.value,
      passwordValue?.current?.value,
      nameValue?.current?.value
    );
    setErrorMessage(message);
    if(message) return;
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        emailValue?.current?.value,
        passwordValue?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // as soon user sign up i am updating the profile details with name and photo URL
          updateProfile(user, {
            displayName: nameValue?.current?.value,
            photoURL: "https://avatars.githubusercontent.com/u/98606339?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            //   navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
            });

          //   dispatch(addUser(user))
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailValue?.current?.value,
        passwordValue?.current?.value
      )
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
        //   navigate("/browse");

          // console.log(user);
          //   dispatch(addUser(user))

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode || errorMessage) {
            setErrorMessage(errorCode + "-" + errorMessage);
          }
        });
    }
  };
  return (
    <div>
      <Header />
      <img
        className="absolute h-full lg:h-auto"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="netflix-bg-img"
      />
      <form
        className="absolute md:w-3/12 p-12 mx-auto my-40 right-0 left-0 text-white bg-black opacity-85 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl mb-8">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="name"
            className="p-2 my-4 w-full bg-gray-500"
            ref={nameValue}
          />
        )}
        <input
          type="text"
          placeholder="email"
          className="p-2 my-4 w-full bg-gray-500"
          ref={emailValue}
        />
        <input
          type="password"
          placeholder="password"
          className="p-2 my-4 w-full bg-gray-500"
          ref={passwordValue}
        />
        <p className="font-medium, text-red-600">{errorMessage}</p>
        <button
          type="submit"
          className="p-3 my-8 bg-red-600 w-full rounded-lg"
          onClick={handleSubmit}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
