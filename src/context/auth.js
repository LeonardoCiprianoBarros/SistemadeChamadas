import { useState, createContext, useEffect } from "react";

export const AuthContext = createContext({});

function SignIn(email, password){


    alert("Você logou com sucesso "+'email: ' + email+ ' senha: '+password)
}


function AuthProvider({children}) {
    const [user, setUser] = useState(null)


    return (
        <AuthContext.Provider value={{
            signed: !!user,
            user,
            SignIn
        }}>
                {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider