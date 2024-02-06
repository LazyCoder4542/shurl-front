"use client"
import { getUserDetails } from "@/axios";
import { useEffect, useState } from "react";

function Dashboard() {
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const [pageData, setPageData] = useState({})
  useEffect(() => {
    getUserDetails().then(data => {
      console.log(data)
    })
    .catch((error) => {
      console.log(error)
    })
    setIsPageLoaded(true)
  }, [])
  return (
    <>
      {isPageLoaded ? JSON.stringify(pageData) : ""}
      <h1>Dash Board</h1>
    </>
  );
}

function getData(){
  
}

export default Dashboard;