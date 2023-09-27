import React, { useState } from 'react'
import { DashboardContext } from "./Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

export default function AppRoot() {
  [token,setToken]=useState(null);

 const setToken=(token)=>{setToken(token)}

/*todo:
add rest of components to routes
make api calls use useContext with dashboardContext

done 

:)

*/

  return (
    <div><DashboardContext.Provider value={authResp}>

      <BrowserRouter>
      <Header/>
      routes go here
      <Footer/>
      </BrowserRouter>
      

  </DashboardContext.Provider>

    </div>
  )
}
