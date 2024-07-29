import React from "react";
import {useSelector} from "react-redux";



const Productpage=()=>{


    const isloading=useSelector (state=>state.mockAPIReducer.value)
    const value=useSelector(state=>state.mockAPIReducer.value)






return(<>

<h1>product</h1>

{isloading? value.map((item,index)=>{
    return(<>
    <div key={index}>
        <h1>{item.name}</h1>
    </div>
    </>)
}):"loading.."}


</>)


}
export default Productpage;