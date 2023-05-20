
import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title= `PJMARKS - ${title}`;
    },[title])
};

export default useTitle;