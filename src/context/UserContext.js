import { createContext } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const UserContextApi = createContext()

export const UserContextProvider = ({ children }) => {


    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log(user)
        } else {
            console.log("Please log in now!")
        }
    });

    return <UserContextApi.Provider value={{ Username: "Saidislom...." }}>{children}</UserContextApi.Provider>
}



