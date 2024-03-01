import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../utils/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/slice/userSlice";
import { setSearchButton } from "../utils/slice/searchButtonSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants/constants";
import { changeLanguage } from "../utils/slice/languageSlice";

const Header = () => {
  const userDetails = useSelector((store) => store.userData);
  const userSelectLanguages = useSelector((store) => store.languagesList.languages);
  // console.log(userSelectLanguages, "userSelectLanguages")

  const searchText = useSelector(
    (store) => store.searchButtonValue?.searchTextChange
  );
  // const [gptSearchView, setGptSearchView] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  const handleSearch = () => {
    // setGptSearchView(!gptSearchView);
    dispatch(setSearchButton());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
    // console.log(, "target")
  }

  useEffect(() => {
    // after successful sign in or sign up update profile details in store
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10">
      <div className="flex justify-between items-center">
        <Link to={"/"}>
          <img
            className="w-44 cursor-pointer"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"
          />
        </Link>
        {userDetails && (
          <div className="flex">
            <select name="" id="" className="m-3 bg-gray-900 text-white p-2" onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => ( 
                <option key ={lang.identifier} value={lang.identifier}>{lang.name}</option>
              ))}
            </select>
            <button
              className="bg-teal-200 bg-gradient-to-l from-slate-400 px-4 py-2 mr-20 rounded-xl"
              onClick={handleSearch}
            >
              {searchText ? "Home Page" : "GPT Search"}
            </button>
            <Link to="/background">
            <h1 className="text-white font-extrabold">Background Page</h1>
            </Link>
            <img
              className="w-12 h-12 rounded-3xl"
              src={userDetails.photoURL}
              alt="user-img"
            />
            {/* <h1>{userDetails.displayName}</h1> */}
            <button
              className="border h-12 px-3 rounded-lg text-white"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
