import Nasa from "./Nasa";

 export async function fetchData () {
    try {
        const process = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')

        const process_due = await process.json();
     
        return process_due;
        
    } catch (error) {
        console.log('err');
        
       return null        
    }
    
        
     };
        
    
        
        
    
 

// import React from "react";
 const  Page = async() => {
    const Data = await fetchData();
    
  return (
    <>
           <Nasa NasaData={Data}/>

    </>
  )
}

export default Page
