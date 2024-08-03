import React, { useCallback, useEffect } from 'react';
import { createContext, useState } from 'react';
import { baseUrl, postRequest, getRequest } from './Services';
import { redirect } from 'react-router-dom';

export const AuthContext = createContext();

export default function Auth({children}) {

    const [user, setUser] = useState(null)
    const [registerError, setRegisterError] = useState(null)
    const [loginError, setLoginError] = useState(null)
    const [isRegisterLoading, setIsRegisterLoading] = useState(false)

    const [a_appointmentList, set_a_appointmentList] = useState([])
    const [a_usersList, set_a_usersList] = useState([])

    const [loading, setLoading] = useState(true)


    const [loginInfo, setLoginInfo] = useState({
        email:"",
        password:""
    });

    const [registerInfo, setRegisterInfo] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: "",
        address: "",
        address2: "",
        city: "",
        province: "",
        postalcode: ""
    });


    useEffect(()=> {
        const user = localStorage.getItem("user");
        setUser(JSON.parse(user))

        setTimeout(() => {
            fetchAllAppointments();
            fetchAllUsers();
        }, 900);
    }, []);

    const updateRegisterInfo = useCallback((data) => {
        setRegisterInfo(data);
    }, []);

    const updateLoginInfo = useCallback((data) => {
        // console.log("login data", data)
        setLoginInfo(data);
    }, []);

    const registerUser = useCallback(async(e) => {
        e.preventDefault();
        setIsRegisterLoading(true);
        setRegisterError(null)

        // console.log(registerInfo);
        const response = await postRequest(`${baseUrl}/users/register`, JSON.stringify(registerInfo));
        setIsRegisterLoading(false);

        // console.log("responseresponseresponse",response);
        if (response.error) {
            return setRegisterError(response);
        }

        localStorage.setItem("user", JSON.stringify(response))
        setUser(response)
        
        document.getElementsByClassName("signupModal")[0].click();
    }, [registerInfo]);

    const logoutUser = useCallback(async()=>{
        localStorage.removeItem("user");
        setUser(null);
        window.location.reload();
        redirect("/");
    }, []);

    const loginUser = useCallback(async(e) => {
        e.preventDefault();
        // setIsRegisterLoading(true);
        setLoginError(null)

        // console.log(loginInfo);
        const response = await postRequest(`${baseUrl}/users/login`, JSON.stringify(loginInfo));
        // setIsRegisterLoading(false);

        // console.log("responseresponseresponse",response);
        if (response.error) {
            return setLoginError(response);
        }

        localStorage.setItem("user", JSON.stringify(response))
        setUser(response)
        document.getElementsByClassName("btn-close")[0].click();
        // modalclose.trigger('click')
        window.location.reload();
    }, [loginInfo]);

    

    const fetchAllAppointments = useCallback(async()=>{
        const response = await getRequest(`${baseUrl}/appointment/fetchAllAppointments`);
        if (response.error) {
            return setLoginError(response);
        }
        set_a_appointmentList(response);
    }, [a_appointmentList]);

    const fetchAllUsers = useCallback(async()=>{
        const response = await getRequest(`${baseUrl}/users/getUsers`);
        if (response.error) {
            return setLoginError(response);
        }
        set_a_usersList(response);
    }, [a_usersList]);


    return (
        <>
            <AuthContext.Provider value={{
                    user,
                    registerInfo,
                    updateRegisterInfo,
                    registerError,
                    registerUser,
                    isRegisterLoading,
                    logoutUser,
                    updateLoginInfo,
                    loginUser,
                    loginError,
                    loginInfo,
                    a_appointmentList,
                    a_usersList
                }}>
                {children}
            </AuthContext.Provider>
        </>
    )
}
