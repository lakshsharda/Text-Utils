import React, { useState } from "react";
//DARK MODE OR LIGHT MODE

export default function About() {
  //Use state hook used for the button's text switch
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  
  //Default style i.e the config of the light mode
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  //Function to toggle the modes and the text of the button

  const toggleStyle = () => {
    if (myStyle.color == "black") {
  //using hook usestate here 
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: '2px solid white'
      });
//here too
      setBtnText("Enable Light Mode");

      //using hook usestate here 
    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
         border: '2px solid black'
      });

      //here too

      setBtnText("Enable Dark Mode");
    }
  };

  return (
    <div className="container">
      <h1 className="my-3">About us</h1>
      {/* style called here */}
      <div class="accordion" id="accordionExample" style={myStyle}>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body" style={myStyle}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>

      
{/* 
      button for enabling the modes */}
      <div className="container my-3">
        <button type="button" class="btn-btn-primary" onClick={toggleStyle}>
          {btnText}
        </button>
      </div>
    </div>
  );
}
