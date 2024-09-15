import { useState } from "react";
import Textinputform from "./Textinputform"


function TextinputformConatiner(){
 
 const [inputType,setinputType]=useState()

  function handleFormsumbit(event){
    event.preventDefault();
    
   }

  function handleTextInputCahnge(event){
   console.log(event.target.value);

  }

  function handleshowhide(){
    console.log("show hide click")
    if(inputType==='password'){
    setinputType('text')
    }else{
      setinputType('password')
    }
    console.log(inputType)
  }

      return(
        <Textinputform
        inputType={inputType}
          handleshowhide={handleshowhide}
           handleFormsumbit={handleFormsumbit}
           handleTextInputCahnge={handleTextInputCahnge} 
        />
      )
}

export default TextinputformConatiner;