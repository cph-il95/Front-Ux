import React from "react";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <header>
        <img src="/CPHlogo.png" alt="CPHlogo"></img>
      </header>
      {children}
    </div>
  );
}
