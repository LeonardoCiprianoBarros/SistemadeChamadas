import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext({});

function SignIn(email, password){


    alert("Você logou com sucesso ")
}
//cadastrar user
function SignUp ( email, password, name){

    console.log(name)
}


function AuthProvider({children}) {
    const [user, setUser] = useState(null)


    return (
        <AuthContext.Provider value={{
            signed: !!user,
            user,
            SignIn,
            SignUp,
        }}>
                {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider