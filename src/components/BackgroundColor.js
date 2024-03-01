import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColor, changeText } from "../utils/slice/userColorSlice";

const BackgroundColor = () => {
  const dispatch = useDispatch();
  const { setText, setColor } = useSelector(
    (store) => store?.userSelectedColor
  );
  const handleSelect = (e) => {
    // console.log(e.target.value, "value")
    dispatch(changeText(e.target.value));
  };
  const handleSelectColor = (e) => {
    dispatch(changeColor(e.target.value));
  };
  return (
    <div className="text-center mt-12">
      {setText && (
        <h1
          className={`font-extrabold mb-12 w-48 mx-auto py-2 ${setColor}`}
        >
          {setText}
        </h1>
      )}
      <select
        className="border border-b-amber-50 cursor-pointer px-4 py-2"
        onChange={handleSelect}
      >
        <option value="Option 1"> Option 1</option>
        <option value=" Option 2"> Option 2</option>
        <option value=" Option 3"> Option 3</option>
        <option value=" Option 4"> Option 4</option>
        <option value=" Option 5"> Option 5</option>
        <option value=" Option 6"> Option 6</option>
        <option value=" Option 7"> Option 7</option>
      </select>
      <h2 className="font-semibold mt-24 mb-4">
        Edit BackgroundColor In Knockout Screen
      </h2>
      <select
        className="border border-b-amber-50 cursor-pointer px-4 py-2"
        onChange={handleSelectColor}
      >
        <option value="bg-sky-400" className="bg-sky-400">
          {" "}
          bg-sky-400
        </option>
        <option value="bg-purple-400" className="bg-purple-400">
          {" "}
          bg-purple-400
        </option>
        <option value="bg-pink-400" className="bg-pink-400">
          {" "}
          bg-pink-400
        </option>
        <option value="bg-rose-400" className="bg-rose-400">
          {" "}
          bg-rose-400
        </option>
        <option value="bg-teal-100" className="bg-teal-100">
          {" "}
          bg-teal-100{" "}
        </option>
        <option value="bg-yellow-300" className="bg-yellow-300">
          bg-yellow-300{" "}
        </option>
        <option value="bg-gray-300" className="bg-gray-300">
          {" "}
          bg-gray-300
        </option>
      </select>
    </div>
  );
};

export default BackgroundColor;
