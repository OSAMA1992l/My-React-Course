function getbuttonstyle(styleType){
    if(styleType==="primary"){
        return 'bg-blue-500'
    }else if(styleType==="secondary"){
        return 'bg-yellow-500'
    } else if(styleType==='three'){
        return 'bg-red-500'
    }
}

export  default getbuttonstyle