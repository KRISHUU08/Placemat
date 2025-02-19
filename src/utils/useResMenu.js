import { useEffect, useState } from "react"
import { MENU_API } from "../utils/constants";


const useResMenu = (resId) =>{

    const[resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        const data2 = await fetch (MENU_API + resId);
        const json = await data2.json();
        console.log("api data", json);
        setResInfo(json.data)
    }

    return resInfo;
};

export default useResMenu;