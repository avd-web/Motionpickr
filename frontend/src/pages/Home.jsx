import React, { useEffect, useState ,useContext} from "react";
import axios from "axios";
import { DashboardContext } from "./Context";
import UserPage from "./UserPage";
import Register from "./Register";
import Login from "./Login";


export default function Home({setTokenEvent,removeTokenEvent}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [authResp, setAuthResp] = useState(null);

  const access_token = useContext(DashboardContext);

 

  const handleSubmit = async (event) => {
    event.preventDefault();
    let authBody = { email: email, password: password };
    // console.log(authBody);

    let auth = await axios
      .post("http://localhost:8080/api/v1/auth/authenticate", authBody)
      .then((response) => {
        setTokenEvent(response.data.access_token);
        // console.log(response.data.access_token);
        return response.data.access_token;
      })
      //ADD ERROR HANDLING
      .catch((error) => console.log(error));

    setAuthResp(auth);
    // console.log(auth);

    emptyForm();
  };

  const emptyForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleLogout = () => {
    removeTokenEvent();
    setAuthResp(null);
    
  };

  if (!access_token) {
    return (
      <div>
        <div>
      <Login persistTokenEvent={setTokenEvent}/>
          <Register />
        </div>
      </div>
    );
  }

  return (
    <>  
        <UserPage />
      <p>You are logged in</p>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
