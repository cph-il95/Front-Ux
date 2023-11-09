import React from "react";
import Footer from "../molecules/Footer";

export default function DefaultLayout({ children }) {
  return (
    <div>
      {/* Header */}
      {children}
      <Footer />
    </div>
  );
}
