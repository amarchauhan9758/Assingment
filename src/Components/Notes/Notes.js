import React, { useState, useEffect } from "react";
import axios from "axios";

function Notes() {
  const [post, setsate] = useState([]);

  useEffect(() => {
    axios
      .get("https://619f39821ac52a0017ba467e.mockapi.io/Files")
      .then((reponse) => {
        console.log(reponse);
        setsate(reponse.data.slice(1, 3));
      });
  }, []);

  return (
    <div className="lg:w-1/4    shadow lg:h-28">
      <div className=" shadow-md bg-white rounded-tr-2xl  mb-5">
        <h3 className="text-lg font-semibold p-3">Notes</h3>
        <div className="bg-gray-300 text-sm p-5 m-2 text-left ">
          <p>
            <span> - </span>
            Lorem Ipsum has been the industry's standard dummy.
          </p>

          <p>
            <span> - </span>
            It has survived not only.
          </p>
          <p>
            <span> - </span>
            when an unknown printer took a galley of type.
          </p>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold mb-5 ml-44 text-xs px-3 duration-500 rounded py-2">
          Save Notes
        </button>
      </div>

      <div className="bg-white p-4 mb-5 rounded ">
        <p className=" font-semibold ">Lorem Ipsum dolar sit amet</p>
        <div className="text-xs text-gray-400 font-semibold justify-between flex">
          <p className="">Dr. Peter</p>
          <span>24-Nov-22</span>
        </div>
      </div>

      {post.map((element, index) => {
        return (
          <div key={index} className="bg-white shadow-md py-8 my-3  ml-4 items-center border-2 rounded  ">
          <img className="w-24 h-24 mx-auto mb-5 rounded-full" src={'https://media.istockphoto.com/photos/head-shot-portrait-of-smiling-businesswoman-intern-looking-at-camera-picture-id1329936184'} alt="avatar" />
          <div className="bg-slate-200 rounded p-5 text-center mx-3 text-gray-700 font-semibold hover:text-blue-800">
          
          <h1>{element.name}</h1>
          <p className="text-gray-600">{element.createdAt}</p>
          </div>
            </div>
        );
      })}
    </div>
  );
}

export default Notes;
