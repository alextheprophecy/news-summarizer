import React, { useState, useEffect } from "react";
import axios from "axios";
const Person = () => {

    const [image, setImage] = useState("")
    useEffect(() => {
        axios
            .post("http://localhost:4000/person/image", {name:"Donald_Trump"})
            .then((res) => setImage(res.data))
    }, []);

    return (
        <div className="table-wrapper">
hey
            <img src={image} alt="image"/>
        </div>
    );
};

export default Person;