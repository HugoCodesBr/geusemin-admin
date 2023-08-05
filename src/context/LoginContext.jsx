import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext()

export const LoginProvider = ({children}) => {
  const [userLogged, setUserLogged] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('isLogged') === 'true'){
      setUserLogged(true)
    }
  }, []);

  return <LoginContext.Provider value={{userLogged, setUserLogged}}>{children}</LoginContext.Provider>
}