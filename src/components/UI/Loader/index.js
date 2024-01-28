import {MutatingDots} from "react-loader-spinner"; 
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"; 
  
export default function SpinnerLoading(){ 
  return (
    <div className="w-screen h-screen fixed top-0 left-0 z-50 flex items-center justify-center bg-white"> 
      <MutatingDots 
        color="#009254"
        secondaryColor="#009254"
        height={100} 
        width={100}   
      />  
    </div> 
  ) 
}