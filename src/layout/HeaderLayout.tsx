import { Outlet } from "react-router"
import Header from "../components/Header"

function HeaderLayout(){
    return(
        <>
        <Header/>
        <Outlet/>
        </>
    )
}

export default HeaderLayout