import { useEffect, useState } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom"
import Login from "../../pages/Login/Login"

const AuthRouter = ({ children, router = []}) => {
    const isAuth = true;
    const [auth, setAuth] = useState(isAuth);

    useEffect(() => {
        setAuth(isAuth);
    },[])

    return (
        <Routes>
            <Route element={auth ? <Outlet /> : <Navigate to='/login'/>}>
                {children(router.filter(item => !item['passAuth']))}
            </Route>
            <Route element={!auth ? <Outlet/> : <Navigate to='/' />}>
                {children(router.filter(item => item['passAuth']))}
            </Route>
        </Routes>
    )
}
export default AuthRouter