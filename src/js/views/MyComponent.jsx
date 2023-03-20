import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router";
import { Context } from "../store/appContext";

export const MyComponent = () => {
    const { store } = useContext(Context);
const params = useParams()
const navigate = useNavigate()
function handleClick(){
    navigate('/')
}
    return (
        <>
        <div>{params.name}</div>
        <h1>{store.demo[0].background}</h1>
        <button onClick={handleClick}>Go to Home!!!</button>
        </>
    )
}