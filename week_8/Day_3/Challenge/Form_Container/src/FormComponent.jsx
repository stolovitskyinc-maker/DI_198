import React from "react";

function FormComponent(props) {
  return (
    <main style={{ fontFamily: "sans-serif" }}>
      {/* Form Submission UI */}
      <form method="GET" action="" style={{ backgroundColor: "#e3b887", padding: "20px" }}>
        <h2 style={{ margin: "0 0 20px 0" }}>Sample form</h2>
        
        <input 
          type="text" 
          name="firstName" 
          value={props.data.firstName} 
          onChange={props.handleChange} 
          placeholder="First Name" 
          style={{ display: "block", width: "500px", padding: "5px", marginBottom: "10px" }}
        />
        
        <input 
          type="text" 
          name="lastName" 
          value={props.data.lastName} 
          onChange={props.handleChange} 
          placeholder="Last Name" 
          style={{ display: "block", width: "500px", padding: "5px", marginBottom: "10px" }}
        />
        
        <input 
          type="number" 
          name="age" 
          value={props.data.age} 
          onChange={props.handleChange} 
          placeholder="Age" 
          style={{ display: "block", width: "500px", padding: "5px", marginBottom: "20px" }}
        />
        
        <label style={{ display: "block", marginBottom: "5px" }}>
          <input 
            type="radio" 
            name="gender" 
            value="male" 
            checked={props.data.gender === "male"} 
            onChange={props.handleChange} 
          /> Male
        </label>
        
        <label style={{ display: "block", marginBottom: "15px" }}>
          <input 
            type="radio" 
            name="gender" 
            value="female" 
            checked={props.data.gender === "female"} 
            onChange={props.handleChange} 
          /> Female
        </label>
        
        <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>Select your destination</label>
        <select 
          name="destination" 
          value={props.data.destination} 
          onChange={props.handleChange}
          style={{ display: "block", marginBottom: "20px", padding: "3px" }}
        >
          <option value="">-- Please Choose a destination --</option>
          <option value="Japan">Japan</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Germany">Germany</option>
        </select>
        
        <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>Dietary restrictions:</label>
        <label style={{ display: "block", marginBottom: "5px" }}>
          <input 
            type="checkbox" 
            name="nutsFree" 
            checked={props.data.nutsFree} 
            onChange={props.handleChange} 
          /> Nuts free
        </label>
        <label style={{ display: "block", marginBottom: "5px" }}>
          <input 
            type="checkbox" 
            name="lactoseFree" 
            checked={props.data.lactoseFree} 
            onChange={props.handleChange} 
          /> Lactose free
        </label>
        <label style={{ display: "block", marginBottom: "20px" }}>
          <input 
            type="checkbox" 
            name="vegan" 
            checked={props.data.vegan} 
            onChange={props.handleChange} 
          /> Vegan
        </label>
        
        <button type="submit" style={{ padding: "8px 20px", cursor: "pointer" }}>Submit</button>
      </form>

      <hr style={{ border: "none", height: "10px", backgroundColor: "#fff", margin: "0" }} />

      {/* Rendered Live Preview UI */}
      <div style={{ backgroundColor: "#1e5252", color: "white", padding: "20px", minHeight: "300px" }}>
        <h2 style={{ margin: "0 0 25px 0" }}>Entered information:</h2>
        <p>Your name: {props.data.firstName} {props.data.lastName}</p>
        <p>Your age: {props.data.age}</p>
        <p>Your gender: {props.data.gender}</p>
        <p>Your destination: {props.data.destination}</p>
        <p style={{ marginBottom: "15px" }}>Your dietary restrictions:</p>
        <div style={{ paddingLeft: "20px", fontStyle: "italic" }}>
          <p>**Nuts free : {props.data.nutsFree ? "Yes" : "No"}</p>
          <p>**Lactose free : {props.data.lactoseFree ? "Yes" : "No"}</p>
          <p>**Vegan meal : {props.data.vegan ? "Yes" : "No"}</p>
        </div>
      </div>
    </main>
  );
}

export default FormComponent;
