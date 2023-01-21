import React from "react";
import  ReactDOM  from "react-dom/client";
export default function Form()
{
    return(
        
        
        <form>
            <input type="text">type your name:</input>
            <input type="radio" id="Gender_male" name="Gender" value="Male">
            <label for="Male">Male</label><br></br></input>
            <input type="radio" id="Gender_Female" name="Gender" value="FeMale">
            <label for="FeMale">Female</label><br></br></input>
            <button type="submit">Submit</button>
        </form>
        
    )
}
 ReactDOM.createRoot(document.getElementById('root2')).render(<Form />)