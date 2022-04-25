
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Appointment from "../Appointment/Appointment";




export class Patient extends Component {
  
  
  render() {
    
    let { name, Gender, Birthday, Upcoming, Past, Add, Mobo, Register ,Zip,Member } = this.props ;
             
   
    return (
      <div className="p-12  rounded-sm">
        <div className="flex gap-2 shadow-lg">
          <div className=" w-1/3  border-2  text-center bg-gray-100  p-5 rounded  ">
            <div>
              <img
                className="w-24 h-24 mb-5 mx-auto p-5 rounded-full "
                src="https://cdn.pixabay.com/photo/2020/03/15/08/14/girl-4932839_960_720.jpg"
                alt="patient "
              />
              <h1 className="text-lg font-semibold">{name}</h1>
              <p className="text-gray-400 text-sm font-semibold">Areia@gmail.com</p>
            </div>

            <div className="flex my-5 items-center  gap-5 ">
              <div className=" p-5  cursor-pointer ">
                <h1 className="text-xl hover:font-bold  font-semibold">{Past}</h1>
                <p className="text-gray-400 font-semibold">Past </p>
              </div> 
              <div className="p-5 cursor-pointer ">
                <h1 className="text-xl  font-semibold">{Upcoming}</h1>
                <p className="text-gray-400 font-semibold"> Upcoming </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 w-full  p-12 bg-gray-100 border space-x-5 border-b-4">
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


        <Link to='/produce' element={<Appointment/>} >   </Link> 
     
     
      </div>
    );
  }
}
export default Patient;
