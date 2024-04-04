import React, { useState} from "react";
import "../Styles/BloodDonationForm.css";
import Navbar from "./Navbar copy 2";
import { ToastContainer} from "react-toastify";
import Axios from "axios";
function Jztworkers4(){
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");

  const [status, setstatus] = useState("");



  const [address, setaddress] = useState("");

  const [city, setcity] = useState("")


  const [addjztStatus, setaddjztStatus] = useState("");

  const addjzt = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/addjzt", {
      name: name,
      city: city,
      address: address,
      phone: phone,
      status:status,
    
      /*
      monthlyIncome: monthlyIncome,
      medicalConditions: medicalConditions,*/
      
    }).then((response) => {
      // setaddjztStatus(response);
      // console.log(response);
      if(response.data.message){
        setaddjztStatus(response.data.message);
      }else{
        setaddjztStatus("Data send SUCCESSFULLY");
      }
    })
  }

  return (
    <><div className="home-section">
      <Navbar />

    </div><div className="appointment-form-section">
   
          
       

        <div className="form-container">
          <h2 className="form-title">
            <span>Jzt Workers Data Insertion Form</span>
          </h2>

          <form className="form-content"  onSubmit={addjzt}>
 
            <label>
             Full Name:
              <input
                type="text"
                name="Name"
                onChange={(e) => {setname(e.target.value)}} placeholder="Enter  Name" required />
          
            </label>

            <br />
            <label>
        City:
        <input
          type="text"
          name="city"
          onChange={(e) => {setcity(e.target.value)}}
          placeholder="Enter  city"
          required
        />
      </label>
            <br></br>
            <label>
        Address:
        <input
          type="text"
          name="address"
          onChange={(e) => {setaddress(e.target.value)}}
          placeholder="Enter address"
          required
        />
      </label>
      <br />
            <label>
              Phone phone:
              <input
                 type="text" name="phone" onChange={(e) => {setphone(e.target.value)}} placeholder="Enter Phone Number" required/>
            </label>
  
      
      <br />
      <label>
        Status:
        <input
          type="text"
          name="status"
          onChange={(e) => {setstatus(e.target.value)}}
          placeholder="Enter Status"
          required
        />
      </label>
      <br />
      
      


            <button type="submit" className="text-appointment-btn" onClick={addjzt} >
              Confirm
            </button>
            <h3 >{addjztStatus}</h3>

          </form>
        </div>

        <div className="legal-footer">
          <p>© 2013-2025 Thali-Care+. All rights reserved to TA Services and JZT.</p>
        </div>

        <ToastContainer autoClose={5000} limit={1} closeButton={false} />
      </div></>
  );
}

export default Jztworkers4;
