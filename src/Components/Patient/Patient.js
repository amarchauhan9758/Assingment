
import React, { Component } from "react";





export class Patient extends Component {
  
  
  render() {
    
    let { name, Gender, Birthday, Upcoming, Past, Add, Mobo, Register ,Zip,Member } = this.props ;
             
   
    return (
      <div className="lg:p-12  rounded-sm">
        <div className="lg:flex gap-2 shadow-lg">
          <div className=" lg:w-1/3  border-2  text-center bg-gray-100   lg:p-5 rounded  ">
            <div>
              <img
                className="lg:w-24 lg:h-24  w-28 h-28 mb-5 mx-auto p-5 rounded-full "
                src="https://cdn.pixabay.com/photo/2020/03/15/08/14/girl-4932839_960_720.jpg"
                alt="patient "
              />
              <h1 className="text-lg font-semibold">{name}</h1>
              <p className="text-gray-400 text-sm font-semibold">Areia@gmail.com</p>
            </div>

            <div className="lg:flex my-5 items-center  gap-5 ">
              <div className=" p-5  cursor-pointer ">
                <h1 className="lg:text-xl hover:font-bold  font-semibold">{Past}</h1>
                <p className="text-gray-400 font-semibold">Past </p>
              </div> 
              <div className="p-5 cursor-pointer ">
                <h1 className="lg:text-xl  font-semibold">{Upcoming}</h1>
                <p className="text-gray-400 font-semibold"> Upcoming </p>
              </div>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-3 lg:w-full  p-12 bg-gray-100 border  md:space-y-10 shadow-lg  lg:space-x-5 border-b-4">
            <div className=" my-2 text-center ">
              <h3 className="text-sm font-semibold leading-loose ">Gender</h3>
              <p className="text-gray-500 font-xs leading-loose   ">{Gender}</p>
            </div>
            <div className="my-2 text-center">
              <h3>Birthday</h3>
              <p className="text-gray-500 font-xs leading-loose">
              {Birthday}
              </p>
            </div>
            <div className=" my-2 text-center">
              <h3>Phone Number</h3>
              <p className="text-gray-500 font-xs leading-loose">{Mobo}</p>
            </div>
            <div className="my-2 text-center">
              <h3>Street Address</h3>
              <p className="text-gray-500 font-xs leading-loose">
              {Add}
              </p>
            </div>
            <div className=" my-2 text-center">
              <h3>City</h3>
              <p className="text-gray-500 font-xs leading-loose">Indore</p>
            </div>
            <div className=" my-2 text-center">
              <h3>ZipeCode</h3>
              <p className="text-gray-500 font-xs">{Zip}</p>
            </div>
            <div className=" my-2 text-center">
              <h3>Member status</h3>
              <p className="text-gray-500 font-xs">{Member}</p>
            </div>
            <div className=" my-2 text-center">
              <h3>Register Date</h3>
              <p className="text-gray-500 font-xs">{Register}</p>
            </div>
          </div>
        </div>
        </div>


       
     
     
    );
  }
}
export default Patient;
