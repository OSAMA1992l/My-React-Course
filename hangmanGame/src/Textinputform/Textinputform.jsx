import Button from "../components/button"
import Textinput from "../Textinput/Textinput"

function Textinputform({inputType,handleFormsumbit,handleTextInputCahnge,handleshowhide}){
   
    

return(
  <form onSubmit={handleFormsumbit}>
    <div>
        <Textinput
           type={inputType}
           placeholde="enter your word"
           label='enter a word' 
           onChangehandler={handleTextInputCahnge}
        />
    </div>

    <div>
        <Button
            styleType="three"
             text={inputType==='password' ? 'show' :'Hide'}
             oncliCkhander={handleshowhide}
        />
    </div>

    <div>
        <Button
            styleType="primary"
            type="sumbit"
            text='sumbit'
        />
    </div>

  </form>
)

}
export default Textinputform