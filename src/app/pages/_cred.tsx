import React from "react"
import FirstInput from "../components/Header/input1"
import SecondInput from "../components/Header/input2"
import Buttontag from "../components/Header/button"


function MyApp(){
    return(
        <>
    
        <FirstInput label={"Enter your credentials"} placeholder={"Enter your name"}/>
        <br/>
        <SecondInput placeholder={"Enter your username"}/>
        <br/>
        <Buttontag/>
        </>
    )
}
export default MyApp