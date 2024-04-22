import { createContext, useEffect, useState } from "react";



const MobileHandlerContext = createContext();


function MobileHandlerProvider({children}) {
    const [isMobile , setisMobile] = useState()
    const [openMenu , setOpenMenu] = useState(false)
    const ismobilehandler = (e) => {
        setisMobile(e.matches);
    }

    
    useEffect(() => {
        window.matchMedia("(max-width:1024px)").addEventListener("change" , ismobilehandler);
        setisMobile(window.matchMedia("(max-width:1024px)").matches);
    } , [])
    return <MobileHandlerContext.Provider value={{isMobile , setOpenMenu , openMenu}}>{children}</MobileHandlerContext.Provider>
}
export {MobileHandlerContext , MobileHandlerProvider}