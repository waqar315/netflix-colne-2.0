import axios from "axios"
import { useEffect, useState } from "react"
import requests from "./requests"


function Banner() {
    const[movie, setMovie]=useState
    useEffect(()=>{
        async function fetchData(){
            const request= await axios.get(request.data)
        }
        fetchData()
    },[])

    return (
        <header className="header" > {/* Background Image */}
            {/* title */}
            {/* div > 2* buttonn */}
            {/* discription */}
        </header>
    )
}

export default Banner
