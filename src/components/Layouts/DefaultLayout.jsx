import React from "react";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <img src="/CPHlogo.png" alt="CPHlogo"></img>
      {children}
    </div>
  );
}
