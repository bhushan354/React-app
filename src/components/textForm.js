import React, { useState } from "react";


export default function TextForm(prps) {
  const handleUpClick = () =>{
    console.log("Uppercase Was Clicked");
  }
  const handleOnChange = ()=>{
    console.log("On Change");
  }



  const [text, setText] = useState("Enter Text Here2");// HOOKS -- in react u cannot change state of variables like normally u change in other cases, here you use THIS syntex , so in this , first value will be assigned to "text "then if you modify it then it will be assigned to "setText"


  return (
    <div>
      <h1>{props.heading} </h1>
      <div className="mb-3">
        <textarea className="form-control" OnChange = 
        {handleOnChange} value={text} id="myBox" rows="8"></textarea>
      </div>
      <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert To Uppercase</button>
    </div>
  );
}
