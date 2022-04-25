import React, { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../Sidebar/Sidebar";

function Doctordetails() {
  const [post, setstate] = useState([]);

  useEffect(() => {
    axios
      .get("https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails")
      .then((response) => {
        console.log(response.data);
        setstate(response.data.slice(0,1));
      });
  }, []);

  return (
    <div>
      {post.map((element, index) => {
        return (
          <div key={index}>
            <Sidebar
            
            doctor={element.name}
            specification={element.specification}
            />
        
          </div>
        );
      })}
    </div>
  );
}

export default Doctordetails;
