import React from "react";
import { useNavigate, useParams } from "react-router";

export const MyComponent = () => {
const params = useParams()
const navigate = useNavigate()
function handleClick(){
    navigate('/')
}
    return (
        <>
        <div>{params.name}</div>
        <button onClick={handleClick}>Go to Home!!!</button>
        </>
    )
}