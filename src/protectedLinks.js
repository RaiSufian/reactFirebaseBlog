import { useNavigate } from 'react-router-dom';
import { useFirebase } from './firebase';
import { useState, useEffect } from "react";

const ProtectedLink = ({ children }) => {
  const firebase = useFirebase();
  const navigate = useNavigate();
  const [user, setuser] = useState();
  useEffect(() => {
    setuser(firebase.userLogin);
  }, [])

  if(user){
    return children;
  }
  else {
    // navigate("/auth")
    return children;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
  }

}
export default ProtectedLink;