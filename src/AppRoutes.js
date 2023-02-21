import React, { useContext} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom"
import { AuthProvider, AuthContext } from './contexts/auth'
import Register from "./pages/Register"
import Login from "./pages/Login"
import HomePage from "./Pages/HomePage"

const AppRoutes = () => {

    const Private = ({children}) => {
        const { authenticated, loading } = useContext(AuthContext)
    
        if(loading) {
          return <div className='loading'>Carregando...</div>
        }
    
        if( !authenticated ) {
          return <Navigate to="/login" />
        }
    
        return children
    }

    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route exact path="/cadastro" element={<Register/>}/>
                    <Route exact path="/login" element={<Login/>}/>
                    <Route exact path="/home" element={
                        <Private>
                            <HomePage/>
                        </Private>
                    }/>
                </Routes>
            </AuthProvider>
        </Router>
    )
}

export default AppRoutes