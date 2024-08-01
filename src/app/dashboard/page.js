"use client"
import { getUserDetails } from "@/axios";
import { useEffect, useState } from "react";

function Dashboard() {
  const [isPageLoaded, setIsPageLoaded] = useState(false)
  const [pageData, setPageData] = useState({})
  const getData = async () =>{
    try {
      const {data} = await getUserDetails()
      setPageData(data.data)
      setIsPageLoaded(true)
    }
    catch (e) {
      console.log(error)
    }
  }
  useEffect(() => {
    getData();
  }, [])
  return (
    <>
      {isPageLoaded ? JSON.stringify(pageData) : ""}
      <h1>Dash Board</h1>
    </>
  );
}



export default Dashboard;