'use client';
import { useEffect } from "react";

export default function Services() {

    useEffect(() => {
        getTesting();
    },[]);

    async function getTesting() {
        let a = await fetch("http://localhost:4000/api/getUser", {
            method: "GET", headers: {
              "Content-Type": "application/json",
            },
          })
          let res = await a.json()
          console.log(res)
    }
    
    return (
        <>this is services us page</>
    )
}