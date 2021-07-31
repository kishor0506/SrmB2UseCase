import React, { useState } from 'react'
import axios from 'axios';
export default function Login() {

    const[signUP,setSignUP] =useState({
        rUsername:'',
        rPassword:'',
        rEmail:''
    })

    const sOnchange= (e) =>{
        setSignUP((prev)=>{
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
        console.log(signUP);
    }

    const onsubmit=()=>{
        axios.post("http://localhost:8082/api/user",signUP).then(
            (res) =>{
                console.log(res);
            }
        ).catch((err)=>{console.log("err")})
    }


    return (
        <div >
        <div className="login-wrap" style={{marginTop:'110px'}}>
        <div className="login-html">
            <input id="tab-1" type="radio" name="tab" className="sign-in" /><label for="tab-1" className="tab"></label>
            <input id="tab-2" type="radio" name="tab" className="sign-up" checked/><label for="tab-2" className="tab">SignUp</label>
            <div className="login-form">
                <div className="sign-in-htm">
                    <div className="group">
                        <label for="user" className="label">Username</label>
                        <input id="user" type="text" className="input" placeholder="Enter The UserName"/>
                    </div>
                    <div className="group">
                        <label for="pass" className="label">Password : </label>
                        <input id="pass" type="password" className="input" data-type="password" placeholder="***********"/>
                    </div>
                    <div className="group">
                        <input id="check" type="checkbox" className="check" checked/>
                        <label ><span className="icon"></span> Keep me Signed in</label>
                    </div>
                    <div className="group">
                        <input type="button" className="button" value="Sign In"/>
                    </div>
                    <div className="hr"></div>
                    <div className="foot-lnk">
                        <a href="#forgot">Forgot Password?</a>
                    </div>
                </div>
                <div className="sign-up-htm">
                    <div className="group">
                        <label for="user" className="label">Username</label>
                        <input name="rUsername" type="text" className="input" onChange={sOnchange}/>
                    </div>
                    <div className="group">
                        <label for="pass" className="label">Password</label>
                        <input  name="rPassword" type="password" className="input" data-type="password" onChange={sOnchange}/>
                    </div>
                    <div className="group">
                        <label for="pass" className="label">Repeat Password</label>
                        <input  type="password" className="input" data-type="password"/>
                    </div>
                    <div className="group">
                        <label for="pass" className="label">Email Address</label>
                        <input  name="rEmail" type="text" className="input" onChange={sOnchange}/>
                    </div>
                    <div className="group">
                        <input type="button" className="button" value="Sign Up" onClick={onsubmit}/>
                    </div>
                    <div className="hr"></div>
                    <div className="foot-lnk">
                        <label for="tab-1">Already Me</label>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div> 
    )
}




