import React from 'react'
import axios from 'axios';


import Notes from '../Notes/Notes';
import Patient from '../Patient/Patient';


import Sidebar from './../Sidebar/Sidebar';
import ContactWrapper from './../ContactWrapper/ContactWrapper';

import { Component } from 'react';


class Content extends Component{

  articles = [
    
    {
      name: " Cooper",
      "email": "xyz",
      Past: 15,
      Upcoming: 2,
      Gender: "Female",
      Birthday: "Feb 24th, 1997",
      "Phone Number": 111111,
      "Street Address": "JI. Diponegoro No. 21",
      "ZIP Code": 655849,
      "Member Status": "Active Member",
      "Register Date": "Feb 24th, 1997",
    }
  ];
   
     
  
constructor() {
  super();
  this.state ={
    article : this.articles



    
  }
}
componentDidMount() {
  axios.get("https://619f39821ac52a0017ba467e.mockapi.io/patientDetails")
    .then((reponse) => {
      console.log(reponse.data);
       this.setState({ article:reponse.data});
      
    })

//     .catch((error) => {
//       console.log(error);
//     });
 }
render(){

  
  
  
    return (
      <div className='p-20'>
      <div className='border-4 border-black rounded-2xl'>
      <div className=''>
     <Sidebar/>
     {this.state.article.map((element) => {
      return (
        <div className="my-10" key={element.email}>
          <Patient
            name={element.name}
            Birthday={element.Birthday}
            Gender={element.Gender}
            Past={element.Past}
            Upcoming={element.Upcoming}
          />
        </div>
      );
    })}
      
      <Notes/>
     
      </div>
     <ContactWrapper/>
  
      </div>
  
      
      </div>
    )
  }

}



export default Content;
