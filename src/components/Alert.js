import React from "react";
import PropTypes from "prop-types";


export default function Alert(props) {


    const capitalise=(word)=>{
    const lower= word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    //here props.alert && is used to ensure that is the value of its is not null then the
    // further argument gets executed otherwise not
  return (

    //idhar ek backticks lagakr javascript ko uske krlia or yahan pr alert-warning ki jagah jo type humne pass kia hai uske basis pe colores show hoga
   props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">

    {/* here first alert type  is shown  and then the message for the alert */}
    <strong>{capitalise(props.alert.type)}</strong> : {props.alert.message}
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}
