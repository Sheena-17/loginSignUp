import { NavLink } from "react-router-dom";
import { Sign_img } from "./Sign_img";
import { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const  Home = () => {
    const [ name , setName ] = useState("");
    const [ email , setEmail ] = useState("");
    const [date, setDate] = useState("");
    const [password,setPasseword] = useState("");
    const [data,setData] = useState([]);
    const [formData,setFormData] = useState([]);

    useEffect(()=>{
           let localStrData = localStorage.getItem("UserData");
           if(localStrData){
            let parseLocalStrData = JSON.parse(localStrData);
            setFormData(parseLocalStrData);
 
           }
    },[]);

    const showToastMessage = () => {
        toast.success('Successfully Sign Up !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    const getData = (e) => {   
        let userData = {name,email,date,password};
        e.preventDefault();
        let userSignUp = [...formData,userData];
        setFormData(userSignUp);
        console.log(userData);
        localStorage.setItem("UserData",JSON.stringify(userSignUp));
        showToastMessage();
    }
    // JSON.stringify store the data in the JSON format.
    
    return (
        <>
            <div className="container mt-3">
                <section className="d-flex justify-conetent-between">
                    <div className="left-data col-lg-6 mt-5 " >
                        <h3 className="center">Sign Up</h3>
                        <form onSubmit = {getData}>
                        <div class="mb-3 col-lg-6" >
                                <input type="text" class="form-control" name = "name" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Name" value = {name} onChange={(e)=>setName(e.target.value)}/>                               
                            </div>
                            <div class="mb-3 col-lg-6" >
                                <input type="email" class="form-control"  name = "email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email" value = {email} onChange={(e)=>setEmail(e.target.value)}/>                               
                            </div>
                            <div class="mb-3 col-lg-6" >
                                <input type="date" date class="form-control" name = "date" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Date" value = {date} onChange={(e)=>setDate(e.target.value)}/>                               
                            </div>
                            <div class="mb-3 col-lg-6">                              
                                <input type="password" class="form-control" name = "password" id="exampleInputPassword1" placeholder="Password" value = {password} onChange={(e)=>setPasseword(e.target.value)}/>
                            </div>
                            <button type="submit" class="btn btn-primary col-lg-6" style = {{backgroundColor: " #FF651C"}} >Submit</button>
                        </form>
                        <p class ="mt-5">Already have an account <span><NavLink to = "/login">Signin</NavLink></span></p>
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