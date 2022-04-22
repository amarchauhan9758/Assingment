import React from "react";



function Notes() {
  return (
    <div className="w-1/4 mx-2 mt-8 rounded-lg shadow h-28">
      <div className=" shadow-md bg-white   mb-5">
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
         
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold mb-5 ml-52 text-xs px-3 duration-500 rounded py-2">Save Notes</button>
        
        
        </div>

         <div className="bg-white p-4 mb-5 rounded ">
         <p className=" font-semibold text-sm">Lorem Ipsum dolar sit amet</p>
         <div className="text-xs text-gray-400 font-semibold justify-between flex">
         <p className="">Dr. Peter</p>
         <span>24-Nov-22</span>
         </div>
         </div>
        <div className="bg-white shadow-md p-12">

        <h1>File/Documents</h1>
        
        <p>
         Check UP result.pdf
        </p>
        <p>
         Dental X-ray Result.pdf
        </p>
        <p>
         Medical precriptions.pdf
        </p>
        <p>
         Dental X-ray Result.pdf
        </p>
        <p>
         Check the result
        </p>
        </div>

        
    </div>
  );
}

export default Notes;
