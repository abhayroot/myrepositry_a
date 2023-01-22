import React from "react";
import "./form.css"
function Form() {
  return (
    <>
      <div>
        <h1>Enquiry Form</h1>
      </div>
      <form id="inquiry">
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname"></input>
        <p></p>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname"></input>
        <p></p>
        <input type="radio" id="male" name="Gender" value="male"></input>
        <label for="male">Male</label>
        <input type="radio" id="Female" name="Gender" value="Female"></input>
        <label for="Female">Female</label>
        <p></p>
        
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"></input><p></p>
        <input type="checkbox" id="18+" name="18+" value="18+"></input>
        <label for="18+"> I am 18+</label>
        
        <p></p>
      </form>
      <textarea name="issue" form="inquiry">Type your issues</textarea><br></br>
      <button type="submit" id="sub" name="submit">
          submit
        </button>
    </>
  );
}
export default Form;
