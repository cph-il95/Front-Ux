import React from "react";
import CPHlogo from "../../img/CPHlogo.png"


export default function DefaultLayout({ children }) {
  return (
    <div>
      <img src={ CPHlogo } alt="CPHlogo"></img>
      {children}
    </div>
  );
}
