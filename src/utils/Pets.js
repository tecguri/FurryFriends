import React, { useCallback, useEffect } from 'react';
import { createContext, useState } from 'react';
import { baseUrl, postRequest, getRequest } from './Services';
import Appointments from '../components/Appointments';

export const PetContext = createContext();

export default function Pet({children}) {

    const [user, setUser] = useState((localStorage.getItem("user"))?JSON.parse(localStorage.getItem("user")):null)
    const [saveError, setSaveError] = useState(null)
    const [isPetInfoLoading, setPetInfoLoading] = useState(false)

    const [ownerInfo, setOwnerInfo] = useState([])
    const [ownerPetsList, setOwnerPetsList] = useState([])

    const [appointmentsList, setAppointmentsList] = useState([])

    const [removePetId, setRemovePetId] = useState(0);

    const [errorMsg, setErrorMsg] = useState("");


    useEffect(()=> {
        const user = localStorage.getItem("user");
        if (user) {
            setUser(JSON.parse(user))
            // console.log("users", JSON.parse(user));

            fetchOwnerAppointments();
        }
    }, []);

    const [petInfo, setPetInfo] = useState({
        owner_id: user? user._id:0,
        petname: "",
        age: "",
        breed: "",
        type: "",
        gender: "",
        notes: ""
    });

    const [editPetInfo, setEditPetInfo] = useState({
        owner_id: user? user._id:0,
        petname: "",
        age: "",
        breed: "",
        type: "",
        gender: "",
        notes: ""
    });

    const [editUserInfo, setEditUserInfo] = useState({
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

    const savePetInfo = useCallback((data) => {
        setPetInfo(data);
    }, []);

    const saveEditPetInfo = useCallback((data) => {
        setEditPetInfo(data);
    }, []);

    const saveEditUserInfo = useCallback((data) => {
        setEditUserInfo(data);
    }, []);

    const savePet = useCallback(async(e) => {
        e.preventDefault();
        setPetInfoLoading(true);
        setSaveError(null)
        const response = await postRequest(`${baseUrl}/pets/savePetInfo`, JSON.stringify(petInfo));
        setPetInfoLoading(false);
        if (response.error) {
            return setSaveError(response);
        }
        fetchOwnerPets();
        document.getElementsByClassName("petModal")[0].click();
    }, [petInfo]);

    const editPet = useCallback(async(e) => {
        e.preventDefault();
        setPetInfoLoading(true);
        setSaveError(null)
        const response = await postRequest(`${baseUrl}/pets/editPetInfo`, JSON.stringify(editPetInfo));
        setPetInfoLoading(false);
        if (response.error) {
            return setSaveError(response);
        }
        fetchOwnerPets();
        document.getElementsByClassName("editPetModal")[0].click();
    }, [editPetInfo]);

    const editUsedProfile = useCallback(async(e) => {
        e.preventDefault();
        setSaveError(null)
        // const response = await postRequest(`${baseUrl}/pets/editPetInfo`, JSON.stringify(editPetInfo));
        // if (response.error) {
        //     return setSaveError(response);
        // }
        fetchOwnerPets();
        document.getElementsByClassName("editPetModal")[0].click();
    }, [editUserInfo]);

    const fetchOwnerInfo = useCallback(async(e) => {
        const userId = user? user._id:0;
        let data = []
        if (userId) {
            data = await getRequest(`${baseUrl}/users/find/${userId}`);
            setOwnerInfo(data);
        }
        // console.log("ownerINFO", response)
    });

    useEffect(()=> {
        fetchOwnerInfo();
    }, [fetchOwnerInfo]);

    useEffect(()=> {
        fetchOwnerPets();
    }, []);

    const fetchOwnerPets = useCallback(async(e) => {
        const userId = user? user._id:0;
        if (userId) {
            const response = await postRequest(`${baseUrl}/pets/getPets`, JSON.stringify({owner_id: userId}));
            setOwnerPetsList(response);
        }
    });

    const removePet = useCallback(async(e) => {
        const pet_id = e? e:0;
        const response = await getRequest(`${baseUrl}/pets/removePet/${pet_id}`);
        setRemovePetId(0);
        fetchOwnerPets();
        document.getElementsByClassName("closealert")[0].click();
    }, []);

    const getEditInfoForPet = useCallback(async(e) => {
        const pet_id = e? e:0;
        const response = await getRequest(`${baseUrl}/pets/find/${pet_id}`);
        if (response) {
            setEditPetInfo(response);
        }
    }, []);


    const [loader, setLoader] = useState(false);
    const [appointmentInfo, setAppointmentInfo] = useState({
        owner_id: "",
        pet_id: "",
        service: "",
        comments: "",
        status: "Active"
    });

    const saveAppointmentInfo = useCallback((data) => {
        setAppointmentInfo(data);
    }, []);

    const saveAppointment = useCallback(async(e) => {
        e.preventDefault();
        setLoader(true);
        console.log("Appointment booked", appointmentInfo);
        
        const response = await postRequest(`${baseUrl}/appointment/saveAppointment`, JSON.stringify(appointmentInfo));

        if (response.error) {
            return setSaveError(response);
        }

        setTimeout(() => {
            setLoader(false);
            document.getElementsByClassName("closeAppointmentModal")[0].click();
        }, 1500);

        fetchOwnerAppointments();
    }, [appointmentInfo]);

    const fetchOwnerAppointments = useCallback(async() => {
        const userId = user && user._id? user._id: 0;
        setErrorMsg("");
        const response = await getRequest(`${baseUrl}/appointment/fetchUserAppointments/${userId}`);
        if (response.error) {
            return setErrorMsg(response);
        }

        setAppointmentsList(response);

    }, [user]);

    
    return (
        <>
            <PetContext.Provider value={{
                    user,
                    petInfo,
                    savePetInfo,
                    saveError,
                    savePet,
                    isPetInfoLoading,
                    ownerInfo,
                    ownerPetsList,
                    removePet,
                    removePetId,
                    setRemovePetId,
                    appointmentsList,
                    appointmentInfo,
                    setAppointmentInfo,
                    saveAppointmentInfo,
                    saveAppointment,
                    loader,
                    errorMsg,
                    editPet,
                    editPetInfo, 
                    saveEditPetInfo,
                    getEditInfoForPet,
                    editUserInfo,
                    editUsedProfile,
                    saveEditUserInfo
                }}>
                {children}
            </PetContext.Provider>
        </>
    )
}
