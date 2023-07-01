import { createContext, useContext, useEffect, useState } from "react";


 const UserContext = createContext();
const userAuth = () => useContext(UserContext);

const UserContextProvider = ({children}) => {
    const [userInfo,setUserInfo] = useState({});    
    const [showLogin,setShowLogin] = useState(false);

    useEffect(() => {
        if(Object.keys(userInfo).length === 0) setShowLogin(false);
        else setShowLogin(true);
    },[userInfo])
    // console.log(userInfo);
    return(
        <UserContext.Provider value={[userInfo,setUserInfo]}>
            {children}
        </UserContext.Provider>
    )
}

export {userAuth,UserContextProvider};