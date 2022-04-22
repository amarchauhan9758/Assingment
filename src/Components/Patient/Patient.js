
import React, { Component } from "react";


export class Patient extends Component {
  
  
  render() {
    
    let { name, Gender, Birthday, Upcoming, Past } = this.props ;
             
   
    return (
      <div className="p-12  rounded-sm">
        <div className="flex gap-2 shadow-lg">
          <div className=" border-2 shadow text-center p-16 bg-white rounded  ">
            <div>
              <img
                className="w-24 h-24 mb-5   rounded-full "
                src="https://cdn.pixabay.com/photo/2020/03/15/08/14/girl-4932839_960_720.jpg"
                alt="patient "
              />
              <h1 className="text-2xl font-semibold">{name}</h1>
              <p className="text-gray-400 font-semibold">Areia@gmail.com</p>
            </div>

            <div className="flex mx-20 my-5 items-center shadow justify-between gap-5 ">
              <div className=" p-5  cursor-pointer ">
                <h1 className="text-xl hover:font-bold  font-semibold">Post</h1>
                <p className="text-gray-400 font-semibold">{Past} </p>
              </div>
              <div>
                <h1 className="text-xl  font-semibold">{Upcoming}</h1>
                <p className="text-gray-400 font-semibold"> Upcoming </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 w-full shadow p-12 bg-white border space-x-5 border-b-4">
            <div className="shadow my-2 text-center ">
              <h3 className="text-sm font-semibold leading-loose ">Gender</h3>
              <p className="text-gray-500 font-xs leading-loose   ">{Gender}</p>
            </div>
            <div className="shadow my-2 text-center">
              <h3>Birthday</h3>
              <p className="text-gray-400 font-xs leading-loose">
              {Birthday}
              </p>
            </div>
            <div className="shadow my-2 text-center">
              <h3>Phone Number</h3>
              <p className="text-gray-400 font-xs leading-loose">97825412</p>
            </div>
            <div className="shadow my-2 text-center">
              <h3>Street Address</h3>
              <p className="text-gray-400 font-xs leading-loose">
                Near st.paul School
              </p>
            </div>
            <div className="shadow my-2 text-center">
              <h3>City</h3>
              <p className="text-gray-400 font-xs leading-loose">Indore</p>
            </div>
            <div className="shadow my-2 text-center">
              <h3>ZipeCode</h3>
              <p className="text-gray-300 font-xs">78547</p>
            </div>
            <div className="shadow my-5 text-center">
              <h3>Member status</h3>
              <p className="text-gray-300 font-xs">Single</p>
            </div>
            <div className=" my-5 text-center">
              <h3>Register Date</h3>
              <p className="text-gray-300 font-xs">24-Nov-22</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Patient;
