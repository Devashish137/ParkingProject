
import './App.css';
import React from "react"
import { useState } from 'react';
import data from "./mock-data.json";
import { nanoid } from "nanoid";


function App() {
 
  const[vehicles , setVehicles] = useState(data);
  const [addFormData, setAddFormData] = useState({
    vehicleno: "",
    drivername: "",
    checkin: "",
    checkout: "",
  });
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };
  
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newVehicle = {
      id: nanoid(),
      vehicleno: addFormData.vehicleno,
      drivername: addFormData.drivername,
      checkin: addFormData.checkin,
      checkout: addFormData.checkout,
    };

    const newVehicles= [...vehicles, newVehicle];
    setVehicles(newVehicles);
  };
 
  return (

    <div className='appcontainer'>
      <nav class="navbar">
        <div className = "img"><img src="https://img.icons8.com/clouds/50/000000/car.png"/>   </div>
             <div className = "heading">Parking Website </div>
      </nav>
      <div>
    
  <h2> Add Details</h2>
    <form onSubmit={handleAddFormSubmit}>
      <input 
      type="text"
      name="vehicleno"
      placeholder='Enter Vehicle Number..'
      required="required"
      onChange={handleAddFormChange}
      />
      <input 
      type="text"
      name="drivername"
      placeholder='Enter Driver Name..'
      required="required"
      onChange={handleAddFormChange}
      />
      <input 
      type="text"
      name="checkin"
      placeholder="Enter Checkin Time.."
      required="required"
      onChange={handleAddFormChange}
      />
      <input 
      type="text"
      name="checkout"
      placeholder='Enter Checkout Time..'
      required="required"
      onChange={handleAddFormChange}
      />
      <button type="Submit" >Add</button>
    </form>

    <h3>Total Number Of Vehicles = {vehicles.length}</h3>

    
    
  </div>

    <form>
    <table id="tableId">
    <thead>
      <tr>
      <th>VEHICLE NUMBER</th>
      <th>DRIVER NAME</th>
      <th>CHECKIN TIME</th>
      <th>CHECKOUT TIME</th>
      </tr>
    </thead>
    <tbody>
    
      {vehicles.map((vehicle)=>
      ( 
      <tr>
      <td>{vehicle.vehicleno}</td>
      <td>{vehicle.drivername}</td>
      <td>{vehicle.checkin}</td>
      <td>{vehicle.checkout}</td>
      </tr>
      ))}
    </tbody>
  
  
    </table>
    </form>

 

    </div>
  );
}

export default App;
