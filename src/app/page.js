"use client"

import { useState } from "react";

export default function Home() {
  
  const [result,setResult]=useState("");

  const handleClick = async () => {
    let data = {
      name: "Shubham",
      role: "Coder"
    }
    let a = await fetch("/api/add", {
      method: "POST", headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    console.log(a,"_____________________________");

    let res = await a.json();
    setResult(res);
  }

  return (
    <>
      <button onClick={handleClick}>Click here</button>
      <div><label>name: {result?.name} role:{result?.role}</label></div>
    </>
  );
}
