import React from "react";
import axios from "axios";

import Notes from "../Notes/Notes";
import Patient from "../Patient/Patient";

import Sidebar from "./../Sidebar/Sidebar";


import { Component } from "react";
import PastAppointment from "../PastAppointment/PastAppointment";
import Appointment from './../Appointment/Appointment';
import { Routes,Route } from "react-router-dom";

import UpcomingAppointment from './../Upcoming/UpcomingAppointment';
import MedicalRecord from "./../MedicalRecord/MedicalRecord";

class Content extends Component {
  articles = [
    
    {
      name: " Cooper",
      email: "",
      Past: 15,
      Upcoming: 2,
      Gender: "Female",
      Birthday: "",
      "Phone Number": '',
      "Street Address": null,
      "ZIP Code": null,
      "Member Status": " ",
      "Register Date": "",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      article: this.articles,
    };
  }
  componentDidMount() {
    axios.get("https://619f39821ac52a0017ba467e.mockapi.io/patientDetails")
      .then((reponse) => {
        const result = reponse.data.slice(0, 1);
        console.log(result);

        this.setState({ article: result });
      });
  }




    
  render() {
   
    return (
      <div className="p-20">
        <div className="border-4 border-black min-h-screen rounded-2xl">
          <div className="flex">
           
          <Sidebar   />

            {this.state.article.map((element) => {
              return (
                <div className="my-10" key={1}>
                  <Patient
                    name={element.name}
                    Birthday={element.Birthday}
                    Gender={element.Gender}
                    Past={element.Past}
                    Upcoming={element.Upcoming}
                    Add={element["Street Address"]}
                    Zip={element["ZIP Code"]}
                    Member={element["Member Status"]}
                    Mobo={element["Phone Number"]}
                    Register={element["Register Date"]}
                  />
                </div>
              );
            })}

            <Notes />
          </div>

          <Routes>
            <Route path='/Appointment' element={<Appointment/>}>
              <Route index element={<UpcomingAppointment/>} />
              <Route path='feature' element={<UpcomingAppointment/>}></Route>
              <Route path='new' element={<PastAppointment/>}></Route>
              <Route path='report' element={<MedicalRecord/>}></Route>
            </Route>
          </Routes>

          
        </div>
      </div>
    );
  }

}



export default Content;
