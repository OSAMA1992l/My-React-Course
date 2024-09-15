import getbuttonstyle from "./getbuttonstyle"
function Button({text,oncliCkhander,type='botton',styleType='primary'}){
 console.log(text)
    return(
        <button
        type={type}
        onClick={oncliCkhander}
        className={`py-1 ${getbuttonstyle(styleType)} px-4 mr-2 rounded-md`}
        >
        
        {text}</button>
    )
}




export default Button