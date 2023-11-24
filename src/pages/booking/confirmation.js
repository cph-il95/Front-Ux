import React from "react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function confirmation() {
  const router = useRouter();

  // Sikre siden mod adgang hvis man ikke er logget ind
  useEffect(() => {
    const email = JSON.parse(localStorage.getItem("email"));
    if (!email) {
      router.push("/signup");
    }
  }, []);
  return <div>confirmation</div>;
}
