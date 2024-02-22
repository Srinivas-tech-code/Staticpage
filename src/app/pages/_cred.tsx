import React from "react"
import FirstInput from "../components/Input1/input1"
import SecondInput from "../components/Input2/input2"
import Buttontag from "../components/button/button"
import Link from "next/link"


function MyApp(){
    return(
        <>
        <html style={{width:'auto'}}>
        <FirstInput label={"Enter your credentials"} placeholder={"Enter your name"}/>
        <br/>
        <SecondInput placeholder={"Enter your username"}/>
        <br/>
        <Buttontag/>
        <br/>
        <Link href="/pages/post/">Click</Link>
        </html>
        </>
    )
}
export default MyApp