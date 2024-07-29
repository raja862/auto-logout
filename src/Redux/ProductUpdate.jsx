import axios from "axios";
import { loading,fetchData } from "./mockSlice";
import React, { useEffect, useState } from "react";


import {useDispatch} from "react-redux";


const ProductUpdate=()=>{
const dispatch=useDispatch()
const [apiData,setapiData]=useState([])
const URL="https://jsonplaceholder.typicode.com/users"

useEffect(()=>{
maockAPi()

},[])
const maockAPi=async()=>{
await axios.get(URL).then(res=>setapiData(res.data)).catch((err)=>{console.log(err)})
}

    return(<>
    
    <h1>product update</h1>
    <button onClick={()=>dispatch(fetchData(apiData))}>fetchData</button>
    </>)
}

export default ProductUpdate