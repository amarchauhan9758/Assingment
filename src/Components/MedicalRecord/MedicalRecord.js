import React,{useEffect,useState} from 'react'
import axios from 'axios';

function MedicalRecord() {

  
 const [post,setstate]= useState([]);
 useEffect(()=>{
         axios.get('https://619f39821ac52a0017ba467e.mockapi.io/appointment_details')
         .then(response=>{
          console.log(response)
          setstate(response.data.slice(0,1))
         })
 },[])


  return (
    <div className='text-center mr-3'>

    
    <div className=" h-1/2  mx-auto w-2/3 p-12">


    <div className="flex flex-col shadow-xl">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                 
                 
                  
                </tr>
              </thead>

              {
                post.map((element,index)=>{
                  return(
                    
                    
                    <tbody key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{element["Medical Records"].status}</td>
                   
                    </tbody>
                  )
                })
              }
             
            </table>
          </div>
        </div>
      </div>
    </div>
  
        

        </div>
      
    </div>
  )
}

export default MedicalRecord;
