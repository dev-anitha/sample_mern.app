import {useNavigate} from "react-router-dom"
function EmpHome(){
    let currentuser=localStorage.getItem("currentuser")
    let navigate=useNavigate()
    let handlelogout=(e)=>{
        localStorage,removeItem("currentuser")
        navigate("/login")
    }
    return(
        <div>
            <h1>welcome {currentuser}</h1>
            <button onclick={handleLogout}>Logout</button>

        </div>
    )
}
export default EmpHome