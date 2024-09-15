
function Textinput({type='text',onChangehandler,label,placeholde='enter your input here'}){
return(
   <label>
   <span>{label}</span>
   <input
    type={type}
    className="w-full px-2 border rounded-md"
    placeholder={placeholde}
    
    onChange={onChangehandler}
   />


   </label>
)
}

export default Textinput