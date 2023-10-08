import { useState } from "react";
import { Sign_img } from "./Sign_img";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const Login = () => {
    const [ email , setEmail ] = useState("");
    const [password,setPasseword] = useState("");
    const [data,setData] = useState([]);
    const navigate = useNavigate();
    const showToastMessage = () => {
        toast.success('Successfully Sign Up !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    const getData = (e) => {
       e.preventDefault();
        const getUserFromLocalStoarage = localStorage.getItem("UserData");
        console.log("getUserFromLocalStorage" ,getUserFromLocalStoarage);
        if(getUserFromLocalStoarage&&getUserFromLocalStoarage.length){
            const userData = JSON.parse(getUserFromLocalStoarage);
            const userLogin = userData.filter((element) =>{
                return element.email === email && element.password === password;
            })
            console.log("UserLogin is ",userLogin);
            console.log("USerData in json parse form",userData);
            if(userLogin.length === 0){
                alert("Invalid Details");
            }else{
                localStorage.setItem("userLogin",JSON.stringify(userLogin));
                showToastMessage();
                navigate("/details");
            }
        }
    }

    // JSON.parse convert json format data into the object.
    
    return(
        <>
            <div className="container mt-3">
                <section className="d-flex justify-conetent-between">
                    <div className="left-data col-lg-6 mt-5     " >
                        <h3 className="center">Sign In</h3>
                        <form onSubmit={getData}>
                            <div class="mb-3 col-lg-6" >
                                <input type="email" class="form-control"  name = "email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" onChange={(e)=>setEmail(e.target.value)}/>                               
                            </div>
                            <div class="mb-3 col-lg-6">                              
                                <input type="password" class="form-control" name = "password" id="exampleInputPassword1" placeholder="Password" onChange={(e)=>setPasseword(e.target.value)}/>
                            </div>
                            <button type="submit" class="btn btn-primary col-lg-6" style = {{backgroundColor: " #FF651C"}} >Login</button>
                        </form>
                    </div>
                   <Sign_img/>
                </section>
                <div>
            <ToastContainer />
        </div>
            </div>
        </>
    )
}