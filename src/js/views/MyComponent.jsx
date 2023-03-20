import React from "react";
import { useParams } from "react-router";

export const MyComponent = () => {
const params = useParams()
    return (
        <div>{params.name}</div>
    )
}