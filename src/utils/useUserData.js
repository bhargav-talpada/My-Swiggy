import { useEffect, useState } from "react";

const useUserData = () => {

    const [userData, setUserData] = useState([]);

    useEffect(()=>{
        fetchUser();
    });

    const fetchUser = async () => {
        const user = await fetch('https://api.github.com/users/Bhuro11');
        const jsonuser = await user.json();
        setUserData(jsonuser);
    }

    return userData
}

export default useUserData;